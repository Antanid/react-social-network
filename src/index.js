import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route } from 'react-router-dom';
import Store from './Redux/State';


let rerenderEntireTree = () =>{
ReactDOM.render(
  <React.StrictMode>
    <App state={Store.getState()} dispatch={Store.dispatch.bind(Store)} myMes={Store.myMes.bind(Store)} newMyText={Store.newMyText.bind(Store)}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
rerenderEntireTree(Store.getState());
Store.subscribe(rerenderEntireTree);