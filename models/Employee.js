const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    // name, emil, phone, city
    name:{
        type:"string",
        required:true
    },
    email:{
        type:"string",
        required:true
    },
    phone:{
        type: Number,
        default:false  // it means not required can be empty cell
    },
    city:{
        type:"string",
        // here we didn't mention anything that means not required
    }


})

module.exports=mongoose.model('Employee', employeeSchema)