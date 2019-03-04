const initialState = { anchor: 'left',
    device: [],
    open: false,
    id: '', 
    name: '', 
    code: '', 
 };


export function device(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_DEVICE':
            return {
            ...state,
            device: action.device
            };
        case 'DEVICE_DETAIL':
            return {
                ...state,
                id: action._id,  
                code: action.code,  
                name: action.name,  
        
            };
        case "DEVICE_UPDATED":
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