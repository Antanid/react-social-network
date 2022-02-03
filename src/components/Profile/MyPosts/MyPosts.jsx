import MyPos from './MyPosts.module.css';
import Post from './Posts/Post';
const MyPosts = (props) => {

  
  let PostsMassive = props.postData.map(p => <Post message={p.message} like={p.like} />);

  return (
    <div>
      <div className={MyPos.myPosts}>
        My posts
        <div className={MyPos.newPosts}>
          <div>
          <textarea></textarea>
          </div>
          <button>Add post</button>
        </div>
      </div>
      {PostsMassive}
    </div>
  );
}
export default MyPosts;