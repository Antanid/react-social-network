import { NavLink } from 'react-router-dom';
import dialog from './Name.module.css';
const DialogItem = (props) => {
    return(
        <div className={dialog.name}><NavLink className={navData => navData.isActive ? dialog.active : dialog.name} to={'/Dialogs/' + props.id}>{props.name}</NavLink>
        <img className={dialog.ava} src='http://i.imgur.com/0yutzSE.png'></img>
        </div>
        );
}
export default DialogItem


