const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { loginValidate, registerValidate } = require('./validate');

const userController = {
    register: async function (req, res) {

        const { error } = registerValidate(req.body); //Essa etapa faz com que os requisitos de validação sejam realizados de acordo com o que o usuário inserir e não leve em consideração, por exemplo, os dados de senhas criptografadas (que se tornam senhas com mais caracteres)
        if (error) {
            return res.status(400).send(error.message);
        }

        const selectedUser = await User.findOne({ email: req.body.email }); //procura dentro do banco de dados se já existe um email igual ao informado pelo usuário.
        if (selectedUser) {
            return res.status(400).send('E-mail already exists.');
        };

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password) //salt padrão é 10, garantindo sempre um hash diferente, mesmo que a senha seja igual.
        }); //quando maior o salt, maior também o tempo para processar a senha

        try { //Após receber os dados de name, email e password por meio do body, pode-se tentar:
            const savedUser = await user.save(); //salvar o usuário informado
            res.send(savedUser);
        }
        catch (error) {
            res.status(400).send(error);//Mudando o status da resposta para informar ao front-end que houve um erro 400 (quando não colocar um dos campos obrigatorios, por exemplo)
        }
    },
    login: async function (req, res) {

        const { error } = loginValidate(req.body);
        if (error) {
            return res.status(400).send(error.message); //mensagem de erro (message é um dos argumentos do objeto error);
        }

        const selectedUser = await User.findOne({ email: req.body.email });
        if (!selectedUser) {
            return res.status(400).send('Email or Password incorrect.');
        };

        const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password);
        if (!passwordAndUserMatch) return res.status(400).send('Email or Password incorrect.');

        const token = jwt.sign({ _id: selectedUser._id, admin: selectedUser.admin }, process.env.TOKEN_SECRET);

        res.header('authorization-token', token); // Mandando o token de volta para o usuário através do header (precisa passar uma chave: valor)
        res.send("User Logged!");
    }
};

module.exports = userController;
