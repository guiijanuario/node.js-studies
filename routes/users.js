const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validationMiddleware = require('../middlewares/validationMiddleware');

router.get('/', usersController.getUsers);

router.get('/:id', usersController.getUserById);

router.post('/', validationMiddleware.validateUser, usersController.createUser);

router.put('/:id', validationMiddleware.validateUser, usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

module.exports = router;
