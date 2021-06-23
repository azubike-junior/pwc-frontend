import React from 'react'
import Sidebar, {routes} from '../components/Sidebar'
import {Link, useLocation} from "react-router-dom"
import Courses from '../components/Courses'
import Signup from "../pages/Signup"


export default function Layout({children}) {
    const location = useLocation()

    const route = routes.map((route) => route.links[0])
    console.log(route)

    return (
        <>
        <main className="min-h-screen w-full flex bg-white lg:bg-gray-bg overflow-hidden">
            {route.includes(location.pathname) ? (<Sidebar />) : "" }
            <div className="w-full mb-16">
                {children}
            </div>
        </main>
        </>
    )
}


