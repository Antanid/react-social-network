import profileIcon from'./../img/profile_icon.png';
const Nav = () =>{
    return(
        <div className='col-lg-2'>
        <nav className='nav'>
          <ul className='manu__nav'>
            <li className='li__nav'><a href='/'> <img className='profileIcon' src={profileIcon}></img> Profile</a></li>
            <li className='li__nav'><a href='/'>Messages</a></li>
            <li className='li__nav'><a href='/'>News</a></li>
            <li className='li__nav'><a href='/'>Music</a></li> <br></br>
             <li><a className='nav__settings' href='/'>Settings</a></li>
          </ul>
          
        </nav>
        </div>
    );
}

export default Nav;