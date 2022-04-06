import React from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom'




function Googlelogin({setLoginUser}) {
  const history=useHistory()
  const responseGoogle = (response)=>{
    // console.log(response);
    // console.log(response.profileObj);

    if(response.profileObj.email.endsWith('@tothenew.com'))
    {
      localStorage.setItem('email',response.profileObj.email)
      localStorage.setItem('Username',response.profileObj.name)
      localStorage.setItem('image',response.profileObj.imageUrl)
      setLoginUser({email:response.profileObj.email,password:''})

      alert("registration done");
      history.push("/")
    }
    else{
      alert("signin using tothenew official mail");
      history.push("/");
    }
  }
  return (
    <div><GoogleLogin
    clientId='84959396412-nel88m2p2uocim6i3131ooueopq8u5mf.apps.googleusercontent.com'
    buttonText='Google'
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    /></div>
  )
}

export default Googlelogin
