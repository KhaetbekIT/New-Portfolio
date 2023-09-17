import React from 'react'
import "./image.scss"
import { IImage } from '../../assets/interface/image'

const Image: React.FC<IImage> = ({ className = '', src, srcSet, depth, style }) => {
    return (
        <div className={`Image ${className}`} data-depth={depth} style={style}>
            <picture>
                <source srcSet={srcSet} type={'image/webp'} />
                <img src={src} alt="error" />
            </picture>
        </div>
    )
}

export default Image