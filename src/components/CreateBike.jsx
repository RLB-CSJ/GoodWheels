import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CreateBike() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ owner_id: 1 });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    (async () => {
      try {
        const response = await fetch('/api/bikes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });
      } catch (error) {
        console.log('Login error: ', error);
      }
    })();
  }

  return (
    <div id="createBikeContainer">
      <div className="panel createBike">
        <h1>Add Bike</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="picture">Picture URL</label>
          <input id="picture" name="picture" type="text"></input>

          <label htmlFor="location">Location</label>
          <input id="location" name="location" type="text"></input>

          <label htmlFor="is_electric">Electric</label>
          <input id="is_electric" name="is_electric" type="checkbox"></input>

          <label htmlFor="wheel_size">Wheel Size</label>
          <select id="wheel_size" name="wheel_size">
            <option value="8">8"</option>
            <option value="12">12"</option>
            <option value="16">16"</option>
            <option value="18">18"</option>
          </select>

          <label htmlFor="frame_size">Frame Size</label>
          <select id="frame_size" name="frame_size">
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>

          <label htmlFor="training_wheels">Training wheels</label>
          <input id="training_wheels" name="training_wheels" type="checkbox"></input>

          <label htmlFor="brakes">Brakes</label>
          <select id="brakes" name="brakes">
            <option value="coaster">Coaster</option>
            <option value="disk">Disk</option>
            <option value="rim">Rim</option>
          </select>
          <input type="submit" value="Add Bike"></input>
        </form>
      </div>
    </div>
  );
}
