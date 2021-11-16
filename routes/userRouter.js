const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Criando duas rotas POST: uma para registrar o usuário e outra para fazer o login
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;


