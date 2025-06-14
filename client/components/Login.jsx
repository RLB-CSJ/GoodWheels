export function Login() {
  return (
    <div>
      <img src='client/assets/GW_Logo.png' />
      <form>
        <label htmlFor='username'>Username</label>
        <input id='username' name='username' type='text'></input>
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' type='password'></input>
        <input type='submit' value='Login'></input>
      </form>
      <h4>Sign Up</h4>
    </div>
  );
}
