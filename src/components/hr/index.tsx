import React from 'react'
import { IHr } from '../../assets/interface/hr'
import Style from "./hr.module.scss"

const Hr: React.FC<IHr> = ({className = ""}) => {
    return <hr className={`${Style.Hr} ${className}`} />
}

export default Hr