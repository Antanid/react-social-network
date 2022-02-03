import ff from './MyMessage.module.css'
const MyMessages = (props) =>{
    return(
        <div className={ff.message}>

        <div className={ff.text}>
        {props.my}
        </div>
        <img className={ff.myAva} src={props.img}></img>

        </div>
    );
}
export default MyMessages;