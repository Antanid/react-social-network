import MyPosts from "./MyPosts/MyPosts";
import prof from "./Profile.module.css";
const Profile = () =>{
    return(
        <div className='col-lg-10'>
          <div className={prof.content}>
          <div className='img__content'>
              <img className={prof.beachImg} src='https://smapse.ru/storage/2018/03/academy-img-1.jpg'></img>
          </div>
        
        <div className='content__profile'>
          ContentProfile 9+ ava
        </div>
        <MyPosts/>
          </div>
        </div>
    );
}
 export default Profile;