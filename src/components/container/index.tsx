import React from 'react'
import { IContainer } from '../../assets/interface/container'
import "./container.scss"

const Container: React.FC<IContainer> = ({ className = "", children, xl, lg, md, sm }) => {

  const isClassNames = `
    ${xl ? "Container--xl" : ""}
    ${lg ? "Container--lg" : ""}
    ${md ? "Container--md" : ""}
    ${sm ? "Container--sm" : ""}
    ${className}
  `

  return (
    <div className={
      `Container ${isClassNames}`
    }>

      {
        children
      }

    </div>
  )
}

export default Container