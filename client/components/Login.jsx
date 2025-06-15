import { useState } from 'react';

export function Login({ onLogin, onSignUp }) {
  const [inputs, setInputs] = useState({ name: '', password: '' });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    (async () => {
      await fetch('/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(inputs),
      });
    })();
  }

  return (
    <div className='loginSignUp'>
      <img src='client/assets/GW_Logo.png' />
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input name='name' type='text' onChange={handleChange}></input>
        <label>Password</label>
        <input name='password' type='password' onChange={handleChange}></input>
        <input type='submit' value='Login'></input>
      </form>
      <h4
        onClick={() => {
          onSignUp('signup');
        }}>
        Sign Up
      </h4>
    </div>
  );
}
