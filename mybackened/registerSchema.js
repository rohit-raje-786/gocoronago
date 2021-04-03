const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const registerSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:
    {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    },
    adhno:{
        type:String,
        required:true
    },
    addr1:{
        type:String,
        required:true
    },
    addr2:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    zip:{
        type:String,
        required:true
    }

})



const Register=mongoose.model("Register",registerSchema);

module.exports=Register;