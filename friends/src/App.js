import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import LoginForm from './components/Login/Login.components';
import Friends from './components/friends/Friends.component';
import AddForm from './components/addForm/AddForm.component';
import ReadMe from './components/readme/ReadMe.component';
import Navbar from './components/Navbar/Navbar.component';
import PrivateRoute from './components/private-route/Private-Route.component';


function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <p></p>
        
        
      </header>
      <section className="dashboard">
        <Switch>
          <Route exact path='/'></Route>

          <Route path='/login' component={LoginForm} />

          <Route path='/readme' component={ReadMe} />
            
          <PrivateRoute path='/friends' component={Friends} />
          
          <Route path='/addfriend' component={AddForm} />
          <Route component={LoginForm} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
