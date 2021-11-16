const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, //Options que são requeridas pelo mongoose
    (error) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Mongo Connected");
        }
    });

app.use('/user', express.json(), userRouter); //express.json() garante que tu que vier da requisição json será colocado dentro do body (permite acesso aos elementos do body no userController.js)

app.use('/admin', express.json(), adminRouter);

app.listen(process.env.PORT, () => { //Acessando PORT no arquivo .env
    console.log("Server Running");
});