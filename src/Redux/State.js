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
    }
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
 

  myMes(myMessage) {
    let addMyMess = {
      id: 4,
      img: 'https://i.pinimg.com/236x/db/e3/af/dbe3af6dfdf4e4c88831f8442fc3e567.jpg',
      me: myMessage,
    }
    this._State.dialogPage.myMessage.push(addMyMess);
    this.rerenderEntireTree(this._State);
  },
  newMyText(textArea) {
    this._State.dialogPage.ForMe = textArea;
    this.rerenderEntireTree(this._State);
  },


  dispatch(action){
    if(action.type === 'ADD-POST'){
      let newPost = {
        id: 5,
        message: this._State.profilePage.newPostText,
        likeCount: 0,
      }
      this._State.profilePage.posts.push(newPost);
      this.rerenderEntireTree(this._State);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
      this._State.profilePage.newPostText = action.newText;
    this.rerenderEntireTree(this._State);
    }
  }

 
};

export default Store;




