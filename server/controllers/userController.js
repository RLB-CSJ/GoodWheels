// import db from '../models/MODEL NAME'

const userTable = [
    { "id": 1, "name": "Harry", password: "12345"},  {"id": 2, "name": "Frodo", password: "12aB5"}, {"id": 3, "name": "Katniss", password: "piano"} ]

const userController = {};

userController.getUser = (req, res, next) => {
    res.locals.users = userTable;
    return next();
}

userController.createUser = (req, res, next) => { //! Testing purposes. No sanitization check
    bikes.push(req.body);
    res.locals.bikes = bikes;
    return next();
}

userController.verifyUser = (req, res, next) => {
    console.log(req.body)
    const { username, password } = req.body;
    const user = userTable.find(u => u.username === username && u.password === password);
    if (!user) {
        res.locals.authenticator = false;
        return next();
    }
    res.locals.authenticator = true;
    res.locals.user = user;
    return next();
}

export default userController