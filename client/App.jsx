import './static/styles.css';
import { Navbar } from './components/Navbar';
import { Market } from './components/Market';
import { useState, useEffect } from 'react';
import { Post } from './components/Post';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';

export function App() {
  const [view, setView] = useState('login');

  function handleNavbarClick(view) {
    setView(view);
  }

  return (
    <div>
      <Navbar onNavbarClick={handleNavbarClick} />
      {view === 'login' && <Login />}
      {view === 'signup' && <SignUp />}
      {view === 'market' && <Market />}
      {view === 'post' && <Post />}
    </div>
  );
}
