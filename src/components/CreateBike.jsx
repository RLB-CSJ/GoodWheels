import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CreateBike() {
  const [inputs, setInputs] = useState({
    owner_id: 1,
    picture: '',
    location: '',
    is_electric: "off",
    type: 'mountain',
    wheel_size: 8,
    frame_size: 'XS',
    training_wheels: "off",
    brakes: 'Coaster',
    cost_per_day:0,
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    (async () => {
      try {
        const response = await fetch('/api/allBikes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        });
      } catch (error) {
        console.log('Create bike error: ', error);
      }
    })();
  }

  return (
    <div id="createBikeContainer">
      <div className="panel createBike">
        <h1>Add Bike</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="picture">Picture URL</label>
          <input id="picture" name="picture" type="text" onChange={handleChange}></input>

          <label htmlFor="location">Location</label>
          <input id="location" name="location" type="text" onChange={handleChange}></input>

          <label htmlFor="is_electric">Electric</label>
          <input id="is_electric" name="is_electric" type="checkbox" onChange={handleChange}></input>

          <label htmlFor="type">Type</label>
          <select id="type" name="type" onChange={handleChange}>
            <option value="mountain">Mountain</option>
            <option value="city">City</option>
            <option value="road">Road</option>
          </select>

          <label htmlFor="wheel_size">Wheel Size</label>
          <select id="wheel_size" name="wheel_size" onChange={handleChange}>
            <option value="8">8"</option>
            <option value="12">12"</option>
            <option value="16">16"</option>
            <option value="18">18"</option>
          </select>

          <label htmlFor="frame_size">Frame Size</label>
          <select id="frame_size" name="frame_size" onChange={handleChange}>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>

          <label htmlFor="training_wheels">Training wheels</label>
          <input id="training_wheels" name="training_wheels" type="checkbox" onChange={handleChange}></input>

          <label htmlFor="brakes">Brakes</label>
          <select id="brakes" name="brakes" onChange={handleChange}>
            <option value="coaster">Coaster</option>
            <option value="disk">Disk</option>
            <option value="rim">Rim</option>
          </select>

          <label htmlFor="cost_per_day">Cost Per Day</label>
          <input id="cost_per_day" name="cost_per_day" type="number" onChange={handleChange}></input>

          <input type="submit" value="Add Bike"></input>
        </form>
      </div>
    </div>
  );
}
