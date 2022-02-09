import React from 'react';
import dialog from './Dialogs.module.css'
import DialogItem from './NameId/Name';
import MessageItem from './MessageItem/Message';
import MyMessages from './myMessage/Message.jsx' 
import { NavLink } from 'react-router-dom';
import { addMessageCreatorAction, newTextMessageCreatorAction } from '../../Redux/dialogReducer';


const Dialogs = (props) => {
     
    let dialogsElements = props.DialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messagesData.map( m => <MessageItem text={m.message} id={m.id} img={m.img}/>)


    let newMessage = React.useRef();

    let addPost = () =>{
        let text = newMessage.current.value;
        props.addMessageCreatorAction();
        newMessage.current.value = '';
    }

    let textArea = () =>{
        let text = newMessage.current.value;
        props.newTextMessageCreatorAction(text);
        
    }


    return (
        <div className='col-lg-10'>

            <div className={dialog.chat}>
                <div className={dialog.item}>
                {dialogsElements}
                </div>
                <div className={dialog.messages}>
                    {messagesElements}
                    <textarea onChange={textArea} ref={newMessage} placeholder='New text'></textarea>
                    <button onClick={addPost}>AddMessage</button>
                </div>
                
            </div>
        </div>
    );
}

export default Dialogs;

