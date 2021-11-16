const express = require('express');
const { get } = require('mongoose');
const router = express.Router();
const auth = require('../controllers/authController');

router.get('/', auth, (req, res) => { //utilizando auth como middleware (é uma função importada)

    if (req.user.admin) {
        res.send("Este dado somente deve ser visto pelo admin."); //Se algum erro de autenticação for identificado em auth, a execução para nesse momento (res.send() encerra o processo).
    }
    else {
        res.status(401).send("Not admin: access denied.");
    }
});

router. get('/free', auth, (req, res) => {
    res.send("Este dado somente deve ser visto por quem está logado.");
})

module.exports = router;