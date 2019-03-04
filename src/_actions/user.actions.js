import { userService } from '../_services/';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    getUser,
    getUserById,
    onChangeProps,
    editUserInfo,
    createUser,
    
};

function login(username, password){
    return dispatch => {
        let apiEndpoint = 'signin';
        let payload = {
            username: username,
            password: password
        }
        userService.login(apiEndpoint, payload)
        .then((response)=>{
            console.log(response.data);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('auth', response.data.auth);
                dispatch(setUserDetails(response.data));
                history.push('/home');
            }
        })
    };
}


function logout(){
    return dispatch => {
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        dispatch(logoutUser());
        history.push('/');
    }
}




function getUser(){
    return dispatch => {
        let apiEndpoint = 'users';
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(changeUsersList(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function createUser(payload){
    return dispatch => {
        let apiEndpoint = 'signup';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createUserInfo());
            history.push('/user');
        }) 
    }
}

function getUserById(id){

    return dispatch => {
        let apiEndpoint = 'users/'+ id;
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(editUsersDetails(response.data.data));
        })
    };
}

function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}

function editUserInfo(id, payload){
    return dispatch => {
        let apiEndpoint = 'user/'+ id;
        userService.put(apiEndpoint, payload)
        .then((response)=>{
            dispatch(updatedUserInfo());
            history.push('/user');
        }) 
    }
}


export function changeUsersList(user){
    return{
        type: "FETECHED_ALL_USER",
        user: user
    }
}

export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editUsersDetails(user){
    return{
        type: "User_DETAIL",
        id: user._id,
        name: user.name,
        password: user.password,
        username: user.username,
   }
}

export function updatedUserInfo(){
    return{
        type: "USER_UPDATED"
    }
}

export function createUserInfo(){
    return{
        type: "USER_CREATED_SUCCESSFULLY"
    }
}

export function deleteUsersDetails(){
    return{
        type: "DELETED_USER_DETAILS"
    }
}




export function setUserDetails(user){
    return{
        type: "LOGIN_SUCCESS",
        auth: user.auth,
        token: user.token
    }
}

export function logoutUser(){
    return{
        type: "LOGOUT_SUCCESS",
        auth: false,
        token: ''
    }
}

