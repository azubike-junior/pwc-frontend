import React from 'react'
import "../styles/landing4.css"
import school from "../images/School.png"
import group from "../images/Group.png"
import group2 from "../images/Group2.png"
import Button from "./Button"      

function landing4() {
    return (
        <div className="landing4-main">
            <div className="landing4-pics">
                <img src={school} alt="" className="landing4-img"/>
                <img src={group2} alt="" className="landing4-image"/>
            </div>
            <div className="landing4-content">
                <img src={group} alt="" className="absolute" />
                <h2 className="landing4-para1">    
                Access to <span className="landing4-span">Community</span>    
                </h2>
                <p className="landing4-para2">Become a part of the biggest wealth community providing members with learning resources on building  <span className="landing4-span"> WEALTH.</span> 
                 </p>
                 <p className="landing4-para3">   
                    You can also earn residual income by getting a 
                    <span  className="landing4-span"> referral link
                    </span> and <span  className="landing4-span"> referring others </span>to sign up and buy products from this platform 
                 </p> 
                 <div className="landing4-buttons">
                    <Button children="Start Learning" className={btnClass}/>  <br />
                     <Button children="Get Refferal link" className={btnClass2} />  
                </div>         
            </div>
        </div>
    ) 
}

const btnClass = {
    backgroundColor: 'var(--maingreen)',
    color:' #fff',
    width: '250px',
    height: '70px',
    fontFamily: "Poppins",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '30px',
    textAlign: 'center',
    outline: 'none',
    border:'none',
    borderRadius: '10px',
    marginBottom: '1rem',
}

const btnClass2 = {
    background:'rgba(110, 183, 81, 0.1)',
    color:'var(--maingreen)',
    width: '250px',
    height: '70px',
    fontFamily: "Poppins",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '30px',
    textAlign: 'center',
    outline: 'none',
    border:'0.1rem solid',
    borderRadius: '10px'
}

export default landing4 
 