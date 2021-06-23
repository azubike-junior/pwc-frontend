import React from 'react'


export default function Button({className, link, children, classNames}) {
    return (
        <button style={className} className={classNames}>
            {children}
        </button>
    )
}