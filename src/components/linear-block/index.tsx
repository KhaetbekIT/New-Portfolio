import React from 'react'
import "./linear-block.scss"
import { ILinearBlock } from '../../assets/interface/linear-block'

const LinearBlock: React.FC<ILinearBlock> = ({ className = "", size = 0 }) => {

    const style = {
        width: `${size * 0.063}rem`,
        height: `${size * 0.063}rem`,
    }

    return (
        <div className={`LinearBlock ${className}`} style={style}>

        </div>
    )
}

export default LinearBlock