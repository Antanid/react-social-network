import { connect } from "react-redux";
import { followAC, setFriends, UnfollowAC } from "../../Redux/FriendsReducer";
import Friend from "./Friends";

const mapStateToProps =(State) =>{
    return{
        friends: State.friendsPage.friends
    }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        followAC: (friendID) =>{
            dispatch(followAC(friendID))
        },
        UnFollowAC: (friendID) =>{
            dispatch(UnfollowAC(friendID))
        },
        setFriend: (friend) =>{
            dispatch(setFriends(friend))
        }
    };


}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friend);
export default FriendsContainer;