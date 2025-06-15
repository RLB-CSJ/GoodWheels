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
        .then(data => {
            data.filter(bike => bike.available === true)
        })
        .then(yesBike => {
            console.log(yesBike);
            res.locals.bikes = yesBike;
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
    cost_per_day
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
      cost_per_day
    }])
    .then(result => {
        console.log('success');
        return next();
    })
    .catch (err => {
        console.log(err);
        return next('err: ' + err)
    })
};

bikeController.changeBikeState = (req, res, next) => {
    const { id , available } = req.body; //! Can also change this to only take in id and have logic for state here
    const bike = bikes.find(b => b.id === id);
    if (bike) {
        bike.available = available; //changing to the requested true or false in req. body
        res.locals.updatedBike = bike;
    } else {
        return res.status(404).json({error: 'Bike not found'})
    }
    return next();
}

export default bikeController