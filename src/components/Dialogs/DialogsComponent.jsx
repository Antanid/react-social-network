import React from 'react';
import MyMessages from './myMessage/Message.jsx'
import { NavLink } from 'react-router-dom';
import { addMessageCreatorAction, newTextMessageCreatorAction } from '../../Redux/dialogReducer';
import Dialogs from './Dialogs';


const DialogsComponent = (props) => {

    let state = props.store.getState();

    let addPost = () =>{
        props.store.dispatch(addMessageCreatorAction());
    }

    let textArea = (text) =>{
        props.store.dispatch(newTextMessageCreatorAction(text));
    }

   return(<Dialogs
     addMessageCreatorAction={addPost}
     newTextMessageCreatorAction={textArea}
     messagesData={state.dialogPage.messagesData}
     DialogsData = {state.dialogPage.DialogsData}
     />)

}

export default DialogsComponent;

