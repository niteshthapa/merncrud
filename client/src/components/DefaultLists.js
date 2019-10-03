import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import  Loader  from './Loader';

import axios from 'axios';
class DefaultLists extends Component {
  constructor(props){
    super(props)
    this.state = {
       lists: [],
       isLoader:true 
     
      }
  this.deleteCustomer = this.deleteCustomer.bind(this)
  }
  
  componentDidMount(){
    console.log('componentDidMount')
    axios.get('/crud')
    .then((response)=> {
      this.setState({lists: response.data})
    })
    .catch((error)=> {
      console.log(error);
    });
  
 }
 componentDidUpdate(){
   if(this.setState.isLoader === false){
    this.setState({isLoader:true})
   }
  
  console.log('componentDidUpdate')
    axios.get('/crud')
    .then((response)=> {
      this.setState({lists: response.data,isLoader:false})
    })
    .catch((error)=> {
      console.log(error);
    });
  
  
 }
 deleteCustomer(e){
  axios.delete('/crud/'+ e.currentTarget.dataset.id)
  
  .then(()=> {
    this.setState({isLoader:true})
  
    //this.props.history.push('/');
    //this.setState({isLoader:false })
    //console.log(this.props.match.params.id);
    //console.log(response.data);
      })
  .catch((error)=> {
    console.log(error);
  });
 }
    render(){
      
    return (
      
      <div className="container">
             
             <div className="position-relative">
<Loader show={this.state.isLoader} />
      <table className="table table-striped">
      <thead>
        <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Postal Code</th>
        <th>Gender</th>
      
        <th>Action</th>
        </tr>
      </thead>
      <tbody>
    
       {  this.state.lists.length ? this.state.lists.map((currentList,index)=>{
        
         return(
          <tr key={index}>
          <td className={currentList.c_status ? 'strikethrough' : ''}>{currentList.c_fname}</td>
          <td className={currentList.c_status ? 'strikethrough' : ''}>{currentList.c_lname}</td>
          <td className={currentList.c_status ? 'strikethrough' : ''}>{currentList.c_phone}</td>
          <td className={currentList.c_status ? 'strikethrough' : ''}>{currentList.c_address}</td>
          <td className={currentList.c_status ? 'strikethrough' : ''}>{currentList.c_postalcode}</td>
          <td className={currentList.c_status ? 'strikethrough' : ''}>{currentList.c_gender}</td>
          

          <td><Link to={"/edit/" + currentList._id}>Edit </Link>
          <a data-id={currentList._id} onClick={this.deleteCustomer} href="#">Delete </a>
           </td>
        </tr>
         );
        })     : 
        <tr>
        
        <td colSpan="7">No data found</td>
       
        </tr>
      }
      
      </tbody>
      </table>
      </div> </div>
    
    );
  }}
  
  export default DefaultLists;
