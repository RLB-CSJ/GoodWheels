import './static/styles.css';
import { Navbar } from './components/Navbar';
import { Market } from './components/Market';
import { useState, useEffect } from 'react';
import { Post } from './components/Post';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';

export function App() {
  const [viewNav, setViewNav] = useState(false);
  const [view, setView] = useState('login');

  function handleNavbarClick(view) {
    setView(view);
  }

  function handleLogin(view) {
    setViewNav(true);
    setView('market')
  }

  return (
    <div>
      {viewNav && <Navbar onNavbarClick={handleNavbarClick} />}
      {view === 'login' && <Login onLogin={handleLogin} onSignUp={handleNavbarClick}/>}
      {view === 'signup' && <SignUp onLogin={handleLogin}/>}
      {view === 'market' && <Market />}
      {view === 'post' && <Post />}
    </div>
  );
}
