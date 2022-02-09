import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route } from 'react-router-dom';
import Store from './Redux/reduxStore';


let rerenderEntireTree = () =>{
ReactDOM.render(
  <React.StrictMode>
    <App store={Store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
rerenderEntireTree(Store.getState());
 
Store.subscribe(() =>{
  let state = Store.getState();
  rerenderEntireTree(state);
});