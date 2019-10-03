import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import DefaultLists from './components/DefaultLists';
import CreateList from './components/CreateList';
import EditList from './components/EditList';
import NavLists from './components/Nav';
class App extends Component {
  render(){
  return (
    <div className="container">
   
      <Router>
      <NavLists />
      <Route path="/" exact component={DefaultLists} />
      <Route path="/add" component={CreateList} />
      <Route path="/edit/:id" component={EditList} />
       
      </Router>
    </div>
  );
}}

export default App;
