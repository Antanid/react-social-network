import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsComponent";
import prof from "./Profile.module.css";
import ProfInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  
  return (
    <div className='col-lg-10'>
      <div className={prof.content}>
        <ProfInfo />
        <MyPostsContainer store={props.store}/>
      </div>
    </div>
  );
}
export default Profile;


