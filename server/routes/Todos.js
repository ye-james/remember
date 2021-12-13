const express = require('express');
const router = express.Router();



const TodosController = require('../controllers/Todos');

router.get('/', TodosController.getHomeToDos);


module.exports = router;