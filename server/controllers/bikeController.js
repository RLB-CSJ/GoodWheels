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

bikeController.getYesBikes = (req, res, next) => {
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