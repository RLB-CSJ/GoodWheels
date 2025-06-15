import { CreateBike } from './CreateBike';
import { Navbar } from './Navbar';

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
