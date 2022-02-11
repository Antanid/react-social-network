import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer";
import friendsReducer from "./FriendsReducer";
import usersReducer from "./FriendsReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./sidebarReducer";

let reducer=combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    friendsPage: friendsReducer,
});

let Store = createStore(reducer);

export default Store;