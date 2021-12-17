const express = require('express');
const router = express.Router();



const TodosController = require('../controllers/Todos');

router.get('/', TodosController.getHomeToDos);
router.post('/', TodosController.addTodo);


module.exports = router;