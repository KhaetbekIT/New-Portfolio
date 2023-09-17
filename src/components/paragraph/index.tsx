import React from 'react'
import "./paragraph.scss"

type ParagraphType = {
    className?: string | undefined;
    children: React.ReactNode | undefined;
}

const Paragraph: React.FC<ParagraphType> = ({className = "", children}) => {
    return (
        <p className={`Paragraph ${className}`}>
            {
                children
            }
        </p>
    )
}

export default Paragraph