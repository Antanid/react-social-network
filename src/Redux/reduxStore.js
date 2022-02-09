import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./sidebarReducer";

let reducer=combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
});

let Store = createStore(reducer);

export default Store;