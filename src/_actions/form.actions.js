import { formService } from '../_services/';
import { history } from '../_helpers';

export const formActions = {
   
    getForm,
    getFormById,
    onChangeProps,
};


function getForm(){
    return dispatch => {
        let apiEndpoint = 'forms';
       formService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(changeFormsList(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}



function getFormById(id){

    return dispatch => {
        let apiEndpoint = 'form/'+ id;
        formService.get(apiEndpoint)
        .then((response)=>{
            dispatch(editFormsDetails(response.data.data));
        })
    };
}

function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}



export function changeFormsList(form){
    return{
        type: "FETECHED_ALL_FORM",
        form: form
    }
}

export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editFormsDetails(form){
    return{
        type: "Form_DETAIL",
        id: form._id,
        name: form.name,
        password: form.password,
        username: form.username,
   }
}

export function updatedFormInfo(){
    return{
        type: "Form_UPDATED"
    }
}

export function createFormInfo(){
    return{
        type: "FORM_CREATED_SUCCESSFULLY"
    }
}

export function deleteFormsDetails(){
    return{
        type: "DELETED_FORM_DETAILS"
    }
}




export function setFormDetails(form){
    return{
        type: "LOGIN_SUCCESS",
        auth: form.auth,
        token: form.token
    }
}




