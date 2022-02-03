import { NavLink } from 'react-router-dom';
import nav from './Nav.module.css';
const Nav = () => {
  return (
    <div className='col-lg-2'>
      <nav className={nav.nav}>
        <ul className={nav.manu__nav}>
          <li className={`${nav.item} ${nav.active}`}><NavLink className = { navData => navData.isActive ? nav.active : nav.item } to='/profile' >Profile</NavLink></li>
          <li className={nav.item}><NavLink className = { navData => navData.isActive ? nav.active : nav.item } to='/Dialogs'>Messages</NavLink></li>
          <li className={nav.item}><NavLink className = { navData => navData.isActive ? nav.active : nav.item } to='/News'>News</NavLink></li>
          <li className={nav.item}><NavLink className = { navData => navData.isActive ? nav.active : nav.item } to='/Music'>Music</NavLink></li> <br></br>
          <li className={nav.item}><NavLink className = { navData => navData.isActive ? nav.active : nav.item } to='/Setting'>Settings</NavLink></li>
          
        </ul>

      </nav>
    </div>
  );
}

export default Nav;

