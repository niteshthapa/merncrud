import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class NavLists extends Component {
    render(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <Link to="/" className="navbar-brand">MERN Crud</Link>
      
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="/" className="nav-link">Lists</Link>
             
            </li>
            <li className="nav-item">
            <Link to="/add" className="nav-link">Create List</Link>
            </li>
           
           
          </ul>
        </div>
      </nav>
    );
  }}
  
  export default NavLists;
