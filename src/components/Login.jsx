import { Link } from 'react-router-dom';
export function Login({ onLogin, onSignUp }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="loginSignUp">
      <img src="src/assets/GW_Logo.png" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text"></input>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password"></input>
        <Link to="/market">
          <input type="submit" value="Login"></input>
        </Link>
      </form>
      <Link to="/signUp">
        <h4>Sign Up</h4>
      </Link>
    </div>
  );
}
