import { BikeList } from './BikeList';
import { Filters } from './Filters';

export function Market() {
  return (
    <div class="market">
      <BikeList />
      <Filters />
    </div>
  );
}
