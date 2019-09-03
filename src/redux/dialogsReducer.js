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
    
}
const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
                
            };
            
    }
    
    return state; 
}
export const sendMessageCreator = (newMessageBody) => {
    
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}


export default dialogsReducer;