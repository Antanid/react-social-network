import MyPos from './MyPosts.module.css';
import React from 'react';
import Post from './Posts/Post';
const MyPosts = (props) => {
  let PostsMassive = props.postData.map(p => <Post message={p.message} like={p.like} />);

  let elementPost = React.createRef();
  let addPost = () =>{
    let text = elementPost.current.value;
    alert(text)
  }

  return (
    <div>
      <div className={MyPos.myPosts}>
        My posts
        <div className={MyPos.newPosts}>
          <div>
          <textarea ref={elementPost}></textarea>
          </div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      {PostsMassive}
    </div>
  );
}
export default MyPosts;