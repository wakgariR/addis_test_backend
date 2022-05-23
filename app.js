const express = require('express');

const mongoose = require('mongoose');
const employeeRouter = require('./routes/employee-routes');
const cors = require('cors')

const app = express();

//Middlewares
app.use(express.json())
app.use(cors())
app.use('/employees', employeeRouter);
mongoose.connect(
    'mongodb+srv://admin:IVzrTrUvbAFoCmwq@cluster0.yvqq0.mongodb.net/employeeDB?retryWrites=true&w=majority'
    ).then(() => console.log("Connected to database"))
    .then(() => {
        app.listen(5000)
    }).catch((err) => console.log(err))
