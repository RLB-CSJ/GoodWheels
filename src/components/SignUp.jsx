import { Link } from 'react-router-dom';
export function SignUp({ onLogin }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="loginSignUp">
      <img src="src/assets/GW_Logo.png" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text"></input>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="text"></input>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password"></input>
        <Link to="/market">
          <input type="submit" value="Sign Up"></input>
        </Link>
      </form>
    </div>
  );
}
