import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useHistory } from "react-router-dom";
import {useDispatch} from "react-redux"
import { logout } from "../Actions/userSlice";



const NavBar = () => {
const dispatch = useDispatch()
const history = useHistory()


const handleLogout = (e) => {
  e.preventDefault();
  localStorage.removeItem("Users");
  localStorage.removeItem("UserPass");
  localStorage.removeItem('userLog')
  // setLoginUser({})
  history.push("/");
  dispatch(logout()); 
};

return(
  <nav className="navbar navbar-expand-lg navbar-light bg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink exact to="/" className="nav-link" activeClassName="active" >Home</NavLink>
        </li>
        <li style={{paddingTop:"3px"}}>
        <button className="btn" onClick={() => history.push("/profile")} href="#">Profile</button>
        </li>
        <li style={{paddingTop:"3px"}}>
        <button className="btn" onClick={handleLogout} href="#">LogOut</button>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
)
}
export default NavBar;

