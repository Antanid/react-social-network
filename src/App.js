import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import beachImg from './../src/img/beach.jpg';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';


const  App = () => {
  return (
  <div className='app-wrapper'>
    <div className='container'>
      <div className='row g-1'>

      <Header/>
      <Nav/>
      <Profile/>

        </div>
      </div>
    </div>
  );
}
export default App;
