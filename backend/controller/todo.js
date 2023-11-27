const TodoModel = require("../models/Todo")

module.exports.getTodos = async(req, res) => {
    const all = await TodoModel.find({})
    res.send(all)
}

module.exports.saveTodos = async(req, res) => {
    const {toDo} = req.body
    TodoModel.create({toDo})
    .then(data => {
        console.log("saved")
        res.status(201).send(data)
    })
    .catch(err => console.log(err))
}

module.exports.updateTodo = async(req, res) => {
    const {toDo,done} = req.body
    const {id} = req.params
    TodoModel.findByIdAndUpdate(id, {toDo, done: done})
    .then(() => {
        res.send("updated successfully")
    })
    .catch(err => console.log(err))
}

module.exports.deleteTodo = async(req, res) => {
    const {id} = req.params
    TodoModel.findByIdAndDelete(id)
    .then(() => {
        res.send("deleted successfully")
    })
    .catch(err => console.log(err))
}