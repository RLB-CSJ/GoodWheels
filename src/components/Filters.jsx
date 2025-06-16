import { useState } from "react";

export function Filters() {
  const [inputs, setInputs] = useState({location:'%', is_electric:'%', wheel_size: '%', frame_size:'%', training_wheels:'%', brakes:'%'});
  
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
        console.log('Filter error: ', error);
      }
    })();
    
  }

  return (
    <div className="panel filters">
      <h1>Filters</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Location</label>
        <input id="location" name="location" type="text" onChange={handleChange}></input>

        <label htmlFor="is_electric">Electric</label>
        <input id="is_electric" name="is_electric" type="checkbox" onChange={handleChange}></input>

        <label htmlFor="wheel_size">Wheel Size</label>
        <select id="wheel_size" name="wheel_size" onChange={handleChange}>
          <option></option>
          <option value="8">8"</option>
          <option value="12">12"</option>
          <option value="16">16"</option>
          <option value="18">18"</option>
        </select>

        <label htmlFor="frame_size">Frame Size</label>
        <select id="frame_size" name="frame_size" onChange={handleChange}>
          <option></option>
          <option value="xs">XS</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
        </select>

        <label htmlFor="training_wheels">Training Wheels</label>
        <input id="training_wheels" name="training_wheels" type="checkbox" onChange={handleChange}></input>

        <label htmlFor="brakes">Brakes</label>
        <select id="brakes" name="brakes" onChange={handleChange}>
          <option></option>
          <option value="coaster">Coaster</option>
          <option value="disk">Disk</option>
          <option value="rim">Rim</option>
        </select>

        <input type="submit" value="Apply"></input>
      </form>
    </div>
  );
}
