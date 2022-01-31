import post from './MyPost.module.css'
const Post = () =>{
    return(
        <div className={post.post}>
        <img src="https://www.meme-arsenal.com/memes/6d0fce2ab076987859e93863e01d75f9.jpg" alt="" />
        Post 1
        <div>
        <span>Like</span>
        </div>
        </div>
    );
}
 export default Post;