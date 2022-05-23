const express = require('express');

const employeesController = require('../controllers/employee-controller');
const router = express.Router();

router.get('/', employeesController.getAllEmployees);
router.post('/', employeesController.addEmployee);
router.get('/:id', employeesController.getById);
router.put('/:id', employeesController.updateEmployee);
router.delete('/:id', employeesController.deleteEmployee)

module.exports =  router;
