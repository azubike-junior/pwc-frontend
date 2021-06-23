import React from 'react'
import PricingBox from './PricingBox'
import lock from '../images/lock.png'

export default function LandingThree() {
    return (
        <section className="pricing-section">
            <div className="container-2">
                <h2 className="pricing-header">Pricing Plans</h2>

                <div className="pricing-plans">
                    <div className="plans">
                        <PricingBox icon={lock} title="Free" text="Some explanation about the features accessible on the free plan"/>
                        <PricingBox icon={lock} title="Basic; #30,000" text="Some explanation about the features accessible on the free plan"/>
                    </div>
                    <div className="plans">
                        <PricingBox icon={lock} title="Premium; #75,000" text="Some explanation about the features accessible on the free plan"/>
                        <PricingBox icon={lock} title="gold; #100,000" text="Some explanation about the features accessible on the free plan"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
