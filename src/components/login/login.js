import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Googlelogin from "./Googlelogin"


const Login = ({ setLoginUser }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                // alert(res.data.message)
                localStorage.setItem('Username',res.data.user.name);
                localStorage.setItem('email',user.email)
                setLoginUser(res.data.user)
                history.push("/")
            })
    }

    return (
        <div className="wrapper">
            <div className="login">
                <h1 className="loginhead">Login</h1>
                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
                <div className="button" onClick={login}>Login</div>
                <div>or</div>
                <div className="button" onClick={() => history.push("/register")}>Register</div>
                <div>or <br/>Login using Google</div><br/>
                <Googlelogin setLoginUser={setLoginUser}/>
            </div>
        </div>
    )
}

export default Login