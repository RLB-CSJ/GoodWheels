import { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { BikeList } from './BikeList';
import { Filters } from './Filters';

export function Market() {
  const [dataFilter, setDataFilter]= useState({available:true})
  const [bikes, setbikes] = useState([]);

  async function fetchData() {
    const data = await fetch('/api/bikes',{
       method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataFilter),
    }).then((res) => res.json());
    setbikes(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleRent(foo) {
    setDataFilter(foo)
    fetchData();
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="market">
        <BikeList bikes={bikes} rent={handleRent} />
        <Filters filter={handleRent} />
      </div>
    </>
  );
}
