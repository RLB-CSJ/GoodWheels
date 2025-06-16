import supabase from '../models/bikeRentalModel.js';

const userController = {};

userController.getAllUsers = (req, res, next) => {
  supabase
    .from('users')
    .select()
    .then((result) => {
      if (result.error) {
        return next('ERROR Object');
      }
      res.locals.users = result.data;
      return next();
    });
};

userController.createUser = (req, res, next) => {
  const { name, email, password_hash } = req.body;
  supabase
    .from('users')
    .insert([
      {
        name,
        email,
        password_hash,
      },
    ])
    .then((result) => {
      if (result.error) {
        console.log('email already exists!');
        return res.status(401).send('email already exists!');
      }
      console.log('success in creating user!');
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next('err: ' + err);
    });
};

userController.verifyUser = (req, res, next) => {
  const { name, password_hash } = req.body;

  supabase
    .from('users')
    .select()
    .eq('name', name)
    .eq('password_hash', password_hash)
    .then((result) => {
      if (result.error || !result.data || result.data.length === 0) {
        res.locals.authenticator = false;
        return next();
      } else {
        res.locals.authenticator = true;
        res.locals.user = result.data[0];
        return next();
      }
    })
    .catch((err) => {
      res.locals.authenticator = false;
      return next(err);
    });
};


export default userController;
