import React, { useState } from 'react'
import Container from '../container'
import Logo from '../logo'
import Image from '../image'
import NewLogo from "./../../images/logo/webp/logo-sm.webp"
import OldLogo from "./../../images/logo/logo-sm.svg"
import Paragraph from '../paragraph'
import Style from "./nav.module.scss"
import { NavLink } from 'react-router-dom'
import { ParamsArray } from '../../assets/routers'
import Media from '../media'


const Navigation: React.FC = () => {

    const [isActive, setIsActive] = useState<boolean>(false)

    window.addEventListener("resize", (): void => setIsActive(false))

    const HiddenMenuFunc = (): void => setIsActive(isActive => !isActive);

    return (
        <React.Fragment>
            <section className={Style.Nav}>
                <Container>
                    <div className={Style.Nav__row}>
                        <div className={Style.Nav__socials}>
                            <div className={Style.Nav__vertical_line}></div>
                            <Media icon={'github'} to={`https://github.com/KhaetbekIT`} />
                            <Media icon={'whats-app'} to={`https://wa.me/998938492019`} />
                            <Media icon={'facebook'} to={`https://www.facebook.com/hayotbek.ahmadjonov.75`} />
                        </div>
                        <Logo className={Style.Nav__logo}>
                            <Image src={OldLogo} srcSet={NewLogo} />
                            <Paragraph className={Style.Nav__logo_text}>
                                Khaetbek
                            </Paragraph>
                        </Logo>

                        <nav className={`${Style.Nav__menu} `}>
                            {
                                ParamsArray.map(params => {
                                    return params.page_name !== "design" ? (
                                        <React.Fragment key={params.id}>
                                            <NavLink to={params.path} className={`Paragraph ${Style.Nav__link}`}  >
                                                <span>#</span>{params.page_name}
                                            </NavLink>
                                        </React.Fragment>
                                    ) : undefined

                                })
                            }
                        </nav>

                        <div className={Style.Nav__mobile}>
                            <button
                                className={` ${Style.Nav__burger} `}
                                onClick={HiddenMenuFunc}
                            >
                                <span>
                                    {
                                        isActive ? (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="1" height="1" transform="matrix(1 0 0 -1 11 12)" fill="#D9D9D9" />
                                                <rect x="3" y="19.9706" width="24" height="2" transform="rotate(-45 3 19.9706)" fill="#D9D9D9" />
                                                <rect x="4" y="3" width="24" height="2" transform="rotate(45 4 3)" fill="#D9D9D9" />
                                            </svg>
                                        ) : (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="5" width="24" height="2" fill="#D9D9D9" />
                                                <rect x="9" y="12" width="15" height="2" fill="#D9D9D9" />
                                            </svg>
                                        )
                                    }
                                </span>
                            </button>
                        </div>
                    </div>
                </Container>
            </section>

            <div
                onClick={(e) => {
                    const target = e.target as Element
                    target.classList.contains(Style.Nav__mobile_wrap_active) ? setIsActive(false) : console.log(false)
                }}

                className={
                    `${Style.Nav__mobile_wrap}
                    ${isActive ? Style.Nav__mobile_wrap_active : ""}
                    `
                }
            >
                <Container>
                    <ul className={Style.Nav__list}>
                        {
                            ParamsArray.map(params => {
                                return params.page_name !== "design" ? (
                                    <React.Fragment key={params.id}>
                                        <li className={Style.Nav__mobile_item}>
                                            <NavLink
                                                to={params.path}
                                                className={`
                                                    Paragraph ${Style.Nav__link} 
                                                    ${Style.Nav__mobile_link}`
                                                }

                                                onClick={() => setIsActive(false)}
                                            >
                                                <span>#</span>{params.page_name}
                                            </NavLink>
                                        </li>
                                    </React.Fragment>
                                ) : undefined
                            })
                        }
                    </ul>

                    <div className={Style.Nav__mobile_socials}>
                        <Media icon={'github'} to={`https://github.com/KhaetbekIT`} />
                        <Media icon={'whats-app'} to={`https://wa.me/998938492019`} />
                        <Media icon={'facebook'} to={`https://www.facebook.com/hayotbek.ahmadjonov.75`} />
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Navigation