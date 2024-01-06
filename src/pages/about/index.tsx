import React from "react";
import Title from "../../components/heading";
import Container from "../../components/container";
import Paragraph from "../../components/paragraph";
import NewAbout from "./../../images/avatar/about-2.webp";
import OldAbout from "./../../images/avatar/about-2.png";
import Image from "../../components/image";
import Style from "./about.module.scss";
import StyleHome from "./../home/home.module.scss";
import OldLogoLine from "./../../images/logo/logo-outline.svg";
import NewLogoLine from "./../../images/logo/webp/logo-outline.webp";
import ParallaxContainer from "../../components/parallax";
import ParallaxItem from "../../components/parallax/item";
import Dots from "../../components/dots";
import { TypeAnimation } from "react-type-animation";

const About: React.FC = () => {
  return (
    <main className={`inner-page About`}>
      <header className={`Page__header`}>
        <Container>
          <div className="Page__title">
            <Title heading="h1" className={`Title-1`}>
              <span className={`primary-pink`}>/</span>
              <span>about-me</span>
            </Title>
            <Title heading="p" className="Paragraph">
              {" "}
              Who am i?{" "}
            </Title>
          </div>
        </Container>
      </header>

      <section className={"about"}>
        <ParallaxContainer>
          <Container>
            <div className={StyleHome.about__row}>
              <div className={Style.about__content}>
                <TypeAnimation
                  sequence={["Hello, i'm Khaetbek!", 3000]}
                  className={"Paragraph"}
                  wrapper={"p"}
                  speed={1}
                  repeat={Infinity}
                />
                <TypeAnimation
                  sequence={[
                    `I'm  front-end developer and a self-taught based in Tashkent, Uzbekistan. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.`,
                    3000,
                  ]}
                  className={"Paragraph"}
                  wrapper={"p"}
                  speed={1}
                  repeat={Infinity}
                />
                <TypeAnimation
                  sequence={[
                    `Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.`,
                    3000,
                  ]}
                  className={"Paragraph"}
                  wrapper={"p"}
                  speed={1}
                  repeat={Infinity}
                />
              </div>

              <div className={StyleHome.about__imageholder}>
                <ParallaxItem parallaxPosition={-50}>
                  <Image src={OldAbout} srcSet={NewAbout} />
                </ParallaxItem>
              </div>
            </div>
          </Container>
        </ParallaxContainer>
      </section>

      <section className={`${StyleHome.skills} ${Style.skills}`}>
        <Container>
          <Title heading="h3" className="Title-2">
            <span className="primary-pink">#</span>
            <span>skills</span>
          </Title>
          <ul
            className={`
                            ${StyleHome.skills__lists}
                            ${Style.skills__lists}
                        `}
          >
            <li className={StyleHome.skills__item_wrap}>
              <div className={StyleHome.skills__item}>
                <Title heading="h3" className="Title-3">
                  {" "}
                  Languages{" "}
                </Title>

                <Paragraph className={StyleHome.skills__item_desc}>
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>Python (basic)</span>
                  <span>C++ (basic)</span>
                  <span>Java (basic)</span>
                </Paragraph>
              </div>
            </li>

            <li className={StyleHome.skills__item_wrap}>
              <div className={StyleHome.skills__item}>
                <Title heading="h3" className="Title-3">
                  {" "}
                  DataBase{" "}
                </Title>

                <Paragraph className={StyleHome.skills__item_desc}>
                  <span>phpMySQL</span>
                  <span>FireBase</span>
                </Paragraph>
              </div>
            </li>

            <li className={StyleHome.skills__item_wrap}>
              <div className={StyleHome.skills__item}>
                <Title heading="h3" className="Title-3">
                  {" "}
                  Other{" "}
                </Title>

                <Paragraph className={StyleHome.skills__item_desc}>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>EJS</span>
                  <span>SCSS</span>
                  <span>REST API</span>
                  <span>JSON-SERVER</span>
                </Paragraph>
              </div>
            </li>

            <li className={StyleHome.skills__item_wrap}>
              <div className={StyleHome.skills__item}>
                <Title heading="h3" className="Title-3">
                  {" "}
                  Frameworks (CSS){" "}
                </Title>

                <Paragraph className={StyleHome.skills__item_desc}>
                  <span>React</span>
                  <span>(JSX & TSX & Redux & ReduxToolkit)</span>
                  <span>Bootstrap 5.3</span>
                  <span>Material CSS</span>
                  <span>MUI</span>
                  <span>React-Bootstrap</span>
                </Paragraph>
              </div>
            </li>

            <li className={StyleHome.skills__item_wrap}>
              <div className={StyleHome.skills__item}>
                <Title heading="h3" className="Title-3">
                  {" "}
                  Tools{" "}
                </Title>

                <Paragraph className={StyleHome.skills__item_desc}>
                  <span>VS Code</span>
                  <span>Linux</span>
                  <span>Figma</span>
                  <span>PSD</span>
                  <span>Git</span>
                  <span>Webpack</span>
                  <span>Font Awesome</span>
                  <span>(GitHub & GitLab)</span>
                  <span>Gulp</span>
                  <span>Pixel Perfect</span>
                </Paragraph>
              </div>
            </li>
          </ul>
        </Container>
      </section>

      <section className={Style.facts}>
        <ParallaxContainer>
          <Container>
            <Title heading="h2" className="Title-2">
              <span className="primary-pink">#</span>
              <span>my-fun-facts</span>
            </Title>

            <div className={Style.facts__row}>
              <div className={Style.facts__wrap}>
                <Paragraph>
                  I like <b>spring</b> more than <b>summer</b> and <b>winter</b>
                </Paragraph>
                <Paragraph>I often bike with my friends</Paragraph>
                <Paragraph>
                  I like <b>manti</b> and <b>palov</b>
                </Paragraph>
                <Paragraph>
                  I was in <b>Moscow</b>, <b>Velikiy Novgorod</b> and{" "}
                  <b>Valdai</b>
                </Paragraph>
                <Paragraph>I am still in college</Paragraph>
              </div>

              <div className={Style.facts__iconholder}>
                <ParallaxItem
                  parallaxPosition={-30}
                  className={`${Style.facts__icon} 
                                         ${Style.facts__icon_dots}
                                        `}
                >
                  <Dots />
                </ParallaxItem>

                <ParallaxItem
                  parallaxPosition={10}
                  className={Style.facts__icon}
                >
                  <Image src={OldLogoLine} srcSet={NewLogoLine} />
                </ParallaxItem>
              </div>
            </div>
          </Container>
        </ParallaxContainer>
      </section>
    </main>
  );
};

export default About;
