
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Employee from './components/reactrouting/employee/Employee';
import Login from './components/reactrouting/login/Login';

import Home from './components/reactrouting/home/Home';
import EmployeeList from './components/reactrouting/employeelist/EmployeeList';
import EmployeeDetails from './components/reactrouting/employeeDetails/EmployeeDetails';
import Logout from './components/reactrouting/logout/Logout';
import Success from './components/reactrouting/success/Success';
import Home1 from './components/reactrouting/home/Home1';


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
    <Route path="/abc" component={Employee}></Route>
    <Route exact path="/" component={Employee}></Route>    
  <Route exact path="/def" component={Employee}></Route>
  <Route path="/Home" component={Home}></Route>
  <Route path="/login" component={Login}></Route>
  <Route path="/Home1" component={Home1}></Route>
  <Route exact path="/EmployeeList" component={EmployeeList}></Route>
  <Route path="/EmployeeDetails" component={EmployeeDetails}></Route>
  <Route path="/logout" component={Logout}></Route>
  <Route path="/success" component={Success}></Route>
  
  
  </Switch>

  </div>
  </Router>
  );
}

export default App;
