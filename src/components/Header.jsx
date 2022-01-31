import instImg from'./../img/insta.png'
const Header = () =>{
    return (
        <div className='col-lg-12'>
        <header className='header'>
        <div className='img__header'>
         <img className='instImg'src={instImg} alt="logo" />
        </div>
    </header>
        </div>
    );
}

export default Header;
