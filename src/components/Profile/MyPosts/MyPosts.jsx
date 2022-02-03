import MyPos from './MyPosts.module.css';
import Post from './Posts/Post';
const MyPosts = (props) => {

  let DialogsData= [
    {id: 1, name: 'Anton'},
    {id: 2, name: 'Natasha'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Vasya'},
]
 
  let postData= [
    {id: 1, message: 'Hi, how are you?', like: 15},
    {id: 2, message: "It's my first post!", like: 10},
    {id: 3, message: 'Good JA-JA!', like: 40},
  ]
  let PostsMassive = postData.map(p => <Post message={p.message} like={p.like} />);

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