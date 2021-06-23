import React from 'react'
import "../styles/newsletter.css"

function newsletter() {
    return (
        <div className="newsletter-main">
            <div>
                <h1 className="newsletter-heading">Sign up to Our Newsletter</h1>
            </div>
            <div className="newsletter-input">
                <input 
                    type="text"             
                    placeholder="Email Address"
                    />
                <button type="submit">Submit</button>
            </div>
        </div>
    )
}

export default newsletter
