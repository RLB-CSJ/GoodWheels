export function Login({onLogin, onSignUp}) {
  
  function handleSubmit(e){
    e.preventDefault();
  }
  
  return (
    <div className="loginSignUp">
      <img src='client/assets/GW_Logo.png' />
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input id='username' name='username' type='text'></input>
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' type='password'></input>
        <input type='submit' value='Login' onClick={()=>{onLogin()}}></input>
      </form>
      <h4 onClick={()=>{onSignUp('signup')}} >Sign Up</h4>
    </div>
  );
}
