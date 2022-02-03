import mess from './Message.module.css'
const MessageItem = (props) =>{
    return(
        <div className={mess.message}>
        <img className={mess.ava} src={props.img}></img>
        <div className={mess.text}>
        {props.text}
        </div>
        
        </div>
    );
}
export default MessageItem;