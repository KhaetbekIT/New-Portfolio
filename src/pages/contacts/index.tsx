import React from "react";
import Container from "../../components/container";
import Title from "../../components/heading";
import Style from "./contacts.module.scss";
import Paragraph from "../../components/paragraph";
import Media from "../../components/media";
import SectionStyle from "./../../styles/_section.module.scss";
import GitHubCalendar from "react-github-calendar";

const Contacts: React.FC = () => {
  return (
    <main className={`inner-page ${Style.Contacts}`}>
      <header className={`Page__header`}>
        <Container>
          <div className="Page__title">
            <Title heading={"h1"} className={`Title-1`}>
              <span className={`primary-pink`}>/</span>
              <span>contacts</span>
            </Title>
            <Title heading={"p"} className={"Paragraph"}>
              {" "}
              Who am i?{" "}
            </Title>
          </div>
        </Container>
      </header>

      <section className={Style.contacts}>
        <Container>
          <div className={Style.contacts__row}>
            <div className="contacts__content_wrap">
              <Paragraph className={Style.contacts__description}>
                I'm interested in freelance opportunities. However, if you have
                other request or question, don't hesitate to contact me
              </Paragraph>

              <div className={Style.github__calendar}>
                <GitHubCalendar
                  username={"KhaetbekIT"}
                  hideTotalCount={true}
                  year={new Date().getFullYear()}
                  showWeekdayLabels={true}
                />
              </div>
            </div>

            <div className={Style.contacts__extra}>
              <div className={Style.contacts__item}>
                <Title heading={"h3"} className={"Title-3"}>
                  Support me here
                </Title>

                <Paragraph>4008 4700 4522 1032</Paragraph>
                <Paragraph>5614 6800 0682 4193</Paragraph>
              </div>

              <div className={Style.contacts__item}>
                <Title heading={"h3"} className={"Title-3"}>
                  Message me here
                </Title>

                <Media
                  icon={"x"}
                  to={`https://twitter.com/khaetbekIT`}
                  text="@khaetbekIT"
                />
                <Media
                  icon={"linkedin"}
                  to={`https://www.linkedin.com/in/khaetbek`}
                  text={`@khaetbek`}
                />
                <Media
                  icon={"vk"}
                  to={`https://vk.com/khaetbekit`}
                  text={`@khaetbekit`}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={Style.contacts__media}>
        <Container>
          <div className={SectionStyle.section__top}>
            <div className={SectionStyle.section__title}>
              <Title heading={"h2"} className={"Title-2"}>
                <span className={"primary-pink"}>#</span>
                <span>all-media</span>
              </Title>
            </div>
          </div>

          <div className={Style.media__row}>
            <Media icon={"x"} to={`https://twitter.com/khaetbekIT`} />
            <Media
              icon={"linkedin"}
              to={`https://www.linkedin.com/in/khaetbek`}
            />
            <Media icon={"vk"} to={`https://vk.com/khaetbekit`} />
            <Media icon={"email"} to={`mailto:khaetbek@internet.ru`} />
            <Media icon={"github"} to={`https://github.com/KhaetbekIT`} />
            <Media
              icon={"facebook"}
              to={`https://www.facebook.com/hayotbek.ahmadjonov.75`}
            />
            <Media icon={"telegram"} to={`https://t.me/+998500796477`} />
            <Media icon={"instagram"} to={`https://instagram.com/khaetbekit`} />
            <Media icon={"ok-ru"} to={`https://ok.ru/profile/598475954227`} />
            <Media
              icon={"landmark"}
              to={`https://goo.gl/maps/NARSSGHg82YcGyWP6`}
            />
            <Media icon={"twitter"} to={`https://twitter.com/khaetbekIT`} />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Contacts;
