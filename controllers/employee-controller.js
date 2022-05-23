const Employee = require('../models/Employee');
const getAllEmployees = async(req,res,next) => {
    let employees;
    try{
        employees = await Employee.find();
    } catch(err){
        console.log(err);
    }

    if(!employees){
        return res.status(404).json({message:'No employees found'})
    }
    return res.status(200).json({ employees })
}
const getById = async (req,res, next) => {
    const id = req.params.id;
    let employee;
    try{
        employee = await Employee.findById(id);
    }
    catch(err){
        console.log(err)
    }
    if(!employee){
        return res.status(404).json({message:'No employee found'})
    }
    return res.status(200).json({employee})
}
const addEmployee = async (req, res, next) =>{
    const {name, dateOfBirth, gender, salary} = req.body;
    let employe;
    try{
        employe = new Employee({
            name,
            dateOfBirth,
            gender,
            salary
        })
        await employe.save();

    }catch(err){
        console.log(err)
    }
    if(!employe){
        return res.status(500).json({message: 'Unable to add'})
    }
    return res.status(201).json({employe});
}
const updateEmployee =  async(req, res, next) => {
    const id = req.params.id;
    const {name, dateOfBirth, gender, salary} = req.body;

    let employee;
    try{
        employee = await Employee.findByIdAndUpdate(id,{
            name,
            dateOfBirth,
            gender,
            salary
        })

        employee = await employee.save();
    }catch(err){
        console.log(err)
    }
    if(!employee){
        return res.status(404).json({message: 'Unable to update'})
    }
    return res.status(200).json({employee});
 
}
const deleteEmployee = async (req, res, next) => {
    const id = req.params.id;
    let employee;
    try{
        employee = await Employee.findByIdAndDelete(id);
    }
    catch(err){
        console.log(err)
    }
    if(!employee){
        return res.status(404).json({message: 'Unable to delete'})
    }
    return res.status(200).json({message: 'Employee successfull deleted'});
}

exports.getAllEmployees = getAllEmployees;
exports.getById = getById;
exports.addEmployee = addEmployee;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee = deleteEmployee;