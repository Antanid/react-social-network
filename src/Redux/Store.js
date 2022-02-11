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

      newPostText: '',
    },

    dialogPage: {

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

      ForMe: 'Hello',
    },

    sidebar:{},
    
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
    this._State.friendsPage = friendsReducer(this._State.friendsPage.action)
      this.rerenderEntireTree(this._State);
  }

};





export default Store;




