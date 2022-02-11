import MyPos from './MyPosts.module.css';
import React from 'react';
import Post from './Posts/Post';

const MyPosts = (props) => {
  
  let PostsMassive = props.postData.map(p => <Post message={p.message} like={p.like} key={p.id}/>);

 let elementPost = React.useRef();

 let addPost= () =>{
  let text = elementPost.current.value;
    props.addActionCreator();
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
          <textarea onChange={onPostChange} ref={elementPost} value={props.newPostText} placeholder='New text'/>
          </div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      {PostsMassive}
    </div>
  );
}
export default MyPosts;
