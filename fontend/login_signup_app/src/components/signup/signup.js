import React, { useState } from "react";
import axios from "axios"
import "./signup.css";
import { useHistory } from "react-router-dom"

const Signup = () => {
    const history = useHistory()


    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword:"",
        phone:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const signup = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/signup", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invalid input")
        }
        
    }

    return (
        <div className="signup">
            {console.log("User", user)}
            <h1>Signup</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <input type="text" name="phone" value={user.phone} placeholder="Enter phone no." onChange={ handleChange }></input>
            <div className="btn" onClick={signup} >Signup</div>
            <div>or</div>
            <div className="btn" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}
export default Signup;