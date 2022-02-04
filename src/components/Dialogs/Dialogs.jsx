import React from 'react';
import dialog from './Dialogs.module.css'
import DialogItem from './NameId/Name';
import MessageItem from './MessageItem/Message';
import MyMessages from './myMessage/Message.jsx'

import { NavLink } from 'react-router-dom';
const Dialogs = (props) => {

    let dialogsElements = props.state.DialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messagesData.map( m => <MessageItem text={m.message} id={m.id} img={m.img}/>)
    let myElements = props.state.myMessage.map( my => <MyMessages my={my.me} id={my.id} img={my.img}/>)


    let newMessage = React.useRef();
    let addPost = () =>{
        let text = newMessage.current.value;
        props.myMes(text);
        props.newMyText('');

    }

    let textAre = () =>{
        let text = newMessage.current.value;
        props.newMyText(text);
    }

   

    return (
        <div className='col-lg-10'>

            <div className={dialog.chat}>
                <div className={dialog.item}>
                {dialogsElements}
                </div>
                <div className={dialog.messages}>
                    {messagesElements}
                    {myElements}
                    <textarea onChange={textAre} value={props.ForMe} ref={newMessage}></textarea>
                    <button onClick={addPost}>AddMessage</button>
                </div>
                
            </div>
        </div>
    );
}

export default Dialogs;

