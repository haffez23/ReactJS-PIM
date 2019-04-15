import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './_reducers';

import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider } from 'material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
const store = createStore(reducer, applyMiddleware(thunk))
const theme = createMuiTheme({
    palette: {
        primary: red,
      },
});

ReactDOM.render(
    <MuiThemeProvider theme = { theme }>

    <Provider store={store}>
            <App />
    </Provider>
    </MuiThemeProvider>

, document.getElementById('root'));
registerServiceWorker();
