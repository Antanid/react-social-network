import MyPos from './MyPosts.module.css';
import Post from './Posts/Post';
const MyPosts = () =>{
    return(
        <div>
        <div className={MyPos.myPosts}>
          My posts
        <div className={MyPos.newPosts}>
            <textarea></textarea>
            <button>Add post</button>
          </div>
        </div>
        <Post/>
        <Post/>
        <Post/>
          </div>
    );
}
 export default MyPosts;