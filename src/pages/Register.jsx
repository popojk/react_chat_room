function Register() {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>RD Chat</span>
        <span className='title'>Register</span>
        <form>
          <input type='text' placeholder='display name' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input type='file' id='file' />
          <label  style={{display:'none'}} htmlFor='file'>
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
