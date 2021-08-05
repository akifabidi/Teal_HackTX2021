const express = require('express');
const app = express();

// middleware modules
const morgan = require('morgan');
const bodyParser = require('body-parser');

// morgan is a middleware module that LOGS everything we do in terminal
app.use(morgan('dev'));
// bodyparser handles requests like POST with json data, urls and stuff
// it basically makes it readable for us. extend : true reads more complex data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const carpools = db.collection('carpools').where('route/end', '===', `${endHub}`).get();

// CORS (Cross Origin Resource Sharing) makes sure that the client server, in this case,
// port, is the same as the current server. Since APIs purpose is to serve data to other
// ports, clients i.e., we need to disable it. We only seen CORS in browsers, not Postman
// ---------------------------COMMENTED OUT CUS IT WAS ACTING WACK-----------------------------------------
// app.use((res, req, next) => {
//     // '*' means any thing can access it, but we can sum like www.somesite.com, only giving
//     // that one site access.
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, GET, DELETE')
//         return res.status(200).json({})
//     }
// });

// We use ROUTERS to simplify stuff, which is imported as a module

// ERROR HANDELING
// we know that if a request flys by the above routes, it is probably
// an error, so we can handle errors below
app.use((req, res, next) => {
    // we send a 404 error with the Error object
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

// this is moreso for db side mistakes, where we send 500.
// For these, we get a error argument, which we use in function
app.use((error, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    });
})
module.exports = app;