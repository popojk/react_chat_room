function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>RD Chat</span>
      <div className='user'>
        <img src='https://variety.com/wp-content/uploads/2021/04/Avatar.jpg' alt='' />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
