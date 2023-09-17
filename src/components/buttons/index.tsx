import React from 'react'
import "./button.scss"
import { IButton } from '../../assets/interface/button'

const Button: React.FC<IButton> = ({ className = "", children, type = false, onClick, buttonType = "submit" }) => {
    return type ? (
        <React.Fragment>
            <button type={buttonType} className={`Button Button--primary ${className}`}
                onClick={onClick}
            >
                {
                    children
                }
            </button>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <button className={`Button ${className}`} onClick={onClick}>
                {
                    children
                }
            </button>
        </React.Fragment>
    )
}

export default Button