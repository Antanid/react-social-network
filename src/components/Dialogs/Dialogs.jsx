import dialog from './Dialogs.module.css'
const Dialogs = (props) => {
    return (
        <div className='col-lg-10'>
            <div className={dialog.chat}>
                Dialogs

            </div>
            <div className={dialog.ch}>
                Chat
            </div>

        </div>
    );
}

export default Dialogs