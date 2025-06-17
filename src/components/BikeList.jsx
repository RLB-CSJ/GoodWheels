import { useEffect, useState } from 'react';
import { Bike } from './Bike';

export function BikeList({bikes, rent}) {
  // const [bikes, setbikes] = useState([]);

  // async function fetchData() {
  //   const data = await fetch('/api/bikes').then((res) => res.json());
  //   console.log('⚠️ Data', data);
  //   setbikes(data);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // function handleRent() {
  //   fetchData();
  // }

  return (
    <div className="panel bikeList">
      {bikes.map((bike, index) => {
        return <Bike key={index} bike={bike} rent={rent} />;
      })}
    </div>
  );
}
