import supabase from '../models/bikeRentalModel.js'

const bikeController = {};

bikeController.getAllBikes = (req, res, next) => {
    supabase.from('bikes')
        .select()
        .then(result => {
            if (result.error) {
                return next('ERROR Object')
            }
            res.locals.bikes = result.data;
            return next();
        })
}

bikeController.getYesBikes = (req, res, next) => { // Middleware to only get bikes with filter available === true
    supabase.from('bikes')
        .select()
        .eq('available', true) // Supabase method for checking if equal === true
        .then(yesBike => {
            if (yesBike.error) {
                return res.sendStatus(401);
            }
            // console.log(yesBike.data);
            res.locals.bikes = yesBike.data;
            return next();
        })
        .catch(err => {
            return next('error NEEED TO FIX ERROR CODE')
        });
}

bikeController.getFilterBikes = (req, res, next) => {
    let query = supabase.from('bikes').select();

    if (req.body.type) {
        query = query.ilike('type', `%${req.body.type}%`)
    }
    if (req.body.is_electric !== undefined) {
        query = query.eq('is_electric', Boolean(req.body.is_electric))
    }
    if (req.body.wheel_size){
        query = query.eq('wheel_size', Number(req.body.wheel_size))
    }
    if (req.body.frame_size) {
        query = query.eq('frame_size', req.body.frame_size)
    }
    if (req.body.brakes) {
        query = query.eq('brakes', req.body.brakes)
    }
    if (req.body.training_wheels !== undefined) {
        query = query.eq('training_wheels', Boolean(req.body.training_wheels))
    }
    if (req.body.location) {
        query = query.ilike('location', `%${req.body.location}%`)
    }

    query.then(result => {
        if (result.error) {return next(result.error)};
        res.locals.bikes = result.data;
        return next()
    })
    .catch (err => next('error in getFilterBikes: ' + err))
}
// SELECT * FROM bikes WHERE location LIKE '%' AND training_wheels = true AND cost_per_day <= 20;

bikeController.createBike = (req, res, next) => {
  const {
    owner_id,
    type,
    is_electric,
    wheel_size,
    frame_size,
    brakes,
    cost_per_day,
    training_wheels
  } = req.body;

  supabase
    .from('bikes')
    .insert([{
      owner_id,
      type,
      is_electric,
      wheel_size,
      frame_size,
      brakes,
      cost_per_day,
      training_wheels
    }])
    .then(result => {
        console.log('success in creating bike!');
        return next();
    })
    .catch (err => {
        console.log(err);
        return next('err: ' + err)
    })
};

bikeController.changeBikeState = (req, res, next) => {
    const { id , available } = req.body; //! Can also change this to only take in id and have logic for state here
    
    supabase
        .from('bikes')
        .update( {'available': available} ) // WHY DOES THIS HAVE TO COME BEFORE EQ???
        .eq('id', id)
        .select()
        .then(data => {
            res.locals.updatedData = data.data; //Otherwise, sends data object back with err obj
            next();
        })
        .catch(err => {
            return next(err);
        })
}

export default bikeController