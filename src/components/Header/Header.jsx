import instImg from'./insta.png';
import s from './Header.module.css';
const Header = () =>{
    return (
        <div className='col-lg-12'>
        <header className={s.header}>
        <div className='img__header'>
         <img className={s.instImg} src={instImg} alt="logo" />
        </div>
    </header>
        </div>
    );
}

export default Header;
