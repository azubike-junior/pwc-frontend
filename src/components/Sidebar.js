import React from 'react'
import {useLocation, Link} from "react-router-dom"
import dashboardIcon from '../images/dash-icon.png'
import courseIcon from '../images/course-icon.png'
import marketIcon from '../images/market-icon.png'
import walletIcon from '../images/course-icon.png'
import settingIcon from '../images/course-icon.png'
import {classNames} from "../utils/classNames"
import Logo from '../components/Logo'

export const routes = [
        {
            icon: dashboardIcon,
            title: 'Dashboard',
            links: ['/dashboard']
        },
         {
            icon: courseIcon,
            title: 'Courses',
            links: ['/courses']
        },
         {
            icon: marketIcon,
            title: 'Market',
            links: ['/market']
        },
         {
            icon: walletIcon,
            title: 'Wallet',
            links: ['/wallet']
        },
         {
            icon: settingIcon,
            title: 'Setting',
            links: ['/setting']
        }
    ]

export default function Sidebar() {
    const location = useLocation();

    return (
        <div className="lg:flex flex-col w-2/12 min-w-160 text-white bg-darker-green">
            <div className="mt-20">
                {routes.map((route) => (
                <Link to={route.links[0]} key={route.title}>
                <div className={classNames(
                    route.links.includes(location.pathname) && 'bg-opacity-3 bg-gray-white border-l-4 rounded-l-full overflow-y-hidden',
                    `flex items-center pl-4 desktop:pl-8 w-full ml-4 py-6 cursor-pointer
                    hover:bg-lighter-gray hover:bg-opacity-5 border-l-4 border-transparent hover:border-lighter-blue`
                )}>
                    <img src={route.icon}  alt={route.title} className="h-6 w-7 ml-4 mr-6" />
                    <span className="text-white text-sm">{route.title}</span>
                    </div>
                </Link>
            ))}     
            </div>
                
        </div>
    )
}
