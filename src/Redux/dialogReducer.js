const MY_NEW_MESSAGE = 'MY-NEW-MESSAGE';
const NEW_TEXT_MESSAGE = 'NEW-TEXT-MESSAGE';
let initialState = {
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
};
const dialogReducer = (State = initialState, action) => {
  switch (action.type) {
    case MY_NEW_MESSAGE:
      let addMyMess = {
        id: 5,
        img: 'http://i.imgur.com/0yutzSE.png',
        message: State.ForMe,
      }
      State.messagesData.push(addMyMess);
      return State;

    case NEW_TEXT_MESSAGE:
      State.ForMe = action.textArea;
      return State;
    default:
      return State;
  }
}

export const addMessageCreatorAction = () => {
  return {
    type: MY_NEW_MESSAGE
  }
}
export const newTextMessageCreatorAction = (text) => {
  return {
    type: NEW_TEXT_MESSAGE,
    textArea: text
  }
}

export default dialogReducer;