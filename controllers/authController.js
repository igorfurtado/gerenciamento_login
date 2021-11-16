const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('authorization-token');
    if (!token) {
        return res.status(401).send("Access Denied.");
    }
    try {
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = userVerified;
        next(); //next permite que o próximo middleware seja executado (no caso, a função que recebe (req, res));
    }
    catch (error) {
        res.status(401).send("Access Denied.");
    }
};