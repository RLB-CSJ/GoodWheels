import { CreateBike } from './CreateBike';
import { Navbar } from './Navbar';

// TODO
// Fetch POST /api/allBikes
// {
  //   owner_id,
  //   type,
  //   is_electric,
  //   wheel_size,
  //   frame_size,
  //   brakes,
  //   cost_per_day
  // }

export function Post() {
  return (
    <>
      <Navbar />
      <div>
        <CreateBike />
      </div>
    </>
  );
}
