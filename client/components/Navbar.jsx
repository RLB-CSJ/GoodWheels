export function Navbar({onNavbarClick}) {
  return (
    <div class="navbar">
      <div>
        <button onClick={()=>{onNavbarClick('market')}}>Rent a bike</button>
        <button onClick={()=>{onNavbarClick('post')}}> Post a bike</button>
      </div>
    </div>
  );
}
