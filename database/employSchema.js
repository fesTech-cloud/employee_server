const mongoose = require('mongoose')

const employerManagementSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    }
}, { timestamps: true });

// Creating a database model
const EmployeeModel = mongoose.model("user", employerManagementSchema)
module.exports = EmployeeModel
