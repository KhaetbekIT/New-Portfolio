import React from 'react'
import Style from "./footer.module.scss"
import Container from '../container'
import Logo from '../logo'
import Image from '../image'
import OldLogo from "./../../images/logo/logo-sm.svg"
import Paragraph from '../paragraph'
import NewLogo from "./../../images/logo/webp/logo-sm.webp"
import Url from '../url'
import Title from '../heading'
import Media from '../media'

const Footer: React.FC = () => {
    return (
        <footer className={Style.Footer}>
            <Container>
                <div className={Style.Footer__row}>
                    <div className={Style.Footer__extra}>
                        <div className={Style.Footer__links}>
                            <Logo className={Style.Footer__logo}>
                                <Image src={OldLogo} srcSet={NewLogo} />
                                <Paragraph className={Style.Footer__logo_text}>
                                    Khaetbek
                                </Paragraph>
                            </Logo>

                            <Url to='mailto:khaetbek@internet.ru'>
                                <Paragraph className={Style.Footer__mail}>Khaetbek@internet.ru</Paragraph>
                            </Url>
                        </div>
                        <Paragraph className={Style.Footer__desc}>
                            HTML - layout designer and Front-end developer
                        </Paragraph>
                    </div>
                    <div className={Style.Footer__socials}>
                        <Title heading='h3' className={`Title-2`}>Media</Title>

                        <ul className={Style.Footer__social_list}>
                            <li>
                                <Media icon={'vk'} 
                                    to={`https://vk.com/khaetbekit`} 
                                />
                            </li>
                            <li>
                                <Media icon={'linkedin'} 
                                    to={`https://www.linkedin.com/in/khaetbek`}
                                />
                            </li>
                            <li>
                                <Media icon={'x'} to={`https://twitter.com/khaetbekIT`} />
                            </li>
                        </ul>
                    </div>
                </div>

                <Paragraph className={Style.Footer__copyright}> &#169; Copyright 2023. Made by Khaetbek. All right reserved</Paragraph>
            </Container>
        </footer>
    )
}

export default Footer