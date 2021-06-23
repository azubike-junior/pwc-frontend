import React from 'react'
import image1 from "../images/landing1.png"
import "../styles/landing1.css"
import Button from './Button'

function landing1() {
    return (
        <div className="landing">
            <div className="landing-content">
                <p className="landing-p">
                    Community, People, Wealth
                </p>  
                <h2 className="landing-head">
                    Pertinence Wealth Community
                </h2>
                <p className="landing-para2">
                    Community-based product that provides you with the 
                    resources to earn, connect with thousands of community members, and access a full range of services and resources 
                    to help you maximize your wealth
                </p>  
                <Button children="Get Started" className={className}/>
            </div>

            <div className="landing1-img">
                <img src={image1} alt=""  />
            </div>

        </div>
    )
}

const className = {
    backgroundColor: '#6EB751',
    color:' #fff',
    width: '180px',
    height: '60px',
    fontFamily: "Poppins",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '30px',
    textAlign: 'center',
    outline: 'none',
    border:'none',
    borderRadius: '10px'
}

export default landing1
