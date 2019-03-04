const initialState = { anchor: 'left',
    form: [],
    open: false,
    id: '', 
 };


export function form(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_FORM':
            return {
            ...state,
            form: action.form
            };
        case 'FORM_DETAIL':
            return {
                ...state,
                id: action.id,  
        
            };
        case "FORM_UPDATED":
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