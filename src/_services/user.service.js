import axios from 'axios';
import config from '../config/config';


export const userService = {
    get,
    post,
    put,
    deleteDetail,
    login
};

function get(apiEndpoint){
    return axios.get(config.baseUrl+apiEndpoint, {}).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log("Error in response");
        console.log(err);
    })
}

function login(apiEndpoint, payload){
  

   return axios.post(config.baseUrl+apiEndpoint, {}, {
        auth: {
          username: payload.username,
          password: payload.password
        }
      }).then(function(response) {
        console.log('Authenticated');
        return response;
      }).catch(function(error) {
        console.log('Error on Authentication');
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
    return  axios.post('http://vps632536.ovh.net:8080/api/signup', {
        identity: payload.username,
        password: payload.password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
 
 }

function put(apiEndpoint, payload){
    return axios.put(config.baseUrl+apiEndpoint, payload, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function deleteDetail(apiEndpoint){
    return axios.delete(config.baseUrl+apiEndpoint, getOptions()).then((response)=>{
        return response;
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