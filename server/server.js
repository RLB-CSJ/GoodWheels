import express from 'express';
import userController from './controllers/userController';
import cookieController from './controllers/cookieController';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static('.'))

//* Public Routes
// Signup Route handler
app.get('/signup', (req, res) => {
    // May be unneeded. Could potentially be done in client side. Otherwise, res.redirect or res.sendFile(signup.html)
})
// Create a user route
app.post('/signup', 'MIDDLEWARE', (req, res) => {
    // res.redirect('/rent-a-bike') which will have authenticator checker
})

// Login Route handler
app.get('/login', userController.verifyUser, 'cookieMiddleware', 'session middleware', (req, res) => {
    if (!res.locals.authenticator) {
        // some logic if authentication is wrong
    }
    else {
        return res.redirect('/rent-a-bike') //redirect to app.get route for marketboard
    }
})


//* Authorized Routes
// Marketboard main page route handler
app.get('/rent-a-bike', sessionController.isLoggedin, (req, res) => {
    // res.sendFile(our marketboard HTML page)
})
// Marketboard Available bikes Display route
app.get('/api/bikes', 'MIDDLEWARE that pulls information of all available bikes', (req, res) => {
    res.status(200).json(res.locals.YesBikes) //!res locals can be different dep on Cate
})
// Marketboard patch request (to take update bike database and declare a bike as taken/not available)
app.patch('/api/bikes', 'MIDDLEWARE TO UPDATE INFORMATION', (req, res) => {
    res.status(200).json(res.locals.YesBikes)
})

// Secondary Frontend Page rendering
app.get('/post-a-bike', (req, res) => {
    // May be unneeded. Could potentially be done in client. Otherwise, res.redirect or res.sendFile(post-a-bike.html)
})
// Posting a new bike to rent/lend out from secondary Frontend page
app.post('/api/bikes', 'MIDDLEWARE TO UPDATE INFORMATION', (req, res) => {
    res.status(201).json({message: 'Succesfully Posted!'}) //!Could send posted data in here instead as a res.locals property
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