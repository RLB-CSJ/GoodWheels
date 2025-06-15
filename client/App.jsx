import './static/styles.css';
import { Navbar } from './components/Navbar';
import { Market } from './components/Market';
import { useState } from 'react';
import { Post } from './components/Post';

export function App() {
  const [view, setView] = useState('market');

  function handleNavbarClick(view) {
    setView(view);
  }

  return (
    <div>
      <Navbar onNavbarClick={handleNavbarClick} />
      {view === 'market' && <Market />}
      {view === 'post' && <Post />}
    </div>
  );
}
