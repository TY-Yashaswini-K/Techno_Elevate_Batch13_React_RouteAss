import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation2 from "../navigation/Navigation2";

export default class Home1 extends Component {
  render() {
    return (
      <div>
        <Navigation2/>
       
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                
                  <img src="https://media.istockphoto.com/photos/close-up-on-employee-woman-finger-hand-holding-statement-report-and-picture-id1077145484?k=6&m=1077145484&s=612x612&w=0&h=nUh97tnxgOfbtVmRZSTpBhXpPcnynTJoyRY7NfM-Jhc=" alt="" width="550px" height="300px" ></img>
                  
                  </div>
                  </div>
                  <div className="col-md-6">
                  
                    <h1>Learning to code</h1>
                    <p>
                      Cras fermentum odio eu feugiat lide <br />
                      par naso tierra. Justo eget nada terra <br />
                      videa magna derita valies darta donna <br />
                      mare fermentum iaculis eu non diam <br />
                      phasellus.
                    </p>
                 
                </div>
              
          </div><br/>
          <div className="row">
            <div className="col-md-6">
            <h1>Meeting the Language</h1>
                    <p>
                      Cras fermentum odio eu feugiat lide <br />
                      par naso tierra. Justo eget nada terra <br />
                      videa magna derita valies darta donna <br />
                      mare fermentum iaculis eu non diam <br />
                      phasellus.
                    </p>
                 
                </div>
                <div className="col-md-6">
              <div className="card">
                
                  <img src="https://media.istockphoto.com/photos/close-up-on-employee-woman-finger-hand-holding-statement-report-and-picture-id1077145484?k=6&m=1077145484&s=612x612&w=0&h=nUh97tnxgOfbtVmRZSTpBhXpPcnynTJoyRY7NfM-Jhc=" alt="" width="550px" height="300px" ></img>
                  
                  </div>
                  </div>
            </div>
        </div>
      </div>
    )
  }
}
