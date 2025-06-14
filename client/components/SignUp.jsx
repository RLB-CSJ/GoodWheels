export function SignUp() {
  return (
    <div>
      <img src='client/assets/GW_Logo.png' />
      <form>
        <label htmlFor='name'>Name</label>
        <input id='name' name='name' type='text'></input>
        <label htmlFor='email'>Email</label>
        <input id='email' name='email' type='text'></input>
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' type='password'></input>
        <input type='submit' value='Login'></input>
      </form>
    </div>
  );
}
