import Axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";


export default function RegisterForm() {

    const [user, setUser] = useState({name: "" ,email: "" , password:""});
    const history = useHistory();
    const [msg , setMsg] = useState ("")

    const submitHandler = e => {
        e.preventDefault();
        console.log(user);
        Axios.post("http://localhost:1237/register", user)
        .then (response =>{console.log(response.data);
            if( response.data == true){
                history.push("/")
            } else{
              setMsg("Une erreure est survenue.")
            }
        })
    }
    const handleChange = e =>{
        e.preventDefault();
        const {name, value} = e.target;
        setUser( {...user, [name]: value});
    }

    
    return <form method="POST" onSubmit={submitHandler}>
            <div className="form-inner">
                <h2> S'inscrire </h2>
                {/* {(error !=="")? (<div className="error">{error}</div>) : ""} */}

                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input type="name" name="name" id="name" placeholder="Nom d'utilisateur" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input type="password" name="password" id="password" placeholder="Mot de passe" onChange={handleChange} />
                </div>
                <input type="submit" value="S'inscrire"/>
                <Link to="/" >Se connecter</Link>
                <p className="msgErreur">{msg}</p>

            </div>
        </form>
    
}
