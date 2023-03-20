// // // useEffect(()=>{
// // //     const getstate = async() => {
// // //     const resstate = await fetch(`http://localhost:9002/state/${countryid}`,{method:"GET"});
// // //     const ressts = await resstate.json();
// // //     setState(await ressts)
// // //     }
// // //     getstate();
// // // },[countryid]);

// // // const stateHandler = (e) => {
// // //     const {name, value } = e.target
// // //             setUser({
// // //                 ...user,
// // //                 [name]: value
// // //             })
// // //     const getstateid = e.target.value;
// // //     setstateid(getstateid);
// // // }



// // // useEffect(()=>{
// // //     const getcity = async() => {
// // //     const rescity = await fetch(`http://localhost:9002/city/${stateid}`,{method:"GET"});
// // //     const rescty = await rescity.json();
// // //     setCity(await rescty)
// // //     }
// // //     getcity();
// // // },[stateid]);


// // // const cityHandler = (e) => {
// // //     const {name, value } = e.target
// // //             setUser({
// // //                 ...user,
// // //                 [name]: value
// // //             })
// // //     const getcityid = e.target.value;
// // //     setcityid(getcityid);
// // // }


// // useEffect(()=>{
// //     const getcountry = async() => {
// //     const rescountry = await fetch('http://localhost:9002/country',{method:"GET"});
// //     const rescon = await rescountry.json();
// //     setCountry(await rescon)
// //     }
// //     getcountry();
// // },[]);


// // const countryHandler = (e) => {
// // const {name, value } = e.target
// //     setUser({
// //         ...user,
// //         [name]: value
// //     })
// // const getcountryid = e.target.value;
// // setcountryid(getcountryid);


// // }










// import React, { useEffect, useState } from "react"
// import "./register.css";
// import "../../App.css";
// import axios from "axios";
// import { Link, useHistory } from "react-router-dom";
// import WebFont from "webfontloader";
// import  validator  from "validator";



// const Register = () => {

//     const history = useHistory()

//     const [ user, setUser] = useState({
//         name: "",
//         email:"",
//         dob : "",
//         mobilenum:"",
//         country: "",
//         state:"",
//         city: "",
//         password:"",
//         reEnterPassword: ""
//     })

   
    


//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const register = () => {
//         const { name, email,dob, mobilenum, country, state, city, password, reEnterPassword } = user
//         if( name && email && dob && mobilenum && country && state && city && password && (password === reEnterPassword)){
//             axios.post("http://localhost:9002/signup", user)
//             .then( res => {
//                 alert(res.data.message)
//                 history.push("/login")
//             })
//         } else {
//             alert("invlid input")
//         }
        
//     }

//     useEffect(() => {
//         WebFont.load({
//           google: {
//             families: ['Droid Sans', 'Chilanka','Oswald']
//           }
//         });
//        }, []);


//         // validations
//         // const characterRegex = /^[A-Za-z]+$/;
//         const [emailError, setEmailError] = useState('');
//         const [mobileError, setmobileError] = useState('');
//         // const [date, setDate] = useState(null);


//         const UsernameHandler = e => {
//             const {name, value } = e.target
//             setUser({
//                 ...user,
//                 [name]: value
//             })

//             // // username validation
//             // if (value === '' || characterRegex.test(value)) {
//             //     setUser(value);
//             // }


//         }



//     const [passwordError, setPasswordError] = useState("");
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     const handlePasswordChange = (e) => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//         e.preventDefault();
//             if (passwordRegex.test(user)) {
//                 // password is valid, proceed with submission
//             } else {
//                 // password is invalid, display error message
//                 setPasswordError("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character");
//             }
//         };


//         const EmailHandler = e => {
//             const {name, value } = e.target
//             setUser({
//                 ...user,
//                 [name]: value
//             })

//             // email validation
//             if (validator.isEmail(value)) {
//                 setEmailError('Valid Email :)')
//             } else {
//                 setEmailError('Enter valid Email!')
//             }


//         }

//         const MobilenumHandler = e => {
//             const {name, value } = e.target
//             setUser({
//                 ...user,
//                 [name]: value
//             })

//             //   mobile validations
            
//             if (validator.isMobilePhone(value)) {
//                 setmobileError('Valid Mobile Number :)')
//             } else {
//                 setmobileError('Enter valid Mobile Number!')
//             }


//         }



//         // city state country
//         const [countries, setCountry] = useState([]);
//         const [countryid, setcountryid] = useState('')
//         const [states, setState] = useState([]);
//         const [stateid, setstateid] = useState('')
//         const [cities, setCity] = useState([]);
//         const [cityid, setcityid] = useState('')
        
        
        
        
//         // // country
//         useEffect(()=>{
//             const getcountry = async() => {
//             const rescountry = await fetch('http://localhost:9002/country',{method:"GET"});
//             const rescon = await rescountry.json();
//             setCountry(await rescon)
//             }
//             getcountry();
//         },[]);
        
       
// const countryHandler = (e) => {
//     const {name, value } = e.target
//             setUser({
//                 ...user,
//                 [name]: value
//             })
//    const getcountryid = e.target.value;
//    setcountryid(getcountryid);


// }

// // // state
// useEffect(()=>{
//     const getstate = async() => {
//     const resstate = await fetch(`http://localhost:9002/state/${countryid}`,{method:"GET"});
//     const ressts = await resstate.json();
//     setState(await ressts)
//     }
//     getstate();
// },[countryid]);

// const stateHandler = (e) => {
//     const {name, value } = e.target
//             setUser({
//                 ...user,
//                 [name]: value
//             })
//     const getstateid = e.target.value;
//     setstateid(getstateid);
// }



// // city
// useEffect(()=>{
//     const getcity = async() => {
//     const rescity = await fetch(`http://localhost:9002/city/${stateid}`,{method:"GET"});
//     const rescty = await rescity.json();
//     setCity(await rescty)
//     }
//     getcity();
// },[stateid]);


// const cityHandler = (e) => {
//     const {name, value } = e.target
//             setUser({
//                 ...user,
//                 [name]: value
//             })
//     const getcityid = e.target.value;
//     setcityid(getcityid);
// }











//     return (
//         <div className="App">
//         <div className="register">  
//             {console.log("User", user)}
//             <h1 className="font">Register</h1>
//             <div className="col-lg-12">
//                  <div className="form-group" >
//                     <label className="fw-bold  label"  style={{paddingTop:"5px"}}>UserName:</label>
//                     <input className="form-control" type="text" name="name" value={user.name} placeholder="Your Name" onChange={ UsernameHandler }/>
                    

//                 </div>
//             </div>

//             <div className="col-lg-12">
//                  <div className="form-group" >
//                     <label className="fw-bold  label"  style={{paddingTop:"5px"}}>Email:</label>
//                     <input className="form-control" type="email" name="email" value={user.email} placeholder="Your Email" onChange={ EmailHandler }></input>
//                     <span style={{fontWeight: 'bold',color: 'red'}}>{emailError}</span>
                
//                 </div>
//             </div>

//             <div className="col-lg-12">
//                  <div className="form-group" >
//                     <label className="fw-bold  label"  style={{paddingTop:"5px"}}>Date of Birth:</label>
//                     <input className="form-control" type="date" name="dob" value={user.dob} placeholder="" onChange={ handleChange }></input>
//                 </div>
//             </div>

//             <div className="col-lg-12">
//                  <div className="form-group" >
//                     <label className="fw-bold  label"  style={{paddingTop:"5px"}}>Mobile Number:</label>
//                     <input className="form-control" type="number" name="mobilenum" value={user.mobilenum} placeholder="Your Mobile Number" onChange={ MobilenumHandler }></input>
//                     <span style={{fontWeight: 'bold',color: 'red'}}>{mobileError}</span>
//                 </div>
//             </div>
//             <div className="row" style={{paddingTop:"5px"}}>
//                                             <div className="col-lg-4">
//                                                 <div className="form-group">
//                                                     <label className="fw-bold  label" htmlFor="country">Country:</label>
//                                                     <select className="form-control" id="country" name="country"  onChange={(e)=> countryHandler(e)} value={user.country} >
//                                                         <option>Select country</option>
//                                                         {countries.map((getcon, index) => (
//                                                         <option key={index} value={getcon.country_id}>{getcon.country_name}</option>
//                                                         ))}
                                                       
//                                                     </select>
                                                    
//                                                 </div>
//                                             </div>

//                                             <div className="col-lg-4">
//                                                 <div className="form-group">
//                                                     <label className="fw-bold  label" htmlFor="state">State:</label>
//                                                     <select className="form-control" id="state" name="state"  onChange={(e)=> stateHandler(e)} value={user.state} >
//                                                         <option>Select State</option>
//                                                         {states.map((getst, index) => (
//                                                         <option key={index} value={getst.state_id}>{getst.state_name}</option>
//                                                         ))}
                                                        
//                                                     </select>
                                                    
//                                                 </div>
//                                             </div>
                                        
//                                             <div className="col-lg-4">
//                                                 <div className="form-group">
//                                                     <label className="fw-bold  label">City:</label>
//                                                     <select className="form-control" id="city" name="city"  onChange={(e)=> cityHandler(e)} value={user.city}>
//                                                         <option>Select City</option>
//                                                         {cities.map((getct, index) => (
//                                                         <option key={index} value={getct.city_id}>{getct.city_name}</option>
//                                                         ))}
//                                                     </select>
                                                    
//                                                 </div>
//                                             </div>
//                                         </div>

            
//                 <div className="col-lg-12">
//                  <div className="form-group" >
//                     <label className="fw-bold  label"  style={{paddingTop:"5px"}}>Password:</label>
//                     <input  className="form-control" type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handlePasswordChange }></input>
//                     {passwordError && <div>{passwordError}</div>}
//                 </div>
//             </div>
//             <div className="col-lg-12">
//                  <div className="form-group" >
//                     <label className="fw-bold  label"  style={{paddingTop:"5px"}}>Re-enter Password:</label>
//                     <input className="form-control"  type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
//                 </div>
//             </div>
//             <div className="button" onClick={register} >Register</div>
//             <Link to="/login" className="fw-bold">If You have already registerd</Link>
//         </div>
//         </div>
//     )
// }

// export default Register;






// const [passwordError, setPasswordError] = useState("");
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     const handlePasswordChange = (e) => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//         e.preventDefault();
//             if (passwordRegex.test(user)) {
//                 // password is valid, proceed with submission
//             } else {
//                 // password is invalid, display error message
//                 setPasswordError("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character");
//             }
//         };









// const UsernameHandler = e => {
//     const {name, value } = e.target
//     setUser({
//         ...user,
//         [name]: value
//     })
//         const regex = /^[a-zA-Z]*$/; // regex to allow only characters
        
//         if (regex.test(value)) {
//           setUser(value);
//         }
      


// }
