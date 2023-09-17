import React, { useEffect, useState } from 'react'
import Container from '../../components/container'
import Style from "./home.module.scss"
import Title from '../../components/heading'
import Paragraph from '../../components/paragraph'
import { Link } from 'react-router-dom'
import Button from '../../components/buttons'
import Image from '../../components/image'
import NewAvatar from "./../../images/avatar/Avatar.webp"
import OldAvatar from "./../../images/avatar/Avatar.png"
import Hr from '../../components/hr'
import Card from '../../components/card'
import NewAbout from "./../../images/avatar/about.webp"
import OldAbout from "./../../images/avatar/about.png"
import Media from '../../components/media'
import SectionStyle from "./../../styles/_section.module.scss"
import ParallaxContainer from '../../components/parallax'
import ParallaxItem from '../../components/parallax/item'
import Dots from '../../components/dots'
import LogoOutline from "./../../images/logo/logo-outline.svg"
import LogoOutline2 from "./../../images/logo/webp/logo-outline.webp"
import LinearBlock from '../../components/linear-block'
import { Projects } from '../../projects'
import { TypeAnimation } from 'react-type-animation'

const Home: React.FC = () => {

    const [LastProjects, setLastProjects]: Array<any> = useState<object>([])

    useEffect(() => {
        setLastProjects(() => {
            const filterProject = Projects.filter(project => project.category === "big")

            return filterProject.sort((a, b) => b.id - a.id).slice(0, 3)
        })
    }, [])

    return (
        <React.Fragment>
            <main className="Home">
                <ParallaxContainer>
                    <header className={Style.header}>
                        <Container >
                            <div className={Style.header__row}>
                                <div className={Style.header__content}>
                                    <ParallaxItem parallaxPosition={-30}>
                                        <Title
                                            heading='h1'
                                            className={`Title-1 ${Style.header__title}`}
                                        >
                                            Khaetbek is a
                                            <TypeAnimation
                                                sequence={[
                                                    100,
                                                    "\n HTML - layout designer",
                                                    10000,
                                                    "\n ReactJS - developer",
                                                    10000,
                                                ]}
                                                speed={1}
                                                repeat={Infinity}
                                            />
                                            and
                                            <TypeAnimation
                                                sequence={[
                                                    100,
                                                    "\n Frontend - developer",
                                                    10000,
                                                    "\n TypeSript + React - developer",
                                                    10000,
                                                ]}
                                                speed={1}
                                                repeat={Infinity}
                                            />
                                        </Title>

                                        <Paragraph className={Style.header__text}>
                                            He crafts responsive websites where technologies meet creativity
                                        </Paragraph>

                                        <Link to={"/contacts/"} className={Style.header__button}>
                                            <Button type={true}>Contact me!!</Button>
                                        </Link>
                                    </ParallaxItem>
                                </div>

                                <div className={Style.header__imageholder}>

                                    <ParallaxItem parallaxPosition={30}>
                                        <Image src={OldAvatar} srcSet={NewAvatar} className={Style.header__image} />

                                        <q className={Style.header__imageholder_desc}>
                                            <span></span>
                                            <Paragraph>
                                                Currently working on <b>Portfolio</b>
                                            </Paragraph>
                                        </q>
                                    </ParallaxItem>
                                </div>
                            </div>
                        </Container>
                    </header>
                </ParallaxContainer>

                <section className={Style.quote}>
                    <ParallaxContainer>
                        <Container>
                            <div className={Style.quote__row}>
                                <div className={Style.quote__wrap}>
                                    <ParallaxItem parallaxPosition={-10}>
                                        <blockquote className={`Title-2 ${Style.quote__blockquote}`}>
                                            With great power comes great electricity bill
                                        </blockquote>
                                        <div className={Style.quote__author}>
                                            - Dr. Who
                                        </div>
                                    </ParallaxItem>
                                </div>
                            </div>
                        </Container>
                    </ParallaxContainer>
                </section>

                <section className={Style.projects}>
                    <Container>
                        <div className={SectionStyle.section__top}>
                            <div className={SectionStyle.section__title}>
                                <Title heading='h2' className='Title-2'>
                                    <span className='primary-pink'>#</span>
                                    <span>projects</span>
                                </Title>
                                <Hr />
                            </div>

                            <Link to={"/works/"} className={Style.projects__link}>
                                View all ~~{'>'}
                            </Link>
                        </div>

                        <div className={Style.projects__row}>
                            {
                                LastProjects.map((project: any) => {
                                    return (
                                        <React.Fragment key={project.id}>
                                            <Card
                                                technologies={project.technologies}
                                                cardType={true}
                                                image={project.image}
                                                srcSet={project.imageWebp}
                                                title={project.title}
                                                description={project.description}
                                                to={project.liveLink}
                                                toOther={project.repository}
                                                buttonTitle={project.repositoryName}
                                            />
                                        </React.Fragment>
                                    )
                                })
                            }


                        </div>
                    </Container>
                </section>

                <section className={Style.skills}>
                    <ParallaxContainer>
                        <Container>
                            <div className={SectionStyle.section__top}>
                                <div className={SectionStyle.section__title}>
                                    <Title heading={'h2'} className={'Title-2'}>
                                        <span className={'primary-pink'}>#</span>
                                        <span>skills</span>
                                    </Title>
                                    <Hr className={Style.about__hr} />
                                </div>
                            </div>

                            <div className={Style.skills__row}>
                                <div className={Style.skills__iconsholder}>
                                    <ParallaxItem
                                        parallaxPosition={-30}
                                        className={
                                            `
                                                ${Style.skills__icon}
                                                ${Style.skills__icon_dots}
                                            `
                                        }
                                    >
                                        <Dots />
                                    </ParallaxItem>

                                    <ParallaxItem
                                        parallaxPosition={30}
                                        className={
                                            `
                                            ${Style.skills__icon}
                                            ${Style.skills__icon_outline}
                                        `
                                        }
                                    >
                                        <Image
                                            src={LogoOutline}
                                            srcSet={LogoOutline2}

                                        />
                                    </ParallaxItem>

                                    <ParallaxItem
                                        parallaxPosition={-20}
                                        className={
                                            `
                                                ${Style.skills__icon}
                                                ${Style.skills__icon_dots}
                                                ${Style.skills__icon_dots_other}
                                            `
                                        }
                                    >
                                        <Dots

                                        />
                                    </ParallaxItem>

                                    <ParallaxItem
                                        parallaxPosition={20}
                                        className={
                                            `
                                                ${Style.skills__icon}
                                                ${Style.skills__icon_linearblock}
                                            `
                                        }
                                    >
                                        <LinearBlock
                                            size={86}

                                        />
                                    </ParallaxItem>

                                    <ParallaxItem
                                        parallaxPosition={-10}
                                        className={
                                            `
                                                ${Style.skills__icon}
                                                ${Style.skills__icon_linearblock}
                                                ${Style.skills__icon_linearblock_other}
                                            `
                                        }
                                    >
                                        <LinearBlock
                                            size={52}
                                        />
                                    </ParallaxItem>
                                </div>
                                <ul className={Style.skills__lists}>
                                    <li className={Style.skills__item_wrap}>
                                        <div className={Style.skills__item}>
                                            <Title heading='h3' className='Title-3'> Languages </Title>

                                            <Paragraph className={Style.skills__item_desc}>
                                                <span>TypeScript</span>
                                                <span>JavaScript</span>
                                                <span>C++ (basic)</span>
                                                <span>Python (basic)</span>
                                                <span>Java (basic)</span>

                                            </Paragraph>
                                        </div>
                                    </li>
                                    <li className={Style.skills__item_wrap}>
                                        <div className={Style.skills__item}>
                                            <Title heading='h3' className='Title-3'>Databases</Title>

                                            <Paragraph className={Style.skills__item_desc}>
                                                <span>phpMySQL</span>
                                                <span>FireBase</span>
                                            </Paragraph>
                                        </div>

                                        <div className={Style.skills__item}>
                                            <Title heading='h3' className='Title-3'>Other</Title>

                                            <Paragraph className={Style.skills__item_desc}>
                                                <span>HTML</span>
                                                <span>CSS</span>
                                                <span>EJS</span>
                                                <span>SCSS</span>
                                                <span>REST</span>
                                                <span>JSON-SERVER</span>
                                            </Paragraph>
                                        </div>
                                    </li>
                                    <li className={Style.skills__item_wrap}>
                                        <div className={`${Style.skills__item} ${Style.skills__item_big}`}>
                                            <Title heading='h3' className='Title-3'>Tools</Title>

                                            <Paragraph className={Style.skills__item_desc}>
                                                <span>VSCode</span>
                                                <span>Linux</span>
                                                <span>Figma</span>
                                                <span>PSD</span>
                                                <span>Git</span>
                                                <span>Webpack</span>
                                                <span>Font Awesome</span>
                                                <span>(GitHub & GitLab)</span>
                                                <span>Gulp</span>
                                                <span>Pixel Purfect</span>

                                            </Paragraph>
                                        </div>

                                        <div className={`${Style.skills__item} ${Style.skills__item_big}`}>
                                            <Title heading='h3' className='Title-3'>Frameworks (CSS) </Title>

                                            <Paragraph className={Style.skills__item_desc}>
                                                <span>React (JSX & TSX) </span>
                                                <span>Bootstrap 5.3</span>
                                                <span>Material CSS</span>
                                                <span>MUI</span>
                                                <span>React-Bootstrap</span>
                                            </Paragraph>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Container>

                    </ParallaxContainer>

                </section>

                <section className={Style.about}>
                    <ParallaxContainer>
                        <Container>
                            <div className={SectionStyle.section__top}>
                                <div className={SectionStyle.section__title}>
                                    <Title heading='h2' className='Title-2'>
                                        <span className='primary-pink'>#</span>
                                        <span>about-me</span>
                                    </Title>
                                    <Hr className={Style.skills__hr} />
                                </div>
                            </div>
                            <div className={Style.about__row}>
                                <div className={Style.about__content}>
                                    <TypeAnimation

                                        sequence={[
                                            "Hello, i'm Khaetbek!",
                                            3000
                                        ]}
                                        className={"Paragraph"}
                                        wrapper={'p'}
                                        speed={1}

                                    />
                                    <TypeAnimation

                                        sequence={[
                                            `I'm  front-end developer and a self-taught based in Tashkent, Uzbekistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.`,
                                            3000
                                        ]}
                                        className={"Paragraph"}
                                        wrapper={'p'}
                                        speed={1}

                                    />
                                    <TypeAnimation

                                        sequence={[
                                            `Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.`,
                                            3000,
                                        ]}
                                        className={"Paragraph"}
                                        wrapper={'p'}
                                        speed={1}

                                    />

                                    <Link to={"/about/"}>
                                        <Button type={true}>Read more -{'>'}</Button>
                                    </Link>
                                </div>

                                <div className={Style.about__imageholder}>
                                    <ParallaxItem parallaxPosition={-50} >
                                        <Image src={OldAbout} srcSet={NewAbout} />
                                    </ParallaxItem>
                                </div>


                            </div>
                        </Container>
                    </ParallaxContainer>
                </section>

                <section className={Style.contacts}>
                    <Container>
                        <div className={SectionStyle.section__top}>
                            <div className={SectionStyle.section__title}>
                                <Title heading='h2' className='Title-2'>
                                    <span className='primary-pink'>#</span>
                                    <span>contacts</span>
                                </Title>
                                <Hr className={Style.contacts__hr} />
                            </div>
                        </div>

                        <div className={Style.contacts__row}>
                            <Paragraph className={Style.contacts__description}>
                                I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
                            </Paragraph>

                            <div className={Style.contacts__socials} >
                                <Title heading='h3' className={`Title-3`}>
                                    Message me here
                                </Title>
                                <ul className={Style.contacts__list}>
                                    <li>
                                        <Media icon={`telegram`} text={`Khaetbek`} to={"https://t.me/Khaetbek"} />
                                    </li>
                                    <li>
                                        <Media icon={`email`} text={`Khaetbek@internet.ru`} to={`mailto:khaetbek@internet.ru`} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Home