import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route} from 'react-router-dom';
import { User } from './user/';
import { AddUser } from './user/'
import { AddMessage } from './message/'
import { AddDevice } from './device/'
import  { Login } from './login/';
import { Home } from './home/';
import { Device } from './device/';
import { Message } from './message/';
import { history } from './_helpers';
import { PrivateRoute } from './_components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>            
              <Switch>
                <PrivateRoute exact path='/home' component={Home} />
                <PrivateRoute exact path='/user' component={User} />
                <PrivateRoute exact path='/devices' component={Device} />
                <PrivateRoute exact path='/messages' component={Message} />
                <PrivateRoute exact path='/add-user' component={AddUser} />
                <PrivateRoute exact path='/add-device' component={AddDevice} />
                <PrivateRoute exact path='/add-message' component={AddMessage} />
                <PrivateRoute exact path='/edit-user/:id' component={AddUser} />
                <Route exact path='/' component={Login} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
