import MyPos from './MyPosts.module.css';
import React from 'react';
import Post from './Posts/Post';
import { addActionCreator, onPostChangeActionCreator } from '../../../Redux/ProfileReducer';

const MyPosts = (props) => {
  
  let PostsMassive = props.postData.map(p => <Post message={p.message} like={p.like} />);

 let elementPost = React.useRef();

 let addPost= () =>{
  let text = elementPost.current.value;
    props.addActionCreator();
   elementPost.current.value='';
 }
  let onPostChange = () =>{
    let text = elementPost.current.value;
    props.onPostChangeActionCreator(text);   
  }

  return (
    <div>
      <div className={MyPos.myPosts}>
        My posts
        <div className={MyPos.newPosts}>
          <div>
          <textarea onChange={onPostChange} ref={elementPost} placeholder='New text'/>
          </div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      {PostsMassive}
    </div>
  );
}
export default MyPosts;
