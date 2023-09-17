import React from 'react'
import { IUrl } from '../../assets/interface/url'
import "./url.scss"

const Url: React.FC<IUrl> = ({ to, target, download, children, className = "" }) => {
    return (

        <a href={to} target={target} download={download} className={`Url ${className}`}>
            {
                children
            }
        </a>
    )
}

export default Url