import { Navbar } from './Navbar';
import { BikeList } from './BikeList';
import { Filters } from './Filters';

export function Market() {
  return (
    <>
      <Navbar></Navbar>
      <div className="market">
        <BikeList />
        <Filters />
      </div>
    </>
  );
}
