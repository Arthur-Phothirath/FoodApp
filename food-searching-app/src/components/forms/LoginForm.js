import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";


export default function LoginForm() {

    const [user, setUser] = useState({email: "" , password:""});
    const history = useHistory();


    const submitHandler = e => {
        e.preventDefault();
        console.log(user);
        Axios.post("http://localhost:1237/login", user)
        .then (response =>{console.log(response.data);
            if(response.data){
                history.push("/searchfood", response.data)
            }
        })
    }
    const handleChange = e =>{
        e.preventDefault();
        const {name, value} = e.target;
        setUser( {...user, [name]: value});

    }
    
    return <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2> Se connecter </h2>

                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input type="password" name="password" id="password" placeholder="Mot de passe" onChange={handleChange} />
                </div>
                <input type="submit" value="Login" />
                <Link to="/register" >Crée son compte</Link>
            </div>
        </form>
}

