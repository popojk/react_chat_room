function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type='text' placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src='https://variety.com/wp-content/uploads/2021/04/Avatar.jpg' />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
