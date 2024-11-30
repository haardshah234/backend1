const mongoose=require('mongoose')
const EmployeeSchema=new
mongoose.Schema({
    empId:{
        type:Number,
        required:true
    },
    empName:{
        type:String,
        required:true
    },
    empAddress:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Employee',EmployeeSchema)