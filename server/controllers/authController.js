import jwt from 'jsonwebtoken';
import supabase from '../models/bikeRentalModel.js';

const authController = {};

authController.authenticateUser = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1] // Checking to see if authHeader is true, and if so, return the authtoken. split and [1] needed to find token in our header
  if (token == null) {return res.sendStatus(401)}

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {return res.sendStatus(403)};
    req.user = user; // Just storing info on the request object (good practice for auth middleware)
    next();
  })
}

authController.generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '60s'})
}

authController.checkRefresh = (req, res, next) => { // Checks Refresh and grants access if refresh is found
    const refreshToken = req.body.token;
    if (refreshToken == null) {return res.sendStatus(401)};
    
    supabase
        .from('refreshtoken')
        .select()
        .eq('token', refreshToken)
        .then((result) => {
            if (result.error || !result.data || result.data.length === 0) {
                return res.sendStatus (403);
               }
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) {return res.sendStatus(403)}
                res.locals.accessToken = authController.generateAccessToken({ name: user.name })
                next();
            })

        })
}

authController.deleteRefresh = (req, res, next) => {
    const refreshToken = res.body.token;

    supabase
        .from('refreshtoken')
        .delete()
        .eq('token', refreshToken)
        .then((data) => {
            next();
        })
        .catch((err) => {
            return next("error: " + err)
        })
}

export default authController