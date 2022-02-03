import dialog from './Dialogs.module.css'
import DialogItem from './NameId/Name';
import MessageItem from './MessageItem/Message';
import { NavLink } from 'react-router-dom';
const Dialogs = (props) => {

    let messagesData = [
        {id: 1, message: 'Hi! How are you?'},
        {id: 2, message: 'Very good! I am leaving ZAVOOOD!!!!!'},
        {id: 3, message: 'ITS AMAZING!'},
    ]
    let DialogsData= [
        {id: 1, name: 'Anton'},
        {id: 2, name: 'Natasha'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Vasya'},
    ]
     
    let dialogsElements = DialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messagesData.map( m => <MessageItem text={m.message} id={m.id}/>)

    return (
        <div className='col-lg-10'>

            <div className={dialog.chat}>
                <div className={dialog.item}>
                {dialogsElements}
                </div>
                <div className={dialog.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

