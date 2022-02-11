import React from 'react';
import { addMessageCreatorAction, newTextMessageCreatorAction } from '../../Redux/dialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogPage.messagesData,
        DialogsData: state.dialogPage.DialogsData,
        ForMe: state.dialogPage.ForMe,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        newTextMessageCreatorAction: (text) => { dispatch(newTextMessageCreatorAction(text)) },

        addMessageCreatorAction: () => { dispatch(addMessageCreatorAction()); },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

