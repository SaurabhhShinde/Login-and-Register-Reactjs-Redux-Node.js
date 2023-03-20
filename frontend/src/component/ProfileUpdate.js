import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../App.css";
import NavBar from "./NavBar";
import validator from "validator";


const ProfileUpdate = () =>{
    const {id} = useParams()

    useEffect(() => {
        console.log("id------",id)
        fetch(`http://localhost:9002/profiledata/${id}`).then((res) => {
            return res.json();
        }).then((resp) => {
            console.log("id---1---",id)
            console.log(resp);
            namechange(resp.name);
            emailchange(resp.email);
            dobchange(resp.dob);
            mobilenumchange(resp.mobilenum);
            countrychange(resp.country);
            statechange(resp.state);
            citychange(resp.city);
            passwordchange(resp.password);
           

        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[dob,dobchange]=useState("");
    const[mobilenum,mobilenumchange]=useState("");
    const[country,countrychange]=useState("");
    const[state,statechange]=useState("");
    const[city,citychange]=useState("");
    const[password,passwordchange]=useState("");
    

    const history = useHistory()

    const handlesubmit=(e)=>{
        e.preventDefault();
        const userdata={name,email,dob,mobilenum,country,state,city,password};
        
  
        fetch(`http://localhost:9002/Updatedata/${id}`,{
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(userdata)
        }).then((res)=>{
          alert('Saved successfully.')
          console.log(res);
          history.push('/profile');
        }).catch((err)=>{
          console.log(err.message)
        })
  
      }

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
            countrychange(e.target.value)
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
            statechange(e.target.value)
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

  
        //  validations


        // date validation
        const today = new Date().toISOString().slice(0, 10);

        //  password validation
        const [passwordError, setPasswordError] = useState("");
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


        const handlePasswordChange = (e) => {
            passwordchange(e.target.value);
            e.preventDefault();
            if (passwordRegex.test(password)) {
                // password is valid, proceed with submission
                setPasswordError("Password is valid");

            } else {
                // password is invalid, display error message
                setPasswordError("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character");
            }
          };
          
        // Username Validtion

        const [nameError, setnameError] = useState('');


        const UsernameHandler = e => {
            namechange(e.target.value)
            const regex = /^[a-zA-Z]*$/; // regex to allow only characters
            
            if (regex.test(e.target.value)) {
              setnameError("Valid Username");

            }else{
                setnameError("Use Only Characters");
            }
          }


        //   Email Validation
        const [emailError, setEmailError] = useState('');

        const EmailHandler = e => {
            emailchange(e.target.value)
            // email validation
            if (validator.isEmail(e.target.value)) {
                setEmailError('Valid Email :)')
            } else {
                setEmailError('Enter valid Email!')
            }


        }

        // Mobile Validation
        const [mobileError, setmobileError] = useState('');

        const MobilenumHandler = e => {
            mobilenumchange(e.target.value)
            //   mobile validations
            
            if (validator.isMobilePhone(e.target.value)) {
                setmobileError('Valid Mobile Number :)')
            } else {
                setmobileError('Enter valid Mobile Number!')
            }


        }












      return (

        <div>
            <NavBar/>
        <div className="App">
            
        <div className="register">  
      
            <h1 className="font">Profile Update</h1>
            <div className="col-lg-12">
                 <div className="form-group" >
                    <label className="fw-bold  label"  style={{paddingTop:"5px"}}>UserName:</label>
                    <input className="form-control" type="text" name="name" value={name}  placeholder="Your Name" onChange={UsernameHandler}></input>
                    {nameError && <div style={{color:"red"}}>{nameError}</div>}

                </div>
            </div>

            <div className="col-lg-12">
                 <div className="form-group" >
                    <label className="fw-bold  label"  style={{paddingTop:"5px"}}>Email:</label>
                    <input className="form-control" type="email" name="email" value={email}  placeholder="Your Email" onChange={EmailHandler}></input>
                    <span style={{fontWeight: 'bold',color: 'red'}}>{emailError}</span>
                   
                
                </div>
            </div>

            <div className="col-lg-12">
                 <div className="form-group" >
                    <label className="fw-bold  label"  style={{paddingTop:"5px"}}>Date of Birth:</label>
                    <input className="form-control" type="date" name="dob" value={dob}  placeholder="" max={today} onChange={e=>dobchange(e.target.value)}></input>
                </div>
            </div>

            <div className="col-lg-12">
                 <div className="form-group" >
                    <label className="fw-bold  label"  style={{paddingTop:"5px"}}>Mobile Number:</label>
                    <input className="form-control" type="number" name="mobilenum" value={mobilenum}  placeholder="Your Mobile Number" onChange={MobilenumHandler}></input>
                    <span style={{fontWeight: 'bold',color: 'red'}}>{mobileError}</span>
                </div>
            </div>
            <div className="row" style={{paddingTop:"5px"}}>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <label className="fw-bold  label" htmlFor="country">Country:</label>
                                                    <select className="form-control" id="country" name="country" value={country}  onChange={e=>countryHandler(e)}  >
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
                                                    <select className="form-control" id="state" name="state" value={state}  onChange={e=>stateHandler(e)} >
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
                                                    <select className="form-control" id="city" name="city" value={city} onChange={e=>citychange(e.target.value)}>
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
                    <input  className="form-control" type="password" name="password" value={password} placeholder="Your Password" onChange={handlePasswordChange}></input>
                    {passwordError && <div style={{color:"red"}}>{passwordError}</div>}
                </div>
            </div>
          
            <div className="button" onClick={handlesubmit} >Update</div>
        </div>
        </div>
        </div>
    )
}
export default ProfileUpdate;
