import React,{Component} from 'react';
import axios from 'axios';
import  Loader  from './Loader';
class EditList extends Component {
  constructor(props){
    super(props)
    this.state={
      c_fname:"",
      c_lname:"",
      c_phone:"",
      c_address:"",
      c_postalcode:"",
      c_gender:"",
      c_status:false,
      isLoader:true
        
      
    
  }
  this.onChangefName = this.onChangefName.bind(this);
  this.onChangeLName = this.onChangeLName.bind(this);
  this.onChangePhone = this.onChangePhone.bind(this);
  this.onChangeAddress = this.onChangeAddress.bind(this);
  this.onChangePostal = this.onChangePostal.bind(this);
  this.onChangeGender = this.onChangeGender.bind(this);
   this.onSubmit = this.onSubmit.bind(this);
  this.goToBack = this.goToBack.bind(this);
  this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
  
  }
  
  onChangefName(e){
    this.setState({
        c_fname:e.target.value
    })
}
onChangeLName(e){
    this.setState({
        c_lname:e.target.value
    })
}
onChangePhone(e){
    this.setState({
        c_phone:e.target.value
    })
}
onChangeAddress(e){
    this.setState({
        c_address:e.target.value
    })
}
onChangePostal(e){
    this.setState({
        c_postalcode:e.target.value
    })
}
onChangeGender(e){
    this.setState({
        c_gender:e.target.value
    })
}
onChangeCheckbox(e){
  this.setState({
    c_status:!this.state.c_status
})
}
goToBack(){
  this.props.history.push('/'); 
  }
  // componentDidUpdate(){
  //   if (this.props.c_status === true) {
  //     this.setState({isLoader:false })
  //   }
  // }
onSubmit(e){
  e.preventDefault();

  // console.log(`First name:${this.state.c_fname}`)
  // console.log(`Last name:${this.state.c_lname}`)
  // console.log(`Phone:${this.state.c_phone}`)
  // console.log(`Address:${this.state.c_address}`)
  // console.log(`Postal:${this.state.c_postalcode}`)
  // console.log(`Gender:${this.state.c_gender}`)
  // console.log(`Status:${this.state.c_status}`)

const  newEmployee= {
  c_fname:this.state.c_fname,
  c_lname:this.state.c_lname,
  c_phone:this.state.c_phone,
  c_address:this.state.c_address,
  c_postalcode:this.state.c_postalcode,
  c_gender:this.state.c_gender,
  c_status:this.state.c_status
    
  }
 
  axios.put('/crud/'+ this.props.match.params.id,newEmployee)
  .then(response=> {
    this.props.history.push('/');
    //this.setState({isLoader:false })
    //console.log(this.props.match.params.id);
    //console.log(response.data);
      })
  .catch((error)=> {
    console.log(error);
  });
  
}
  componentDidMount(){
    console.log('componentDidMount sgsg')
       axios.get('/crud/edit/'+this.props.match.params.id)
       .then(response=> {
      console.log(response)
    
      this.setState({
        c_fname:response.data.c_fname,
        c_lname:response.data.c_lname,
        c_phone:response.data.c_phone,
        c_address:response.data.c_address,
        c_postalcode:response.data.c_postalcode,
        c_gender:response.data.c_gender,
        c_status:response.data.c_status,
        isLoader:false
       
      })
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
      <h4>Edit Customer</h4>
      <form onSubmit={this.onSubmit}>
      <div className="form-group">
    <label>First Name</label>
    <input
     type="text"
    name="c_fname"
    value={this.state.c_fname}
    onChange={this.onChangefName}
    className="form-control"
    placeholder="First Name"
         />
  </div>
  <div className="form-group">
    <label>Last Name</label>
    <input
     type="text"
    name="c_lname"
    value={this.state.c_lname}
    onChange={this.onChangeLName}
    className="form-control"
    placeholder="Last Name"
         />
  </div>
  <div className="form-group">
    <label>Phone</label>
    <input
     type="number"
    name="c_phone"
    value={this.state.c_phone}
    onChange={this.onChangePhone}
    className="form-control"
    placeholder="Phone"
         />
  </div>
  <div className="form-group">
    <label>Address</label>
    <textarea 
    name="c_address"
    value={this.state.c_address}
    onChange={this.onChangeAddress}
    className="form-control"
    placeholder="Address"
    className="form-control" rows="3" cols="1"></textarea>
    
  </div>
  <div className="form-group">
    <label>Postal Code</label>
    <input
     type="number"
    name="c_postalcode"
    value={this.state.c_postalcode}
    onChange={this.onChangePostal}
    className="form-control"
    placeholder="Last Name"
         />
  </div>
  
  <div className="form-group">
  <div><label>Gender</label></div>
  <div className="form-check form-check-inline">
  <input className="form-check-input"
   type="radio"
    name="c_gender"
    onChange={this.onChangeGender}
    checked={this.state.c_gender === "Male"}
    value="Male" />
   
  <label className="form-check-label">Male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input"
   type="radio"
    name="c_gender"
    onChange={this.onChangeGender}
    checked={this.state.c_gender === "Female"}
    value="Female" />
   
  <label className="form-check-label">Female</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input"
   type="radio"
    name="priortyOptions"
    onChange={this.onChangeGender}
    checked={this.state.c_gender === "Others"}
    value="Others" />
   
  <label className="form-check-label">Others</label>
</div>
 <div className="form-group">
  <div className="form-check form-check-inline">
  <input className="form-check-input"
   type="checkbox"
    name="completed"
    onChange={this.onChangeCheckbox}
    checked={this.state.c_status}
    value={this.state.c_status} />
   
  <label className="form-check-label">Status</label>
</div>
</div>
   </div>
   <button type="submit" className="btn btn-primary mr-2">Submit</button>
   <button type="button" onClick={this.goToBack} className="btn btn-primary">Back</button>

      </form>
       </div>  </div>  
    );
  }}
  
  export default EditList;
