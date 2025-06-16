import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Login({ onLogin, onSignUp }) {
  const navigate = useNavigate();
  const [inputs, setInputs]= useState({})

  function handleChange (evenet){
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  function handleSubmit(event) {
    event.preventDefault();

    (async () => {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      if (response.redirected) {
        navigate('/market');
      } else {
        navigate('/signup');
      }
    })();
  }
  
  return (
    <div className="loginSignUp">
      <img src="src/assets/GW_Logo.png" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input id="name" name="name" type="text" onChange={handleChange}></input>
        <label htmlFor="password_hash">Password</label>
        <input id="password_hash" name="password_hash" type="password" onChange={handleChange}></input>
        {/* <Link to="/market"> */}
        <input type="submit" value="Login"></input>
        {/* </Link> */}
      </form>
      <Link to="/signUp">
        <h4>Sign Up</h4>
      </Link>
    </div>
  );
}
