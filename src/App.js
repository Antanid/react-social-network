import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import beachImg from './../src/img/beach.jpg';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';


const  App = () => {
  return (
  <div className='app-wrapper'>
    <div className='container'>
      <div className='row '>
      <Header/>
      <Nav/>
      <Profile/>
        </div>
      </div>
    </div>
  );
}
export default App;
