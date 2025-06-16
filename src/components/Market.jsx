import { BikeList } from './BikeList';
import { Filters } from './Filters';

export function Market() {
  return (
    <div className="market">
      <BikeList />
      <Filters />
    </div>
  );
}
