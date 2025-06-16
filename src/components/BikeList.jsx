import { useEffect, useState } from 'react';
import { Bike } from './Bike';

export function BikeList() {
const [bikes, setbikes] = useState([])

useEffect(()=>{
  (async()=>{
    const data = await fetch('/api/bikes').then((res)=>res.json())
    console.log('⚠️ Data',data)
    setbikes(data)
  })()
},[])

 // TODO
  // Fetch request to /api/bikes

  return (
    <div className="panel bikeList">
      {bikes.map((bike, index) => {
        return <Bike key={index} bike={bike} />;
      })}
    </div>
  );
}
