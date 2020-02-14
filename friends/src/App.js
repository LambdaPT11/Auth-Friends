import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './App.css';
import LoginForm from './components/Login/Login.components';
import Navbar from './components/Navbar/Navbar.component';

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
          <Route path='/login'>
            <LoginForm />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
