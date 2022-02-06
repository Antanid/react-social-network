import MyPosts from "./MyPosts/MyPosts";
import prof from "./Profile.module.css";
import ProfInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  
  return (
    <div className='col-lg-10'>
      <div className={prof.content}>
        <ProfInfo />
        <MyPosts postData={props.post.posts} dispatch={props.dispatch}/>
      </div>
    </div>
  );
}
export default Profile;


