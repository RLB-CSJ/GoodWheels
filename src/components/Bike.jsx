export function Bike({ bike, rent }) {
  function handleClick() {
    (async () => {
      try {
        const response = await fetch('/api/allBikes', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({id:bike.id, available:false}),
        });
      } catch (error) {
        console.log('Rent bike error: ', error);
      }
      rent()
    })();
  }

  return (
    <div className="bike">
      {bike.picture && <img className="bikeImage" src={bike.picture} alt="Bike picture" />}
      {!bike.picture && <img className="bikeImage" src="src/assets/Picture_Unavailable.jpg" alt="Bike unavailable picture" />}

      <ul>
        <li>
          <strong>Location: </strong>
          {bike.location}
        </li>
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
        <button onClick={handleClick}>Rent</button>
      </div>
    </div>
  );
}
