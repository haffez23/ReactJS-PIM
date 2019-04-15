import { deviceService } from '../_services/';
import { history } from '../_helpers';

export const deviceActions = {
   
    getDevice,
    getDeviceById,
    deleteDevicesDetails,
    onChangeProps,
};


function getDevice(){
    return dispatch => {
        let apiEndpoint = 'devices';
       deviceService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(changeDevicesList(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}



function getDeviceById(id){

    return dispatch => {
        let apiEndpoint = 'devices/'+ id;
        deviceService.get(apiEndpoint)
        .then((response)=>{
            dispatch(editDeviceDetails(response.data.data));
        })
    };
}

function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}



export function changeDevicesList(device){
    return{
        type: "FETECHED_ALL_DEVICE",
        device: device

    }
}

export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editDeviceDetails(device){
    return{
        type: "Device_DETAIL",
        id: device._id,
        name: device.name,
        code: device.code,
   }
}

export function updatedDeviceInfo(){
    return{
        type: "Device_UPDATED"
    }
}

export function createDeviceInfo(){
    return{
        type: "DEVICE_CREATED_SUCCESSFULLY"
    }
}

export function deleteDevicesDetails(){
    return{
        type: "DELETED_Device_DETAILS"
    }
}






