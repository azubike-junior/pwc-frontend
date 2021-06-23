import React from 'react'
import OfferBox from './OfferBox'
import books from '../images/books.png';
import holdCash from '../images/holdCash.png'
import money from '../images/money.png'
import plane from '../images/plane.png'
import arrow from "../images/arrow.png"


export default function LandingTwo() {  
    return (
        <section>
            <div className="container">
                <div className="div-1">
                    <h3 className="offer-title">What we offer</h3>
                    <p>
                        Access resources to help you <span>earn </span>residual income, <span>invest</span> in the best portfolio possible, <span>market</span> your products and services to a wider reach and <span> maximize</span> your potential.
                    </p>
                    <p> 
                        All with the aid of a fast growing <span>Community</span>  and the Pertinence Network.
                    </p>
                    <p><span style={{marginRight: "2px"}}>Learn more</span> <img src={arrow} alt="pointer" /></p>
                </div>

                <div className="div-2">
                    <div className="offer-1">
                        <OfferBox icon={books} title="Learn" info="Explore our wide range of courses created by industry professionals"/>
                        <OfferBox icon={holdCash} title="Earn/Save/Invest" info="Access a full suite of resources to help scale up your finances"/>
                    </div>

                    <div className="offer-2">
                        <OfferBox icon={plane} title="Launch" info="Pertinence products are vastly available to kickstart your business"/>
                        <OfferBox icon={money} title="Leverage" info="Get the options to Leverage
                        on current Pertinence products to access loans and mortgages that you need."/>
                    </div>
                </div>
            </div>
        </section>
    )
} 
 