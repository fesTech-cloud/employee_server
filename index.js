require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./database/db');
const EmployeeModel = require('./database/employSchema');
const app = express();
app.use(cors())
app.use(express.json())

// DATABASE CONNECTION
dbConnect()

// READ DATA
// / http://localhost:8080/
app.get("/", async(req, res) =>{
    const data = await EmployeeModel.find()
    res.json({success: true, data: data})
})

// CREATE DATA
// http://localhost:8080/create
app.post('/create', async(req, res) =>{
   try {
    const data = new EmployeeModel(req.body)
    await data.save()
    res.send({success: true, message: 'data created successfully', data:data})
   } catch (error) {
     res.send({error: error})
   }
})

// UPDATE 
// http://localhost:8080/update/
app.put('/update/:id', async(req, res) => {
    const id = req.params.id
    const body = req.body.data
    console.log(body)
    try {
       const data =  await EmployeeModel.updateOne({_id:id}, body)
        res.send({success: 'success', message: 'updated successfully', data: data})
    } catch (error) {
        console.log(error)
    }
})

// DELETE OPERATION
// http://localhost:8080/delete/656dd3ab5613f1d7c1a9386d
app.delete('/delete/:id', async(req, res) =>{
    const id = req.params.id
    try {
        const data = await EmployeeModel.deleteOne({_id: id})
        res.send({success: true, message: 'data deleted successfully', data: data})
    } catch (error) {
        
    }
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log("Server is running"))

