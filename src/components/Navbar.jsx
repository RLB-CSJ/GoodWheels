import { Link } from 'react-router-dom';
export function Navbar({ onNavbarClick }) {
  return (
    <div className="navbar">
      <div>
        <Link to="/market">
          <button>Rent a bike</button>
        </Link>
        <Link to="/post">
          <button>Post a bike</button>
        </Link>
      </div>
    </div>
  );
}
