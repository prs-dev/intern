const { getTodos, saveTodos, updateTodo, deleteTodo } = require("../controller/todo")

const router = require("express").Router()

router.get('/get', getTodos)
router.post('/save', saveTodos)
router.put('/update/:id', updateTodo)
router.delete('/delete/:id', deleteTodo)

module.exports = router
