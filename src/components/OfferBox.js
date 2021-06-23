import React from 'react'

export default function OfferBox({icon, title, info}) {
    return (
        <div className="offerBox">
                <img 
                src={icon} 
                alt={title}
                className="offerBox-img"
                />
        
                <h4 className="offerBox-title">{title}</h4>
                <p className="offerBox-info">{info}</p>
        </div>
    )
}
