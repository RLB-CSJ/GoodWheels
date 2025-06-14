// import db from '../models/MODEL NAME'

import { normalize } from "path";

 const bikes = [
    {Id: '1', picture:"https://picsum.photos/id/146/300/200", Type:'Mountain', Electric:'Yes', Wheel_Size:'8', Frame_Size:'XS', Training_Wheels:'No', Brakes:"Coaster", Cost:10, available: false},
    {Id: '2', picture:"https://picsum.photos/id/146/300/200", Type:'Road', Electric:'No', Wheel_Size:'8', Frame_Size:'XS', Training_Wheels:'No', Brakes:"Coaster", Cost:10, available: true},
    {Id: '3', picture:"https://picsum.photos/id/146/300/200", Type:'Mountain', Electric:'No', Wheel_Size:'8', Frame_Size:'XS', Training_Wheels:'No', Brakes:"Coaster", Cost:10, available: false},
    {Id: '4', picture:"https://picsum.photos/id/146/300/200", Type:'Mountain', Electric:'No', Wheel_Size:'8', Frame_Size:'XS', Training_Wheels:'No', Brakes:"Coaster", Cost:10, available: true},
    {Id: '5', picture:"https://picsum.photos/id/146/300/200", Type:'Mountain', Electric:'No', Wheel_Size:'8', Frame_Size:'XS', Training_Wheels:'No', Brakes:"Coaster", Cost:10, available: false},
    {Id: '6', picture:"https://picsum.photos/id/146/300/200", Type:'Mountain', Electric:'No', Wheel_Size:'8', Frame_Size:'XS', Training_Wheels:'No', Brakes:"Coaster", Cost:10, available: true},
    {Id: '7', picture:"https://picsum.photos/id/146/300/200", Type:'Mountain', Electric:'Yes', Wheel_Size:'8', Frame_Size:'XS', Training_Wheels:'No', Brakes:"Coaster", Cost:10, available: true},
    {Id: '8', picture:"https://picsum.photos/id/146/300/200", Type:'Mountain', Electric:'No', Wheel_Size:'8', Frame_Size:'XS', Training_Wheels:'No', Brakes:"Coaster", Cost:10, available: true},
    {Id: '9', picture:"https://picsum.photos/id/146/300/200", Type:'Mountain', Electric:'No', Wheel_Size:'8', Frame_Size:'XS', Training_Wheels:'No', Brakes:"Coaster", Cost:10, available: true},
  ];

const bikeController = {};

bikeController.getAllBikes = (req, res, next) => {
    res.locals.bikes = bikes;
    return next();
}

bikeController.getYesBikes = (req, res, next) => {
    res.locals.bikes = bikes.filter(bike => bike.available === true);
    return next()
}

bikeController.createBike = (req, res, next) => {
    const {picture, Type, Electric, Wheel_Size, Frame_Size, Training_Wheels, Brakes, Cost} = req.body;
    bikes.push(req.body);
    res.locals.bikes = bikes;
    return next();
}

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