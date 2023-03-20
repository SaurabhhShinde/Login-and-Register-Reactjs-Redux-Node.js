

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import "./ShowProfile.css";



const Profile = ({setLoginUser}) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [dob, setDob] = useState();
    const [mobilenum, setMobilenum] = useState();
    const [country, setCountry] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const user = localStorage.getItem('users');
    const id = JSON.parse(user);


    useEffect(async () => {
        try {
            console.log(id)
           
          if (id) {
            const response = await fetch(`http://localhost:9002/profiledata/${id}`);
            // const response = await fetch(`http://localhost:9002/signup`,{method:"POST",headers:{'Content-type':'application/json'},body:JSON.stringify({id:id})});

            const result = await response.json();
            const { name, email, dob, mobilenum, country, state, city } = result;
            setName(name);
            setEmail(email);
            setDob(dob);
            setMobilenum(mobilenum);
            setCountry(country);
            setState(state);
            setCity(city);
          }
        } catch (error) {
          console.error(error);
        }
      }, [id]);
      

    return(
        <div>
            <NavBar/>
        
    <div className="container" style={{paddingTop:"150px"}}>
        <div className="row">
            <div className="col-md-7 mx-auto">
                <div className="card shadow" style={{backgroundImage:"linear-gradient(to top, #9aacd3fa 0%, #68a9d7 100%)"}}>
                    <div className="card-body">
                        <div className="card-title md-4">
                           <h1 style={{textAlign:"center"}}> User Information </h1>
                            </div>
                        <div className="row">
                            <div className="col-md-3">
                                <h4 className="card-subtitle mb-2">UserName:</h4>
                            </div>
                            <div className="col-md-9">
                                <p className="card-text p">{name}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <h4 className="card-subtitle mb-2">Email:</h4>
                            </div>
                            <div className="col-md-9">
                                <p className="card-text p">{email}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <h4 className="card-subtitle mb-2">Mobile Number:</h4>
                            </div>
                            <div className="col-md-9">
                                <p className="card-text p">{mobilenum}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <h4 className="card-subtitle mb-2">Date of Birth:</h4>
                            </div>
                            <div className="col-md-9">
                                <p className="card-text p">{dob}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <h4 className="card-subtitle mb-2">Location:</h4>
                            </div>
                            <div className="col-md-9">
                                <p className="card-text p">{city},{state},{country}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <Link to={'/update/'+id}><button className="btn btn-primary">Edit Information</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}
export default Profile;


// const Profile = ( ) =>{
//     return(
//         <h1>Profile</h1>
//     )
// }
// export default Profile;