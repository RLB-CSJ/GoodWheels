import express from 'express'; // potentially need app.use to resolve
import session from 'express-session';

const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
    if (req.session) {
        return next();
    }
    else {
        res.redirect ('/login'); // redirect to index.html
    }
}

sessionController.startSession = (req, res, next) => {
    session ({
        secret: 'secret key based on ssID', // possibly take from cookieController
        resave: false, // forces session to be saved back to session store, even if not modified
        saveUninitialized: false,   // forces an uninitialized state to be saved to the store
        rolling: true, // this is what lets this session expire based off inactivity instead of time alone
        cookie: {
            maxAge: 600000, // 10 minutes of inactivity
            httpOnly: true,
            secure: false,
            sameSite: 'lax'
        }
    })
}

export default sessionController