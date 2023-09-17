import React from 'react'
import { IProjectCard, ISmallProjectCard } from '../../assets/interface/card'
import "./card.scss"
import Paragraph from '../paragraph';
import Title from '../heading';
import Button from '../buttons';
import Url from '../url';
import PosterBg from "./../../images/others/bg-404.jpg"
import Image from '../image';

type TypeCards = IProjectCard & ISmallProjectCard;

const Card: React.FC<TypeCards> = (
    { className = "", image = PosterBg, title, description, technologies = Array<string | any>, buttonTitle, cardType = false, to = "#!", toOther, srcSet
    }
) => {
    
    return cardType ? (
        <React.Fragment>
            <div className={`Card Card__big ${className}`}>
                <Image 
                    src={image} 
                    srcSet={srcSet} 
                    className='Card__imageholder' 
                />

                <Paragraph className='Card__text'>
                    {
                        technologies.map((technology: any | string, index: number) => {
                            return (
                                <React.Fragment key={index}>
                                    <span> {technology} </span>
                                </React.Fragment>
                            )
                        })
                    }
                </Paragraph>

                <div className="Card__content">
                    <Title heading='h2' className='Title-2'> {title} </Title>

                    <Paragraph> {description} </Paragraph>

                    <div className='Card__button'>
                        <Url to={to} target='_blank'>
                            <Button type={true}> Live {'<~>'} </Button>
                        </Url>

                        {
                            buttonTitle || toOther ? (
                                <Url to={toOther} target='_blank'>
                                    <Button> {buttonTitle} </Button>
                                </Url>
                            ) : undefined
                        }


                    </div>
                </div>

            </div>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <div className={`Card Card__small ${className}`}>
                <Paragraph className='Card__text'>
                    {
                        technologies.map((technology: any | string, index: number) => {
                            return (
                                <React.Fragment key={index}>
                                    <span> {technology} </span>
                                </React.Fragment>
                            )
                        })
                    }
                </Paragraph>

                <div className="Card__content">
                    <Title heading='h2' className='Title-2'> {title} </Title>

                    <Paragraph> {description} </Paragraph>

                    <div className='Card__button'>
                        <Url to={to} target='_blank'>
                            <Button type={true}> {buttonTitle} </Button>
                        </Url>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card