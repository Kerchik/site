const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
   messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Chi da'},
    ],
    dialogs: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Valera'}
    ],
    newMessageBody: '' 
}
const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
               
            };
            
            
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 5, message: body}]
                
            };
            
    }
    
    return state; 
}
export const sendMessageCreator = (text) => {
    
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (text) => {
    
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}

export default dialogsReducer;