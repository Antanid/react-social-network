import { type } from "@testing-library/user-event/dist/type";
import dialogReducer from "./dialogReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./sidebarReducer";


let Store = {

  _State: {
    profilePage: {
      posts:
        [{ id: 1, message: 'Hi, how are you?', like: 15 },
        { id: 2, message: "It's my first post!", like: 10 },
        { id: 3, message: 'Good JA-JA!', like: 40 },
        { id: 4, message: 'Maicraft its my LIFE!!!', like: -200 }],

      newPostText: 'Imdsadad HERE!',
    },

    dialogPage: {

      myMessage: [
        { id: 1, img: 'https://i.pinimg.com/236x/db/e3/af/dbe3af6dfdf4e4c88831f8442fc3e567.jpg', me: 'Me---Hi!' },
        { id: 2, img: 'https://i.pinimg.com/236x/db/e3/af/dbe3af6dfdf4e4c88831f8442fc3e567.jpg', me: 'Me---Very good! I am leaving ZAVOOOD!!!!!' },
        { id: 3, img: 'https://i.pinimg.com/236x/db/e3/af/dbe3af6dfdf4e4c88831f8442fc3e567.jpg', me: 'Me---What about you?' },
      ],
      messagesData: [
        { id: 1, img: 'http://i.imgur.com/0yutzSE.png', message: 'Anton--- Hello!' },
        { id: 2, img: 'http://i.imgur.com/0yutzSE.png', message: '--- Anton --- How are you?' },
        { id: 3, img: 'http://i.imgur.com/0yutzSE.png', message: '--- Anton--- ITS AMAZING!' },
        { id: 4, img: 'http://i.imgur.com/0yutzSE.png', message: '--- Anton--- I am okay' }],

      DialogsData: [
        { id: 1, name: 'Anton' },
        { id: 2, name: 'Natasha' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Vasya' },],

      ForMe: 'Priyom',
    },
    sidebar:{}
  },


  _rerenderEntireTree() {
    console.log('')
  },
  getState() {
    return this._State;
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },



  dispatch(action) {

    this._State.dialogPage = dialogReducer(this._State.dialogPage, action);
    this._State.profilePage = profileReducer(this._State.profilePage, action);
    this._State.sidebar = sidebarReducer(this._State.sidebar, action);
      this.rerenderEntireTree(this._State);
  }

};





export default Store;



