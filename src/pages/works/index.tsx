import React, { useEffect, useState } from 'react'
import Style from "./works.module.scss"
import Title from '../../components/heading'
import Container from '../../components/container'
import Card from '../../components/card'
import StyleProducts from "../home/home.module.scss";
import Button from '../../components/buttons'
import {IProjects} from "../../assets/interface/projects";
import ky from "ky";

const Works: React.FC = () => {
    const [Projects, setProjects] = useState<IProjects[]>([])
    const [Works, setWorks]: Array<any> = useState<object>([])
    const [SmallWorks, setSmallWorks]: Array<any> = useState<object>([])
    const [isSee, setIsSee] = useState<boolean>(false)
    let SliceCounter: number = 5;
    const [IsLoading, setIsLoading] = useState<boolean>(false);
     async function GetProjectsFunc():Promise<void>{
            try {
                const data:Array<IProjects> = await ky.get(`https://portfolio-server-api-jbt5.onrender.com/projects/`).json()
                setProjects(data);
                setIsLoading(true);
            }catch (error){console.error(error); setIsLoading(false);}
     }
      const HandleProjects = (e: MouseEvent):void => {
        SliceCounter = Works.length + 6;

        if (SliceCounter === 12) {
            setWorks(Projects.slice(0, 12));
        }
        else if (SliceCounter === 18) {
            setWorks(Projects.slice(0, 18));
        }

        else if (SliceCounter !== Works?.length) {
            setWorks(Projects?.slice(0, Works?.length));
            setIsSee(true)
            const target = e.target as Element

            if(target.lastChild?.textContent === "Less"){
                setWorks(Works?.slice(0, 6))
                setIsSee(false)
            }
        }
      }

    useEffect(() => {
        GetProjectsFunc();
        setIsSee(false);
        setWorks(Projects.slice(0,6));
        setSmallWorks(() => Projects?.filter((project: any):boolean => project.category === "small"));
    }, [Projects?.length]);

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

                    <Title heading={"h2"} className={`title-2 ${StyleProducts.projects__progress}`} hidden={IsLoading}>Downloading...</Title>

                    <div className={Style.complete__row}>
                        {
                            Works?.map((work: any) => {
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

                    <Title heading={"h2"} className={`title-2 ${StyleProducts.projects__progress}`} hidden={IsLoading}>Downloading...</Title>

                    <div className={Style.small_projects__row}>

                        {
                            SmallWorks?.map((work: any) => {
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