import React from "react"
import Header from "../Header/Header"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    function setDataLocal(){
        setLoginUser({});
        localStorage.setItem('email','');
    }
    const email=localStorage.getItem('email')
    console.log(email);
    return (
        <div >
            <Header/>
            <h1>Hello Homepage</h1>
            <button className="btn" onClick={() => setDataLocal()}>LogOut</button>
        </div>
    )
}

export default Homepage