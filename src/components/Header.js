import React from 'react'
import logo from "../images/logo.png"
import "../styles/header.css"
import {Link} from 'react-router-dom'


function Header() {
    return (       
        <div className="header">
            <div>
                <img src={logo} alt="PWC" />
            </div>

           <div>
            <ul className="navbar-list">
                <li className="nav-item">
                    <Link to="/">Home</Link> 
                </li>

                <li className="nav-item">
                    Blog
                </li>
                <li className="nav-item">
                    Pricing
                </li>
                <li className="nav-item"> 
                    contact
                </li>
                <li className="nav-item">
                    <span className="nav-btn"><Link to="/Signup">Sign up</Link> </span>
                </li>
            </ul>
        </div>
    
        </div>
      )
    }


export default Header
