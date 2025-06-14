import { Bike } from './Bike';

export function BikeList() {
  // prettier-ignore
  const bikes = [
    {picture:"https://picsum.photos/id/146/300/200", Type:'Mountain', Electric:'No', Wheel_Size:'8', Frame_Size:'XS', Training_Wheels:'No', Brakes:"Coaster", Cost:10},
    {picture:"https://picsum.photos/id/146/300/200", Type:'Mountain', Electric:'No', Wheel_Size:'8', Frame_Size:'XS', Training_Wheels:'No', Brakes:"Coaster", Cost:10},
    {picture:"https://picsum.photos/id/146/300/200", Type:'Mountain', Electric:'No', Wheel_Size:'8', Frame_Size:'XS', Training_Wheels:'No', Brakes:"Coaster", Cost:10},
    {picture:"https://picsum.photos/id/146/300/200", Type:'Mountain', Electric:'No', Wheel_Size:'8', Frame_Size:'XS', Training_Wheels:'No', Brakes:"Coaster", Cost:10},
    {picture:"https://picsum.photos/id/146/300/200", Type:'Mountain', Electric:'No', Wheel_Size:'8', Frame_Size:'XS', Training_Wheels:'No', Brakes:"Coaster", Cost:10},
    {picture:"https://picsum.photos/id/146/300/200", Type:'Mountain', Electric:'No', Wheel_Size:'8', Frame_Size:'XS', Training_Wheels:'No', Brakes:"Coaster", Cost:10},
  ];

  return (
    <div class="panel bikeList">
      {bikes.map((bike, index) => {
        return <Bike key={index} bike={bike} />;
      })}
    </div>
  );
}
