import React from 'react'
import "./designs.scss"
import Container from '../components/container'
import Title from '../components/heading'
import Button from '../components/buttons'
import Media from '../components/media'
import Paragraph from '../components/paragraph'
import Dots from '../components/dots'
import Label from '../components/form/label'
import Logo from '../components/logo'
import OldLogo from "./../images/logo/logo.svg"
import NewLogo from "./../images/logo/webp/logo.webp"
import Image from '../components/image'
import Card from '../components/card'

const Design: React.FC = () => {
  return (
    <main className='Design'>

      <section className="Design-titles">
        <Container>
          <blockquote className="blockquote">
            <Title heading='h1' className='Title-xl'><span>Heading</span> <code className='code'>.Title-xl</code> </Title>
          </blockquote>

          <blockquote className="blockquote">
            <Title heading='h1' className='Title-1'><span>Heading</span> <code className='code'>.Title-1</code> </Title>
          </blockquote>

          <blockquote className="blockquote">
            <Title heading='h2' className='Title-2'><span>Heading</span> <code className='code'>.Title-2</code> </Title>
          </blockquote>

          <blockquote className="blockquote">
            <Title heading='h3' className='Title-3'><span>Heading</span> <code className='code'>.Title-3</code> </Title>
          </blockquote>
        </Container>
      </section>

      <section className='Design-colors'>
        <Container className='Design--container'>
          <blockquote className="blockquote">
            <div className="color-block secondary-gray">
              <code className="code">$background-gray</code>
            </div>
          </blockquote>

          <blockquote className="blockquote">
            <div className="color-block secondary-red">
              <code className="code">$background-red</code>
            </div>
          </blockquote>

          <blockquote className="blockquote">
            <div className="color-block secondary-green">
              <code className="code">$background-green</code>
            </div>
          </blockquote>

          <blockquote className="blockquote">
            <div className="color-block secondary-yellow">
              <code className="code">$background-yellow</code>
            </div>
          </blockquote>

          <blockquote className="blockquote">
            <div className="color-block secondary-blue">
              <code className="code">$background-blue</code>
            </div>
          </blockquote>

          <blockquote className="blockquote">
            <div className="color-block secondary-pink">
              <code className="code">$background-pink</code>
            </div>
          </blockquote>

          <blockquote className="blockquote">
            <div className="color-block secondary-aqua">
              <code className="code">$background-aqua</code>
            </div>
          </blockquote>

          <blockquote className="blockquote">
            <div className="color-block secondary-light-gray">
              <code className="code">$background-light-gray</code>
            </div>
          </blockquote>
        </Container>
      </section>

      <section className="Design--button">
        <Container className='Design'>
          <blockquote className="blockquote">
            <Button>
              Demo {'|>'}
            </Button>

            <code className="code">Button</code>
          </blockquote>

          <blockquote className="blockquote">
            <Button type={true}>
              Send {'|>'}
            </Button>
            <code className="code">Button[type=true]</code>
          </blockquote>
        </Container>
      </section>

      <section>
        <Container>
          <blockquote className="blockquote">
            <Paragraph>
              Text
            </Paragraph>

            <code className="code">Paragraph</code>
          </blockquote>
          <blockquote className="blockquote">
            <Dots />
            <code className="code">Dots</code>
          </blockquote>
          <blockquote className="blockquote">
            <Dots dots={true} />
            <code className="code">Dots[dots=true]</code>
          </blockquote>
          <blockquote className='blockquote'>
            <Label />
            <code className="code">Label</code>
          </blockquote>
          <blockquote className='blockquote'>
            <Label type='texarea' />
            <code className="code">Label[type=textarea]</code>
          </blockquote>
          <blockquote className='blockquote'>
            <Media text='@Khaetbek' />
            <code className="code">Media</code>
          </blockquote>
          <blockquote className="blockquote">
            <Logo>
              <Image src={OldLogo} srcSet={NewLogo} />
            </Logo>
            <code className="code">Logo</code>
          </blockquote>
          <blockquote className="blockquote">
            <code className="code">Card[description, buttonTitle, title, to]</code>
            <Card description={`Start creating scalable discord.js bot with typescript in seconds`} buttonTitle={'Github <~>'} title={'Bot boilerplate'} technologies={["ko", "ku"]} />
          </blockquote>

          <blockquote className="blockquote">
            <code className="code">Card{'[cardType=true, title, desc, buttonTitle, technologies]'} </code>
            <Card cardType={true} title={'ChertNodes'} description={'Minecraft servers hosting'} buttonTitle={'Github <~>'} technologies={["ko", "ku"]} />
          </blockquote>
        </Container>
      </section>

    </main>
  )
}

export default Design