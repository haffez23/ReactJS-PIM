import { messageService } from '../_services/';
import { history } from '../_helpers';

export const messageActions = {
   
    getMessage,
    getMessageById,
    onChangeProps,
};


function getMessage(){
    return dispatch => {
        let apiEndpoint = 'messages';
       messageService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(changeMesssagesList(response.data.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}



function getMessageById(id){

    return dispatch => {
        let apiEndpoint = 'messages/'+ id;
        messageService.get(apiEndpoint)
        .then((response)=>{
            dispatch(editMessagesDetails(response));
        })
    };
}

function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}



export function changeMesssagesList(message){
    return{
        type: "FETECHED_ALL_MESSAGE",
        message: message
    }
}

export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editMessagesDetails(message){
    return{
        type: "Message_DETAIL",
        id: message._id,
        name: message.name,
        password: message.password,
        username: message.username,
   }
}

export function updatedMessageInfo(){
    return{
        type: "Message_UPDATED"
    }
}

export function createMessageInfo(){
    return{
        type: "MESSAGE_CREATED_SUCCESSFULLY"
    }
}

export function deleteMessageDetails(){
    return{
        type: "DELETED_Message_DETAILS"
    }
}




export function setMessageDetails(message){
    return{
        type: "LOGIN_SUCCESS",
        auth: message.auth,
        token: message.token
    }
}




