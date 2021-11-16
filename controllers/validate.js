const Joi = require('@hapi/joi');

//Validando o register de acordo com os dados que foram informados pelo usuário
const registerValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50),
        email: Joi.string().required().min(3).max(50),
        password: Joi.string().required().min(6).max(100)
    })
    return schema.validate(data);
};

//Validando o login
const loginValidate = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().min(3).max(50),
        password: Joi.string().required().min(6).max(100)
    })
    return schema.validate(data);
};

module.exports.loginValidate = loginValidate; //module.exports é um objeto, por isso pode ser acessado assim
module.exports.registerValidate = registerValidate;