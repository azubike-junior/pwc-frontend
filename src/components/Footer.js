import React from 'react'
import logo from "../images/p-logo.png"
import twitter from "../images/twit-pic.png"
import youtube from "../images/youtube-pic.png"
import instagram from "../images/insta-pic.png"
import "../styles/footer.css"

function footer() {
    return (
        <div className="footer-container">
            <div className="footer-middle">
                <div className="footer-1">
                    <img src={logo} alt="" className="p-logo" />
                    <span>© Pertinence Group. 2021 <br/>
                        All rights reserved
                    </span>
                    <div className="social-media">
                        <div className="social">
                            <img src={instagram} alt=""  className=" social-image"/>
                        </div>
                        <div className="social">
                            <img src={twitter} alt=""  className=" social-image"/>
                        </div>
                        <div className="social">
                            <img src={youtube} alt=""  className=" social-image"/>
                        </div>
                        
                    </div>
                </div>
                <div className="footer-links">
                        <div className="footer">
                            <h1>Company</h1>
                            <h4>Pettysave</h4>
                            <h4>DataFirst</h4>
                            <h4>CloudNine</h4>
                            <h4>HostNowNow</h4>
                        </div>
                        <div className="footer">
                            <h1>Partners</h1>  
                            <h4>Pettysave</h4>
                            <h4>DataFirst</h4>
                            <h4>CloudNine</h4>
                            <h4>HostNowNow</h4>
                            <h4>Pertinence Properties</h4>
                            <h4>Homify</h4>
                            <h4>Realvest</h4>
                        </div>
                        <div className="footer">
                            <h1>Products</h1>
                            <h4>Earn</h4>
                            <h4>Learn</h4>
                            <h4>Launch</h4>
                            <h4>Invest</h4>
                            <h4>Save</h4>
                            <h4>Leverage</h4>
                        </div>
                        <div className="footer">
                            <h1>Contact us</h1>
                            <h4>mailto:hello@pertinencegroups.com"</h4>
                            <h4>08037272647</h4>
                            <h4>08037272647</h4>
                            <h4>08037272647</h4>
                        </div>    
                    </div>
                </div> 
        </div>
    )
}

export default footer

