import React, { useEffect, useState } from 'react'
import Style from "./works.module.scss"
import Title from '../../components/heading'
import Container from '../../components/container'
import Card from '../../components/card'
import { Projects } from '../../projects'
import Button from '../../components/buttons'

const Works: React.FC = () => {
    const [Works, setWorks]: Array<any> = useState<object>([])
    const [SmallWorks, setSmallWorks]: Array<any> = useState<object>([])
    const [isSee, setIsSee] = useState<boolean>(false)
    let SliceCounter: number = 5

    const HandleProjects = (e: MouseEvent) => {
        SliceCounter = (Works.length + 5)

        if (SliceCounter === 11) {
            setWorks(Projects.slice(0, 11))
        }
        else if (SliceCounter === 16) {
            setWorks(Projects.slice(0, 16))
        }

        else if (SliceCounter !== Projects.length) {
            setWorks(Projects.slice(0, Projects.length))
            setIsSee(true)
            const target = e.target as Element

            if(target.lastChild?.textContent === "Less"){
                setWorks(Projects.slice(0, 6))
                setIsSee(false)
            }
        }
    }

    useEffect(() => {
        setIsSee(false)
        setWorks(Projects.slice(0, 6))
        setSmallWorks(() => {
            return Projects.filter(project => project.category === "small")
        })
    }, [])

    return (
        <main className={`inner-page Works`}>
            <header className={`Page__header`}>
                <Container>
                    <div className="Page__title">
                        <Title heading='h1' className={`Title-1`}>
                            <span className={`primary-pink`}>/</span>
                            <span>projects</span>
                        </Title>
                        <Title heading='p' className='Paragraph'>
                            List of my projects
                        </Title>
                    </div>
                </Container>
            </header>

            <section className={Style.complete}>
                <Container>
                    <Title heading='h2'>
                        <span className="primary-pink">#</span>
                        <span>complete-apps</span>
                    </Title>
                    <div className={Style.complete__row}>
                        {
                            Works.map((work: any) => {
                                return (
                                    <React.Fragment key={work.id}>
                                        <Card
                                            technologies={work.technologies}
                                            cardType={true}
                                            image={work.image}
                                            title={work.title}
                                            description={work.description}
                                            to={work.liveLink}
                                            toOther={work.repository}
                                            buttonTitle={work.repositoryName}
                                            srcSet={work.imageWebp}
                                        />
                                    </React.Fragment>
                                )
                            })
                        }

                    </div>

                    <div className={Style.complete__buttons}>
                        <Button className={Style.complete__button} onClick={HandleProjects}>
                            {
                                isSee ? "Less" : "See more"
                            }
                        </Button>
                    </div>
                </Container>
            </section>

            <section className={Style.small_projects}>
                <Container>
                    <Title heading='h2' className={'Title-2'}>
                        <span className="primary-pink">#</span>
                        <span>small-projects</span>
                    </Title>
                    <div className={Style.small_projects__row}>

                        {
                            SmallWorks.map((work: any) => {
                                return (
                                    <React.Fragment key={work.id}>
                                        <Card
                                            technologies={work.technologies}
                                            title={work.title}
                                            description={work.description}
                                            buttonTitle={`Github <~>`}
                                            to={work.repository}

                                        />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </Container>
            </section>
        </main>
    )
}

export default Works