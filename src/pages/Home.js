import React from 'react'
import Header from '../components/Header'
import Landing1 from '../components/Landing1'
import Landing4 from '../components/Landing4'
import LandingThree from '../components/LandingThree'
import LandingTwo from '../components/LandingTwo'
import Footer from '../components/Footer'
import Landing5 from '../components/Landing5'
import Newsletter from '../components/Newsletter'


export default function Home() {
    return (
        <div className="overflow-hidden">
            <Header/>
            <Landing1/>
            <LandingTwo/>
            <Landing4/>
            <Landing5/>
            <Newsletter/>
            <Footer/>  
        </div>
    )
}
 