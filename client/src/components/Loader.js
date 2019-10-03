import React, { Component } from 'react';
class Loader extends Component {
  constructor(props){
    super(props)
   
  }
  render(){
return (
  this.props.show && <div style={{zIndex: '9999'}} className="w-100 h-100 d-flex position-absolute justify-content-center bg-white">
  <div className="spinner-border text-muted"></div> </div>
  )
}

  }
  


export default Loader;
