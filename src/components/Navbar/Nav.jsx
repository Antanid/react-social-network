import nav from './Nav.module.css';
const Nav = () =>{
    return(
        <div className='col-lg-2'>
        <nav className={nav.nav}>
          <ul className={nav.manu__nav}>
            <li className={nav.li__nav}><a href='/'>Profile</a></li>
            <li className={nav.li__nav}><a href='/'>Messages</a></li>
            <li className={nav.li__nav}><a href='/'>News</a></li>
            <li className={nav.li__nav}><a href='/'>Music</a></li> <br></br>
             <li className={nav.li__nav}><a className={nav.nav__settings} href='/'>Settings</a></li>
          </ul>
          
        </nav>
        </div>
    );
}

export default Nav;