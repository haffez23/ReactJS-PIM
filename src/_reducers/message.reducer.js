const initialState = { anchor: 'left',
    message: [],
    open: false,
    id: '',  
    content: '',
    createdAt: '',
    displayAt: '',
    device: '',
 };


export function message(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_MESSAGE':
            return {
            ...state,
            message: action.message
            };
        case 'MESSAGE_DETAIL':
            return {
                ...state,
                message: action.message      
            };
        case "MESSAGE_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };    
        default:
            return state
    }
  }