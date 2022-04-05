import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import { RiMessengerLine } from 'react-icons/ri';
import {TiUserAddOutline} from 'react-icons/ti'
import {CgLogOff} from 'react-icons/cg'


function Header({setLoginUser}) {
  const userName=localStorage.getItem("Username")
  console.log(userName)
  function setDataLocal(){
    setLoginUser({});
    localStorage.setItem('email','');
  }
  return (
    <nav>
        <div className="left">
            <img className="logo"
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1473843963/cdy69xpmmkjntymhbxpa.png"
                alt="" style={{width:"80px",height:"80px"}}/>
        </div>
        <div className="right">
            <ul className="rightComp beforeHide">
                <li><Link><img className="avtarLogo" src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/12/10/16391545485537.jpg" alt="Avatar"/></Link></li>
                <li className="AccountHolderName" style={{width:"auto"}}>{userName}</li>
                <li><Link><RiMessengerLine style={{width:"40px",height:"40px",color:"black"}}/></Link></li>
                <li><Link><TiUserAddOutline style={{width:"40px",height:"40px",color:"black"}}/></Link></li>
                <li><button className='logout' onClick={()=>setDataLocal()}><Link><CgLogOff style={{width:"40px",height:"40px",color:"black"}}/></Link></button></li>
                
            </ul>
            <div className="afterHide">
            <Link><img className="messenger" src="./menu.png" alt=""/></Link>
            </div>
        </div>
    </nav>
  )
}

export default Header