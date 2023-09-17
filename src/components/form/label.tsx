import React from 'react'
import "./label.scss"
import { IForm } from '../../assets/interface/form'

const Label: React.FC<IForm> = ({ type = 'input', title = "Name", inputRef, textareaRef }) => {

    return type === 'input' ? (
        <React.Fragment>
            <div className='Label__warpper'>
                <label className='Label'>
                    <input type="text" className='Input' ref={inputRef} />
                    <span className='Label__text'> {title} </span>
                </label>
            </div>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <div className='Label__warpper'>
                <label className='Label'>
                    <textarea className='Input Textarea' ref={textareaRef}></textarea>
                    <span className='Label__text'> {title} </span>
                </label>
            </div>
        </React.Fragment>
    )
}

export default Label