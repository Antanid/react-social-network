import React from 'react';
import { connect } from 'react-redux';
import { addActionCreator, onPostChangeActionCreator } from '../../../Redux/ProfileReducer';
import MyPosts from './MyPosts';



let mapStateToProps = (state) =>{
  return{
    postData: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
};
let mapDispatchToProps = (dispatch) =>{
  return{
    addActionCreator: () =>{dispatch(addActionCreator())},
    onPostChangeActionCreator:  (text) =>{dispatch(onPostChangeActionCreator(text))},
  }
} 


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);
export default MyPostsContainer;
