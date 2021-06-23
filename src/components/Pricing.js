import React from 'react'
import "../styles/pricing.css"
import cloud from "../images/cloud.png"
import pertp from "../images/pertp.png"
import petty from "../images/petty.png"
import real from "../images/real.png"
import host from "../images/host.png"
import data from "../images/data.png"

function pricing() {
    return (
        <div className="pricename-content">
            <h1 className="pricename-header">Partners</h1>
            
            <div className="pricing-logo">
                <div className="grid-item"><img src={real} alt="" /></div>
                <div className="grid-item"><img src={pertp} alt="" /></div>
                <div className="grid-item"><img src={host} alt="" /></div>
                <div className="grid-item"><img src={cloud} alt="" /></div>
                <div className="grid-item"><img src={data} alt="" /></div>
                <div className="grid-item"><img src={petty} alt="" /></div>
            </div>
           
        </div>
    )
}

export default pricing
