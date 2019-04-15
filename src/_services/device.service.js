import axios from 'axios';
import config from '../config/config';
import { deviceActions } from '../_actions';


export const deviceService = {
    get,
    post,
    put,
    deleteDetail,
};

function get(apiEndpoint){
    return axios.get(config.baseUrl+apiEndpoint, {}).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log("Error in response");
        console.log(err);
    })
}


function post(apiEndpoint, payload){
 /* return axios.post(config.baseUrl+apiEndpoint, {
     identity:payload.identity,
     password:payload.password
 }, getOptions()).then((response)=>{
         return response;
     }).catch((err)=>{
         console.log(err);
     })  */
    return  axios.post(config.baseUrl+'/devices', {
        payload
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
 
 }

function put(apiEndpoint, payload){
    return axios.put(config.baseUrl+apiEndpoint, payload).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function deleteDetail(apiEndpoint){
    return axios.delete(config.baseUrl+apiEndpoint).then((response)=>{
        const { dispatch } = this.props;

        dispatch(deviceActions.getDevice());
    }).catch((err)=>{
        console.log(err);
    })
}

function getOptions(){
    let options = {}; 
    if(localStorage.getItem('token')){
        options.headers = { 'x-access-token': localStorage.getItem('token') };
    }
    return options;
}