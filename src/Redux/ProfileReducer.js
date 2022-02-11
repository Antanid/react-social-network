const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts:
    [{ id: 1, message: 'Hi, how are you?', like: 15 },
    { id: 2, message: "It's my first post!", like: 10 },
    { id: 3, message: 'Good JA-JA!', like: 40 },
    { id: 4, message: 'Maicraft its my LIFE!!!', like: -200 }],

  newPostText: '',
};

const profileReducer = (State = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...State,
        posts: [
          ...State.posts,
          {
            id: 5,
            message: State.newPostText,
            likeCount: 0
          }],
        newPostText: '',
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...State,
        newPostText: action.newText
      };
    default:
      return State;
  }
}

export const addActionCreator = () => {
  return {
    type: ADD_POST
  }
};
export const onPostChangeActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text
  }
};

export default profileReducer;

