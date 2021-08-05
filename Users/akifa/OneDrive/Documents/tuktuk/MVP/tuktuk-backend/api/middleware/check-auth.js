const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.header.authorization
        console.log(token)
        const decoded = jwt.verify(req.body.token, SOMEKEY);
        req.userData = decoded;
        next()
    } catch {
        return res.status(401).json({
            message: 'Auth failed'
        })
    }
    next();
}