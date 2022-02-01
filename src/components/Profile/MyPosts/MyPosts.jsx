import MyPos from './MyPosts.module.css';
import Post from './Posts/Post';
const MyPosts = () => {
  return (
    <div>
      <div className={MyPos.myPosts}>
        My posts
        <div className={MyPos.newPosts}>
          <textarea></textarea>
          <button>Add post</button>
        </div>
      </div>
      <Post message='Hi, how are you?' like='15' />
      <Post message="It's my first post!" like='10' />
      <Post message='Amazing!' like='40' />
    </div>
  );
}
export default MyPosts;