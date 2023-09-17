import React from 'react'
import { ILogo } from '../../assets/interface/logo'
import Style from "./logo.module.scss";
import { Link } from 'react-router-dom';

const Logo: React.FC<ILogo> = ({ className = "", children }) => {
    return (
        <React.Fragment>
            <Link to={"/"} className='Url'>
                <div className={`${Style.Logo} ${className}`}>
                    {
                        children
                    }
                </div>
            </Link>
        </React.Fragment>
    )
}

export default Logo