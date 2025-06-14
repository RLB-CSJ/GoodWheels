import { BikeList } from './BikeList';
import { Filters } from './Filters';

export function Market() {
  return (
    <div>
      This is the market component
      <BikeList />
      <Filters />
    </div>
  );
}
