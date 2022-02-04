import State, { rakabaka } from './Redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route } from 'react-router-dom';
import { addPost, myMes, newMyText, updateNewPostText} from './Redux/State';


let rerenderEntireTree = () =>{
ReactDOM.render(
  <React.StrictMode>
    <App state={State} addPost={addPost} updateNewPostText={updateNewPostText} myMes={myMes} newMyText={newMyText}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
rerenderEntireTgitree();
rakabaka(rerenderEntireTree);