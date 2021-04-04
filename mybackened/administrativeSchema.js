const mongoose=require('mongoose');


const administrativeSchema=new mongoose.Schema({
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



const Administrative=mongoose.model("Administrative",administrativeSchema);

module.exports=Administrative;