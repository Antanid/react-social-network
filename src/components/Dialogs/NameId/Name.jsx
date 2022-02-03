import { NavLink } from 'react-router-dom';
import dialog from './Name.module.css';
const DialogItem = (props) => {
    return(
        <div className={dialog.name}><NavLink className={navData => navData.isActive ? dialog.active : dialog.name} to={'/Dialogs/' + props.id}>{props.name}</NavLink></div>
        );
}
export default DialogItem