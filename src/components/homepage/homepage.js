import React from "react"
import Header from "../Header/Header"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div >
            <Header setLoginUser={setLoginUser}/>
            <h1>Hello Homepage</h1>
        </div>
    )
}

export default Homepage