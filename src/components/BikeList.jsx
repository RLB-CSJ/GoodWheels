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

  return (
    <div className="panel bikeList">
      {bikes.map((bike, index) => {
        return <Bike key={index} bike={bike} />;
      })}
    </div>
  );
}
