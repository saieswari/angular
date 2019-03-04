import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Employeelist from '../src/Components/Employeelist';
import Dashboard from '../src/Components/Dashboard';
import Assetlist from '../src/Components/Assetlist';
import Navigation from './Components/Navigation';
import CreateEmployee from'./Components/CreateEmployee';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="App">
          <Route exact strict path="/" component={Dashboard} />
          <Route exact strict path="/dashboard" component={Dashboard} />
          <Route exact strict path="/assetlist" component={Assetlist} />
          <Route exact strict path="/employeelist" component={Employeelist} />
          <Route exact strict path="/createemployee" component={CreateEmployee } />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
