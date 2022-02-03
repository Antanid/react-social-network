import mess from './Message.module.css'
const MessageItem = (props) =>{
    return(
        <div className={mess.message}>{props.text}</div>
    );
}
export default MessageItem;