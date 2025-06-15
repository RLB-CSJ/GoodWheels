import supabase from '../models/bikeRentalModel.js'

const userController = {};

userController.getAllUsers = (req, res, next) => {
     supabase.from('users')
        .select()
        .then(result => {
            if (result.error) {
                return next('ERROR Object')
            }
            res.locals.users = result.data;
            return next();
        })
}

userController.createUser = (req, res, next) => {
    const {
        name,
        email,
        password_hash
    } = req.body;

    supabase
        .from('users')
        .insert([{
            name,
            email,
            password_hash
        }])
        .then(result => {
            console.log('success in creating user!');
            res.locals.user = result;
            return next();
        })
        .catch (err => {
            console.log(err);
            return next('err: ' + err)
        })
}

userController.verifyUser = (req, res, next) => {
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