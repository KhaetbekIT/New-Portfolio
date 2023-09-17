import React from 'react'
import { IParallaxItem } from '../../../assets/interface/parallax'
import "./parallax-item.scss"

const ParallaxItem: React.FC<IParallaxItem> = ({ children, parallaxPosition = 0, className = "" }) => {
  return (
    <React.Fragment>
      <div data-parallax-tsx={parallaxPosition} className={`Parallax__item ${className}`}>
        {
          children
        }
      </div>
    </React.Fragment>
  )
}

export default ParallaxItem