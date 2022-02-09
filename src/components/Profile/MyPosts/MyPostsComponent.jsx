import React from 'react';
import { addActionCreator, onPostChangeActionCreator } from '../../../Redux/ProfileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();
  
 let addPost= () =>{
   props.store.dispatch(addActionCreator());
 };
  let onPostChange = (text) =>{
    props.store.dispatch(onPostChangeActionCreator(text));
  };
return (<MyPosts onPostChangeActionCreator={onPostChange} addActionCreator={addPost} postData={state.profilePage.posts}/>);
}
export default MyPostsContainer;
