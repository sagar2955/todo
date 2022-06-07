const TodoModel = require('../model/todo')


// Create
const createTodo = (req,res,next) => {
    let {title,description} = req.body
    TodoModel.create({
        title,
        description
    }, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Added Todo Successfully"
        })
    })
}

// Read
const readAllTodos = (req,res,next) => {
    TodoModel.find({}, (err,result) => {
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved all the todo",
            data:{
                todos: result
            }
        })
    })
} 

// Read By Id
const readTodoById = (req,res,next) => {
    TodoModel.findById(req.params.id, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved Todo By ID",
            data:{
                todo: result
            }
        })
    })
} 


// Update By Id
const updateTodoById = (req,res,next) => {
    TodoModel.findByIdAndUpdate(req.params.id,req.body,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Updated todo By ID",
            data:{
                todo: result
            }
        })
    })
} 

// Delete Movie By Id
const deleteTodoById = (req,res,next) => {
    TodoModel.findByIdAndRemove(req.params.id,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted todo By ID",
            data:{
                todo: result
            }
        })
    })
} 

module.exports = {createTodo, readAllTodos, readTodoById, updateTodoById, deleteTodoById}