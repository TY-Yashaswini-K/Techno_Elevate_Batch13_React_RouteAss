import React, { Component } from 'react';

import Navigation from '../navigation/Navigation';
import Navigation2 from '../navigation/Navigation2';
// import Navigation2 from '../navigation/Navigation2';

export default class Employee extends Component {
    render() {
      var path = window.location.pathname;
      path = path.substr(1, 4);
      console.log(path);
        return (
     <div>
       {/* {path === "abc" ? <Navigation2/> : } */}
       <Navigation/> 
       {/* <Navigation2/> */}
        <h1>Welcome to Employee Portal </h1>
     </div>


        )
    }
}
