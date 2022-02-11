import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';



const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <div className='container'>
        <div className='row'>
          <Header />
          <Nav />
          
          <Routes>
            <Route exact='' path="/Dialogs/*" element={<DialogsContainer/>}/>
            <Route path="/profile" element={<Profile/>} />
            
            <Route path="/news" element={<News/>} />
            <Route path="/music" element={<Music/>} />
            <Route path="/setting" element={<Setting/>} />
            <Route path='/Friends' element={<FriendsContainer/>}/>
          </Routes>
          
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}
export default App;


        