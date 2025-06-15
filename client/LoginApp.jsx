import './static/styles.css';
import { Navbar } from './components/Navbar';
import { useState } from 'react';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';

export function LoginApp() {
  const [view, setView] = useState('login');

  function handleSignUp(view) {
    setView(view);
  }

  return (
    <div>
      <a href='/home.html'>Go Home</a>
      {view === 'login' && <Login onSignUp={handleSignUp} />}
      {view === 'signup' && <SignUp />}
    </div>
  );
}
