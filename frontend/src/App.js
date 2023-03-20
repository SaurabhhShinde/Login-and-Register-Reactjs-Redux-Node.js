
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProfileUpdate from "./components/ProfileUpdate";
import Profile from "./components/ShowProfile";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./Actions/userSlice";






function App() {
  const user = useSelector(selectUser);

 
  // const [ user, setLoginUser] = useState({})
  return (
 
   
      <Router>
        <Switch>
          <Route exact path="/">
         {
          user && user ? <Homepage/> : <Login/>
         }

          </Route>
         
          <Route exact path="/login">
            <Login  />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/profile">
           <Profile />
          </Route>
          <Route exact path="/update/:id">
           <ProfileUpdate/>
          </Route>
        </Switch>
      </Router>
    
   
  );
}

export default App;
