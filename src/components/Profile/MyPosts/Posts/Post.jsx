import { propTypes } from 'react-bootstrap/esm/Image';
import post from './MyPost.module.css'
const Post = (props) =>{
    return(
        <div className={post.post}>
        <img src="https://www.meme-arsenal.com/memes/6d0fce2ab076987859e93863e01d75f9.jpg" alt="" />
        <span className={post.text}>{ props.message }</span>
        <div>
        <span className={post.like}> <a href='/'>Like</a> {props.like}</span>
        </div>
        </div>
    );
}
 export default Post;