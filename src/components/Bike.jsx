export function Bike({ bike }) {

  return (
    <div className='bike'>
      {bike.picture &&  <img width="300px" src={bike.picture} alt='Bike picture' />}
      {!bike.picture &&  <img width="300px" src='src/assets/Picture_Unavailable.jpg' alt='Bike unavailable picture' />}

      <ul>
        <li>
          <strong>Type: </strong>
          {bike.type}
        </li>
        <li>
          <strong>Electric: </strong>
          {bike.is_electric}
        </li>
        <li>
          <strong>Wheel Size: </strong>
          {bike.wheel_size}
        </li>
        <li>
          <strong>Frame Size: </strong>
          {bike.frame_size}
        </li>
        <li>
          <strong>Training Wheels: </strong>
          {bike.training_wheels.toString()}
        </li>
        <li>
          <strong>Brakes: </strong>
          {bike.brakes}
        </li>
      </ul>
      <div className="flexRow">
        <h2>
          <strong>Cost: </strong>${bike.cost_per_day}/day
        </h2>
        <button>Rent</button>
      </div>
    </div>
  );
}
