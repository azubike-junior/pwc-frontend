import React from 'react';
import { classNames } from '../utils/classNames';
import logo from '../images/logo.png'

const Logo = ({ theme = "Dark" | "Light", className = "" }) => {

    const textTheme = `${theme === 'Dark' ? 'text-secondary-blue' : "text-blueish-gray"}
                        ml-3 font-semibold text-xl`

    return (
        <div className={classNames(className && className, "flex items-center")}>
            <img src={logo} alt=""/>
        </div>
    )
}

export default Logo