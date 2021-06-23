import React from 'react'
import "../styles/landing5.css"
import data from "../images/data.png"
import cloud from "../images/cloud.png"
import host from "../images/host.png"
import pertp from "../images/pertp.png"
import petty from "../images/petty.png"
import real from "../images/real.png"
import circle from "../images/Group.png"


function landing5() {
    return (
        <div className="partners-container mt-10 mb-20">
        <img src={circle} alt="" className="circle-s" />
            <span className="heading pb-28">Partners</span>
            <div className="flex items-center justify-center mt-10 pb-4">
                <img src={real} alt="" className="logo"/> 
                <img src={pertp} alt="" className="logo"/>
                <img src={host} alt="" className="logo"/>
            </div>
            <div className="flex items-center justify-center mt-10 ">
                <img src={cloud} alt="" className="logo" />
                <img src={data} alt="" className="logo" />
                <img src={petty} alt="" className="logo"/>
            </div>
        </div>
    )
}

export default landing5
