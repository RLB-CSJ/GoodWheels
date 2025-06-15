import { BikeList } from './BikeList';
import { Filters } from './Filters';
import { Navbar } from './Navbar';

export function Market() {
  return (
    <>
      <Navbar/>
      <div className="market">
        <BikeList />
        <Filters />
      </div>
    </>
  );
}
