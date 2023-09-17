import React from 'react'
import { ITitle } from '../../assets/interface/title'
import "./heading.scss"

const Title: React.FC<ITitle> = ({ className = "", heading = "p", children = "children", ref }) => {
    switch (heading) {
        case "p":
            return <p className={className} ref={ref}> {children} </p>
        case "h1":
            return <h1 className={className} ref={ref}> {children} </h1>
        case "h2":
            return <h2 className={className} ref={ref}> {children} </h2>
        case "h3":
            return <h3 className={className} ref={ref}> {children} </h3>
        case "h4":
            return <h4 className={className} ref={ref}> {children} </h4>
        case "h5":
            return <h5 className={className} ref={ref}> {children} </h5>
        case "h6":
            return <h6 className={className} ref={ref}> {children} </h6>

        default:
            return <p className='subtitle' ref={ref}> {children} </p>
    }
}

export default Title