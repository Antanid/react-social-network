import MyPostsContainer from "./MyPosts/MyPostsContainer";
import prof from "./Profile.module.css";
import ProfInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  
  return (
    <div className='col-lg-10'>
      <div className={prof.content}>
        <ProfInfo />
        <MyPostsContainer />
      </div>
    </div>
  );
}
export default Profile;


