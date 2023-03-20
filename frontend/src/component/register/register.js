import React, { useEffect, useState } from "react"
import "./register.css";
import "../../App.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import WebFont from "webfontloader";
import  validator  from "validator";



const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        dob : "",
        mobilenum:"",
        country: "",
        state:"",
        city: "",
        password:"",
        reEnterPassword: ""
    })

   
    


    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email,dob, mobilenum, country, state, city, password, reEnterPassword } = user
        if( name && email && dob && mobilenum && country && state && city && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/signup", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Droid Sans', 'Chilanka','Oswald']
          }
        });
       }, []);



















        // validations
        
        const [emailError, setEmailError] = useState('');
        const [mobileError, setmobileError] = useState('');
        const [nameError, setnameError] = useState('');
        



        const UsernameHandler = e => {
            const {name, value } = e.target;
            const regex = /^[a-zA-Z]*$/; // regex to allow only characters
            
            if (regex.test(value)) {
              setUser({
                ...user,
                [name]: value
              });
              setnameError("Valid Username");

            }else{
                setnameError("Use Only Characters");
            }
          }
          


// password validations
    
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            const [errorMessage, setErrorMessage] = useState("");

            const handlePasswordChange = (e) => {   
            const { name, value } = e.target;
            setUser({
                ...user,
                [name]: value
            });
            e.preventDefault();
            if (passwordRegex.test(value)) {
                // password is valid, proceed with submission
                setErrorMessage("Valid PassWord");
            } else {
                // password is invalid, display error message
                setErrorMessage("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character");
            }
            };



        const EmailHandler = e => {
            const {name, value } = e.target
            setUser({
                ...user,
                [name]: value
            })

            // email validation
            if (validator.isEmail(value)) {
                setEmailError('Valid Email :)')
            } else {
                setEmailError('Enter valid Email!')
            }


        }

        const MobilenumHandler = e => {
            const {name, value } = e.target
            setUser({
                ...user,
                [name]: value
            })

            //   mobile validations
            
            if (validator.isMobilePhone(value)) {
                setmobileError('Valid Mobile Number :)')
            } else {
                setmobileError('Enter valid Mobile Number!')
            }


        }

        // validation on Date

        const today = new Date().toISOString().slice(0, 10);













        // city state country
        const [countries, setCountries] = useState([]);
        const [selectedCountry, setSelectedCountry] = useState('')
        const [states, setStates] = useState([]);
        const [selectedState, setSelectedState] = useState('')
        const [cities, setCities] = useState([]);
      
        
        useEffect(() => {
            // Fetch list of countries from API
            axios.get('http://localhost:9002/country')
              .then(res => {
                setCountries(res.data);
              })
              .catch(err => {
                console.log(err);
              });
          }, []);
        
          const countryHandler= e => {
            const {name, value } = e.target
            setUser({
                ...user,
                [name]: value
            })
            const selectedCountryId = e.target.value;
            setSelectedCountry(selectedCountryId);
        
            // Fetch list of states based on selected country from API
            axios.get(`http://localhost:9002/state/${selectedCountryId}`)
              .then(res => {
                setStates(res.data);
              })
              .catch(err => {
                console.log(err);
              });
          };
        
          const stateHandler = e => {
            const {name, value } = e.target
            setUser({
                ...user,
                [name]: value
            })
            const selectedStateId = e.target.value;
            setSelectedState(selectedStateId);
        
            // Fetch list of cities based on selected state from API
            axios.get(`http://localhost:9002/city/${selectedStateId}`)
              .then(res => {
                setCities(res.data);
              })
              .catch(err => {
                console.log(err);
              });
          };














        
        
        










    return (
        <div className="App">
        <div className="register">  
            {console.log("User", user)}
            <h1 className="font">Register</h1>
            <div className="col-lg-12">
                 <div className="form-group" >
                    <label className="fw-bold  label"  style={{paddingTop:"5px"}}>UserName:</label>
                    <input className="form-control" type="text" name="name" value={user.name} placeholder="Your Name" onChange={ UsernameHandler }/>
                    {nameError && <div style={{color:"red"}}>{nameError}</div>}
                    

                </div>
            </div>

            <div className="col-lg-12">
                 <div className="form-group" >
                    <label className="fw-bold  label"  style={{paddingTop:"5px"}}>Email:</label>
                    <input className="form-control" type="email" name="email" value={user.email} placeholder="Your Email" onChange={ EmailHandler }></input>
                    <span style={{fontWeight: 'bold',color: 'red'}}>{emailError}</span>
                
                </div>
            </div>

            <div className="col-lg-12">
                 <div className="form-group" >
                    <label className="fw-bold  label"  style={{paddingTop:"5px"}}>Date of Birth:</label>
                    <input className="form-control" type="date" name="dob" value={user.dob} placeholder="" max={today} onChange={ handleChange }></input>
                </div>
            </div>

            <div className="col-lg-12">
                 <div className="form-group" >
                    <label className="fw-bold  label"  style={{paddingTop:"5px"}}>Mobile Number:</label>
                    <input className="form-control" type="number" name="mobilenum" value={user.mobilenum} placeholder="Your Mobile Number" onChange={ MobilenumHandler }></input>
                    <span style={{fontWeight: 'bold',color: 'red'}}>{mobileError}</span>
                </div>
            </div>
            <div className="row" style={{paddingTop:"5px"}}>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label className="fw-bold  label" htmlFor="country">Country:</label>
                                                    <select className="form-control" id="country" name="country"  onChange={(e)=> countryHandler(e)} value={user.country} >
                                                        <option>Select country</option>
                                                        {countries.map((getcon, index) => (
                                                        <option key={index} value={getcon.country_id}>{getcon.country_name}</option>
                                                        ))}
                                                       
                                                    </select>
                                                    
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label className="fw-bold  label" htmlFor="state">State:</label>
                                                    <select className="form-control" id="state" name="state"  onChange={(e)=> stateHandler(e)} value={user.state} >
                                                        <option>Select State</option>
                                                        {states.map((getst, index) => (
                                                        <option key={index} value={getst.state_id}>{getst.state_name}</option>
                                                        ))}
                                                        
                                                    </select>
                                                    
                                                </div>
                                            </div>
                                        
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label className="fw-bold  label">City:</label>
                                                    <select className="form-control" id="city" name="city"  onChange={handleChange} value={user.city}>
                                                        <option>Select City</option>
                                                        {cities.map((getct, index) => (
                                                        <option key={index} value={getct.city_id}>{getct.city_name}</option>
                                                        ))}
                                                    </select>
                                                    
                                                </div>
                                            </div>
                                        </div>

            
                <div className="col-lg-12">
                 <div className="form-group" >
                    <label className="fw-bold  label"  style={{paddingTop:"5px"}}>Password:</label>
                    <input  className="form-control" type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handlePasswordChange }></input>
                    {errorMessage && <div style={{color:"red"}}>{errorMessage}</div>}
                </div>
            </div>
            <div className="col-lg-12">
                 <div className="form-group" >
                    <label className="fw-bold  label"  style={{paddingTop:"5px"}}>Re-enter Password:</label>
                    <input className="form-control"  type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
                </div>
            </div>
            <div className="button" onClick={register} >Register</div>
            <Link to="/login" style={{textDecoration: 'none'}} className="fw-bold">If You have already registerd</Link>
        </div>
        </div>
    )
}

export default Register;
