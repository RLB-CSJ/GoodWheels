export function Bike({ bike }) {
  return (
    <div className='bike'>
      <img src={bike.picture} alt='Bike picture' />
      <ul>
        <li>
          <strong>Type: </strong>
          {bike.Type}
        </li>
        <li>
          <strong>Electric: </strong>
          {bike.Electric}
        </li>
        <li>
          <strong>Wheel Size: </strong>
          {bike.Wheel_Size}
        </li>
        <li>
          <strong>Frame Size: </strong>
          {bike.Frame_Size}
        </li>
        <li>
          <strong>Training Wheels: </strong>
          {bike.Training_Wheels}
        </li>
        <li>
          <strong>Brakes: </strong>
          {bike.Brakes}
        </li>
      </ul>
      <div className="flexRow">
        <h2>
          <strong>Cost: </strong>${bike.Cost}/day
        </h2>
        <button>Rent</button>
      </div>
    </div>
  );
}
