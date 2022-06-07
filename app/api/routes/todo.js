const express = require('express')
const router = express.Router()
const todoController = require('../controller/todo')

// Create
router.post('/create',todoController.createTodo)
// Read
router.get('/getAllTodo',todoController.readAllTodos)
// Read By Id
router.get('/getTodoById/:id',todoController.readTodoById)
// Update By Id
router.put('/updateTodoById/:id',todoController.updateTodoById)
// Delete By Id
router.delete('/deleteTodoById/:id',todoController.deleteTodoById)

module.exports = router