import React,{Component} from 'react';
import axios from 'axios';
import  Loader  from './Loader';
class CreateList extends Component {
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
   
    componentDidMount(){
        this.setState({isLoader:false})
    }
    goToBack(){
        this.props.history.push('/'); 
        }
        
    onSubmit(e){
        e.preventDefault();
        console.log(`First name:${this.state.c_fname}`)
        console.log(`Last name:${this.state.c_lname}`)
        console.log(`Phone:${this.state.c_phone}`)
        console.log(`Address:${this.state.c_address}`)
        console.log(`Postal:${this.state.c_postalcode}`)
        console.log(`Gender:${this.state.c_gender}`)
        console.log(`Status:${this.state.c_status}`)
       

     const  newCustomer= {
        c_fname:this.state.c_fname,
        c_lname:this.state.c_lname,
        c_phone:this.state.c_phone,
        c_address:this.state.c_address,
        c_postalcode:this.state.c_postalcode,
        c_gender:this.state.c_gender,
        c_status:this.state.c_status

        }

        axios.post('/crud/', newCustomer)
          .then(function (response) {
            this.setState({isLoader:false })
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          this.props.history.push('/');
        this.setState({
            c_fname:"",
            c_lname:"",
            c_phone:"",
            c_address:"",
            c_postalcode:"",
            c_gender:"",
            c_status:false
        })
        
    }
    render(){
    return (
        <div className="container">
         <div className="position-relative">
         <Loader show={this.state.isLoader} />
     <h4>Add Customer</h4>
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
    placeholder="Postal Code"
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
  </div>

  <button type="submit" className="btn btn-primary mr-2">Submit</button>
   <button type="button" onClick={this.goToBack} className="btn btn-primary">Back</button>

     </form>
      </div></div>
    );
  }}
  
  export default CreateList;
