import React, {useEffect, useState} from "react"
import "./login.css"
import axios from "axios"
import {useDispatch} from "react-redux"
import { Link, Redirect, useHistory } from "react-router-dom"
import "../../App.css"
import { login } from "../../Actions/userSlice"



const Login = ({ setLoginUser}) => {





    const dispatch = useDispatch()
   
    const history = useHistory()

    const [showPassword, setShowPassword] = useState(false);
    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const Login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            console.log(res.data.user._id);
            console.log(res.data.user.name);
            // setLoginUser(res.data.user)
            localStorage.setItem("users",JSON.stringify(res.data.user._id));
            dispatch(login({
                user:user,
                isLoggedIn:true
            }))
            // localStorage.setItem("UserPass",JSON.stringify(res.data.user.password));
            // history.push("/")
            
        
        })
    }

    
    

    const showPass = () =>{
        setShowPassword(!showPassword);
    }

    return (
        <div className="App">
        <div className="login">
            <h1 className="font">Login</h1>
            <div className="col-lg-12">
                 <div className="form-group" >
                    <label className="fw-bold  label"  style={{paddingTop:"5px"}}>Email:</label>
                    <input className="form-control" type="email" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
                </div>
            </div>

            <div className="col-lg-12">
                 <div className="form-group" >
                    <label className="fw-bold  label"  style={{paddingTop:"5px"}}>Password:</label>
                    <input  className="form-control" type={showPassword ? "text" : "password"} name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
                  <div style={{paddingTop:"5px"}}><Link style={{ textDecoration: 'none'}} onClick={showPass}>Show Password</Link></div>
                    
                   
                </div>
            </div>
            <div className="button" onClick={Login}>Login</div>
            {/* <div>or</div> */}
            {/* <div className="button" onClick={() => history.push("/register")}>Register</div> */}
            <Link to="/register" className="fw-bold" style={{fontFamily:"Droid Sans", textDecoration: 'none'}}>If You're Not Register</Link>
        </div>
        </div>
    )
}

export default Login;
