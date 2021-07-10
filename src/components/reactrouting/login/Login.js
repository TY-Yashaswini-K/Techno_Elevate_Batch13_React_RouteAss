import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navigation from '../navigation/Navigation';
// import Navigation2 from '../navigation/Navigation2';
import Success from '../success/Success';

export default class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       display: false
    }
  }
  

    changeNav = ()=>{
      console.log("hi");
      this.setState({
        display:true
      })

      }
      
        
  
    render() {
      console.log("hi",this.state.display );


        return (

            <div>

              {this.state.display ? <Success/> : 
              <div>
              <Navigation/>


              
              
                <div className="col-md-4 offset-md-4 mt-5">
      
        <div className="card">
          <div className="card-header text-center text-white bg-secondary"><h3>Login to Account</h3></div>
          <div className="card-body">
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="card-footer">
          
           <button className="btn btn-primary float-right" onClick={this.changeNav}>Submit</button>
            
            <span>New user?  Please <Link to="/register">Register </Link></span>
            
          </div>
        </div>
      

    </div>
    </div>

    }
     
     
            </div>
        )
    }
}
