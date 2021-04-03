const { json } = require('express');
const express=require('express');
const request=require('request');
const mongoose=require('mongoose');
const Register=require('./registerSchema');
const Contact=require('./contactSchema');
const bodyparser=require('body-parser');
const cors=require('cors');

const app=express();
app.set('view engine', 'ejs');




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyparser.json())
app.use(cors());
const port=5000;



app.use(express.json());
// app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect("mongodb://localhost/NewDb1",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>console.log('suceesfully connected to the database'))
.catch(e=>console.log(e.message));

// app.get('/userProfile',(req,res)=>{
//   res.render('pages/userProfile')
// })

app.post('/register',async(req,res)=>{
    try
    {
        console.log(req.body)
        const {body}=req;
        const {password,confirm_password}=body;
        if(password===confirm_password)
        {
          const{first_name,last_name,username,password,phoneno,adhno,addr1,addr2,city,zip}=body;
          let{email}=body;
          if (!email) {
              return res.send({
                success: false,
                message: 'Error: Email cannot be blank.'
              });
            }
            if (!password) {
              return res.send({
                success: false,
                message: 'Error: Password cannot be blank.'
              });
            }
            email = email.toLowerCase();
            email = email.trim();
            Register.find({
              email: email
            }, (err, previousUsers) => {
              if (err) {
                return res.send({
                  success: false,
                  message: 'Error: Server error'
                });
              } else if (previousUsers.length > 0) {
                return res.send({
                  success: false,
                  message: 'Error: Account already exist.'
                });
              }
        const reg=new Register()
        reg.first_name=first_name
        reg.last_name=last_name
        reg.email=email
        reg.username=username
        reg.password=password
        reg.phoneno=phoneno
        reg.adhno=adhno
        reg.addr1=addr1
        reg.addr2=addr2
        reg.city=city
        reg.zip=zip
        reg.save().then(()=>{return res.send({
          success:true,
          message:'Successfully added to the data base'
        })}).catch(e=>{return res.send({
          success:false,
          message:'Error:Server Error'
        })})
        })
        }
        else{
          res.send({
            success:false,
            message:'Error:Password and Confirm Password does not match'
          })
        }
    }
    catch(error)
    {
        res.status(400).send(error.message)
    }
})
app.post('/signin',async(req,res)=>{
 try{
    console.log(req.body.username)
    console.log(req.body.password)
    const result=await Register.findOne({username:req.body.username})
    if(result==null)
    {
      return res.send({
        success:false,
        message:'Error:Invalid Credentials'
      })
    }
    
    else
    {
      
      res.redirect(307, 'userProfile');
      // return res.send({
      //   success:true,
      //   message:'Succesfully SignIn'
      // })
    }
 }catch(e)
 {
      console.log(e.message)
 }
})

app.post('/contact',async(req,res)=>{
  try{

      const {body}=req;
      if(!body)
      {
        return res.send({
          message:false,
          success:'Error:Fields are empty'
        })
      }
      else
      {
        const {name,email,message}=body;
        const contact=new Contact();
        contact.name=name;
        contact.email=email;
        contact.message=message;
        contact.save().then(()=>{return res.send({
          success:true,
          message:'Your Message is Delivered Successfully'
        })}).catch(()=>{return res.send({
          success:false,
          message:'Error:Server Error'
        })})
      }
  }
  catch(e)
  {
      res.status(401).send({success:false,message:'Erro:Server Error'})
  }
})


app.listen(port,()=>console.log(`Running on port ${port}`));