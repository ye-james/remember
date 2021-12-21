const express = require('express');
const router = express.Router();



const TodosController = require('../controllers/Todos');

router.get('/', TodosController.getAllTodos);
router.post('/', TodosController.addTodo);
router.delete('/', TodosController.deleteTodo);


module.exports = router;