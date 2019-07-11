import React from 'react'
import s from './Dialogs.module.css'
import { NavLink} from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogsReducer'


const Dialogs = (props) => {
    let state = props.dialogsPage;
    
    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id}/>);
   
    let dialogsElements = state.dialogs
        .map( d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        //props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>
                        {messagesElements}
                    </div>
                    <div>
                        <div>
                            <textarea onChange= {onNewMessageChange} value={newMessageBody} placeholder='Enter your message'></textarea>
                        </div>
                        <div><button onClick={onSendMessageClick}>Send</button></div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Dialogs;