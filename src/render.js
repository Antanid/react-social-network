import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route } from 'react-router-dom';
import { addPost, myMes, newMyText, updateNewPostText} from './Redux/State';


export let rerenderEntireTree = (State) =>{
ReactDOM.render(
  <React.StrictMode>
    <App state={State} addPost={addPost} updateNewPostText={updateNewPostText} myMes={myMes} newMyText={newMyText}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

