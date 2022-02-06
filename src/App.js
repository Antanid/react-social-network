import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import beachImg from './../src/img/beach.jpg';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { propTypes } from 'react-bootstrap/esm/Image';
import Friend from './components/Friends/Friends';
import friendList from './components/Friends/FriendsHeader/headerFriend';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <div className='container'>
        <div className='row'>
          <Header />
          <Nav />
          
          <Routes>
            <Route exact='' path="/Dialogs/*" element={<Dialogs newMyText={props.newMyText} ForMe={props.state.dialogPage.ForMe} newMes={props.newMes} state={props.state.dialogPage} myMes={props.myMes} newMyText={props.newMyText}/>}/>

            <Route path="/profile" element={<Profile post={props.state.profilePage} dispatch={props.dispatch} addPost={props.addPost}/>} />
            
            <Route path="/news" element={<News/>} />
            <Route path="/music" element={<Music/>} />
            <Route path="/setting" element={<Setting/>} />
            <Route path='/Friends' element={<Friend/>}/>
          </Routes>
          
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}
export default App;


        