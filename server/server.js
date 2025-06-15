import express from 'express';
import session from 'express-session';
import path from 'path';
import userController from './controllers/userController.js';
import cookieController from './controllers/cookieController.js';
import bikeController from './controllers/bikeController.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static('.'))

//* Public Routes
// Signup Route handler
app.get('/signup', (req, res) => {
    res.sendFile(index.html); // load html page //! Needs testing to see if needed since we're doing MPA
})
// Create a user route
app.post('/signup', userController.createUser, (req, res) => {
    res.status(201).json(res.locals.user);
    // res.redirect('/rentBike'); // which will have authenticator checker
})


// Login Route handler
app.post('/login', userController.verifyUser, (req, res) => {
    if (!res.locals.authenticator) {
        console.log('wrong pass/username!')
        return res.redirect ('/signup');
    }
    else {
        console.log('correct user/pass!')
        return res.redirect('/rentBike') //redirect to app.get route for marketboard
    }
})


//* Authorized Routes
// Marketboard main page route handler
app.get('/rentBike', (req, res) => {
    res.sendFile(path.resolve('./home.html')) //!this file needs to be enabled but should link to new HTML
})

// Marketboard Available bikes Display route
app.get('/api/bikes', bikeController.getYesBikes, (req, res) => { // change middleware to be yesbikes
    res.status(200).json(res.locals.bikes) //!For testing! Should return only bikes with property YES
})
// Marketboard patch request (to take update bike database and declare a bike as taken/not available)
app.patch('/api/bikes', bikeController.changeBikeState, (req, res) => {
    res.status(200).json(res.locals.updatedData)
})

// Secondary Frontend Page rendering
app.get('/postBike', (req, res) => {
    // May be unneeded. Could potentially be done in client. Otherwise, res.redirect or res.sendFile(post-a-bike.html)
})
// Posting a new bike to rent/lend out from secondary Frontend page
app.post('/api/bikes', bikeController.createBike, (req, res) => {
    res.status(201).json({message: 'Succesfully Posted!'}) //!Could send posted data in here instead as a res.locals property
})


//* Testing routes
//! Marketboard All bikes (for Testing!): COMMENT OUT AFTER
app.get('/api/allBikes', bikeController.getAllBikes, (req, res) => {
    res.status(200).json(res.locals.bikes)
})
//! Get All Users (For Testing!): COMMENT OUT AFTER 
app.get('/api/users', userController.getAllUsers, (req, res) => {
    res.status(200).json(res.locals.users)
})

//* Unknown route handler
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));


//* Global Error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


//* Route Listener
app.listen(PORT, () => {
  console.log(`express server listening on port ${PORT}`);
});