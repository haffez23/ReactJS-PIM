const initialState = { anchor: 'left',
    user: [],
    open: false,
    id: '',  
    name: '',
    username: '',
    password: '',
    email: '',
    created_at: '',
 };


export function user(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_USER':
            return {
            ...state,
            user: action.user
            };
        case 'USER_DETAIL':
            return {
                ...state,
                id: action._id,  
                username: action.username,
                email: action.email,
                name: action.name,
                created_at: action.created_at,
            };
        case "USER_UPDATED":
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