import React from 'react'

export default function PricingBox({icon, title, text}) {
    return (
        <div className="pricing-box">
            <img src={icon} alt={title} className="pricing-img"/>
            <h4 className="pricing-title">{title}</h4>
            <p className="pricing-text">{text}</p>
        </div>
    )
}
