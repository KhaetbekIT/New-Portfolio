import React from 'react'
import { IDots } from '../../assets/interface/dots'

const Dots: React.FC<IDots> = ({ dots = false, className = "" }) => {
    return dots ? (
        <React.Fragment>
            <span className={`Dots Dots__small ${className}`}>
                <svg width="221" height="221" viewBox="0 0 221 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <circle cx="2" cy="2" r="2" fill="#ABB2BF" />
                        <circle cx="56.25" cy="2" r="2" fill="#ABB2BF" />
                        <circle cx="110.5" cy="2" r="2" fill="#ABB2BF" />
                        <circle cx="164.75" cy="2" r="2" fill="#ABB2BF" />
                        <circle cx="219" cy="2" r="2" fill="#ABB2BF" />
                        <circle cx="2" cy="56.25" r="2" fill="#ABB2BF" />
                        <circle cx="56.25" cy="56.25" r="2" fill="#ABB2BF" />
                        <circle cx="110.5" cy="56.25" r="2" fill="#ABB2BF" />
                        <circle cx="164.75" cy="56.25" r="2" fill="#ABB2BF" />
                        <circle cx="219" cy="56.25" r="2" fill="#ABB2BF" />
                        <circle cx="2" cy="110.5" r="2" fill="#ABB2BF" />
                        <circle cx="56.25" cy="110.5" r="2" fill="#ABB2BF" />
                        <circle cx="110.5" cy="110.5" r="2" fill="#ABB2BF" />
                        <circle cx="164.75" cy="110.5" r="2" fill="#ABB2BF" />
                        <circle cx="219" cy="110.5" r="2" fill="#ABB2BF" />
                        <circle cx="2" cy="164.75" r="2" fill="#ABB2BF" />
                        <circle cx="56.25" cy="164.75" r="2" fill="#ABB2BF" />
                        <circle cx="110.5" cy="164.75" r="2" fill="#ABB2BF" />
                        <circle cx="164.75" cy="164.75" r="2" fill="#ABB2BF" />
                        <circle cx="219" cy="164.75" r="2" fill="#ABB2BF" />
                        <circle cx="2" cy="219" r="2" fill="#ABB2BF" />
                        <circle cx="56.25" cy="219" r="2" fill="#ABB2BF" />
                        <circle cx="110.5" cy="219" r="2" fill="#ABB2BF" />
                        <circle cx="164.75" cy="219" r="2" fill="#ABB2BF" />
                        <circle cx="219" cy="219" r="2" fill="#ABB2BF" />
                    </g>
                </svg>
            </span>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <span className={`Dots Dots__big ${className}`}>
                <svg width="111" height="111" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <circle cx="2" cy="2" r="2" fill="#ABB2BF" />
                        <circle cx="28.75" cy="2" r="2" fill="#ABB2BF" />
                        <circle cx="55.5" cy="2" r="2" fill="#ABB2BF" />
                        <circle cx="82.25" cy="2" r="2" fill="#ABB2BF" />
                        <circle cx="109" cy="2" r="2" fill="#ABB2BF" />
                        <circle cx="2" cy="28.75" r="2" fill="#ABB2BF" />
                        <circle cx="28.75" cy="28.75" r="2" fill="#ABB2BF" />
                        <circle cx="55.5" cy="28.75" r="2" fill="#ABB2BF" />
                        <circle cx="82.25" cy="28.75" r="2" fill="#ABB2BF" />
                        <circle cx="109" cy="28.75" r="2" fill="#ABB2BF" />
                        <circle cx="2" cy="55.5" r="2" fill="#ABB2BF" />
                        <circle cx="28.75" cy="55.5" r="2" fill="#ABB2BF" />
                        <circle cx="55.5" cy="55.5" r="2" fill="#ABB2BF" />
                        <circle cx="82.25" cy="55.5" r="2" fill="#ABB2BF" />
                        <circle cx="109" cy="55.5" r="2" fill="#ABB2BF" />
                        <circle cx="2" cy="82.25" r="2" fill="#ABB2BF" />
                        <circle cx="28.75" cy="82.25" r="2" fill="#ABB2BF" />
                        <circle cx="55.5" cy="82.25" r="2" fill="#ABB2BF" />
                        <circle cx="82.25" cy="82.25" r="2" fill="#ABB2BF" />
                        <circle cx="109" cy="82.25" r="2" fill="#ABB2BF" />
                        <circle cx="2" cy="109" r="2" fill="#ABB2BF" />
                        <circle cx="28.75" cy="109" r="2" fill="#ABB2BF" />
                        <circle cx="55.5" cy="109" r="2" fill="#ABB2BF" />
                        <circle cx="82.25" cy="109" r="2" fill="#ABB2BF" />
                        <circle cx="109" cy="109" r="2" fill="#ABB2BF" />
                    </g>
                </svg>
            </span>
        </React.Fragment>
    )
}

export default Dots