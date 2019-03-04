import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { user } from './user.reducer';
import { form } from './form.reducer';
import { message } from './message.reducer';
import { device } from './device.reducer';


const rootReducer = combineReducers({
  authentication,
  user,
  form,
  message,
  device
});

export default rootReducer;
