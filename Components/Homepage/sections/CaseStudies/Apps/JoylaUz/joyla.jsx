import React, { useEffect } from "react";
import Container from "../../../../../CommonComponents/Container"; 
import MyLink from "../../../../../CommonComponents/MyLink/index";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import { JoylaStyle } from "./joyla.style";

const JoylaApp = () => {
  useEffect(() => {
    AOS.init({ offset: 0, duration: 1000 , once: true });
    AOS.refresh();
  }, []);

  const { t } = useTranslation();

  return (
    <JoylaStyle>
      <section className="intro">
        <Container className="intro-container">
          <div className="left" data-aos={"fade-right"}>
            <img src="/caseStudy/ClassifiedAds.webp" alt="Using Joyla app image" />
          </div>
          <div className="right" data-aos={"fade-left"}>
            <p>{t("joyla.top-title")}</p>
            <h2>{t("joyla.title")}</h2>

            <div className="info-bottom">
              <div className="timeline">
                <p>{t("joyla.time")}</p>
                <div className="last">
                  <img src="/tasbeehApp/time.svg" alt="timeline joyla" />
                  <b>2021 - 2022</b>
                </div>
              </div>

              <div className="role">
                <p>{t("joyla.role")}</p>
                <div className="last">
                  <img src="/tasbeehApp/role.svg" alt="Our Role Joyla App" />
                  <b>{t("joyla.roleP")}</b>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <section className="background">
          <div className="left-background" data-aos={"fade-right"}>
            <h2>{t("joyla.background")}</h2>
            <p>
            {t("joyla.bg-p")}
            </p>
          </div>

          <div className="right-background" data-aos={"fade-left"}  >
            <img src="/tasbeehApp/mobile.jpg" alt="Joyla App Mobile Version" data-aos={"fade-left"} />
          </div>
        </section>
      </Container>

      <section className="challenge">
        <Container className="container-challenge">
          <div className="left-challenge" data-aos="fade-right">
            <img
              src="/tasbeehApp/problem.png"
              alt="A boy challenge with friends Joyla App"
            />
          </div>
          <div className="right-challenge" data-aos="fade-left">
            <h2>{t("joyla.challenge")}</h2>
            <p>
            {t("joyla.challe-p")}
            </p>
          </div>
        </Container>
      </section>

      <section className="design">
        <Container className="container-design">
          <div className="right-design" data-aos="fade-left">
            <img src="/tasbeehApp/joyla-ux.png" alt="Ux Ui design Joyla App" />
          </div> 
          <div className="left-design" data-aos="fade-right">
            <h2>{t("joyla.ux/ui")}</h2>
            <p>
            {t("joyla.ux/ui-p")}
            </p>
          </div>
        </Container>
      </section>

      <Container>
        <section
          className="project"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h2>{t("joyla.about")}</h2>
          <p>{t("joyla.paragr")}</p>
           
 
        </section>
      </Container>

      <section className="download">
        <Container className="container-download">
          <h3 className="tit-down" data-aos="zoom-out-down">
          {t("joyla.download-title")}
          </h3>
          <div className="wrapper">
            <div className="left-download" data-aos="fade-right">
              <MyLink to={"https://play.google.com/store/apps/details?id=uz.joyla.store"} className="google">
                <img src="/tasbeehApp/appstore.svg" alt="Joyla App Google Play Download" />
                <span className="span">
                  <p>{t("joyla.get")}</p>
                  <h3>{t("joyla.google")}</h3>
                </span>
              </MyLink>

              <MyLink to={"https://apps.apple.com/uz/app/joyla/id1481609705"} className="apple">
                <img src="/tasbeehApp/applestore.svg" alt="Joyla App App Store Download" />
                <span className="span">
                  <p>{t("joyla.download")}</p>
                  <h3>{t("joyla.app")}</h3>
                </span>
              </MyLink>
            </div>

            <div className="right-download" data-aos="fade-left">
              <p>
              {t("joyla.p-download")} 
               <br />
              {t("joyla.p-download2")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <section className="tech-wrapper">
          <h3 className="tit-down" data-aos="fade-down">
          {t("joyla.tech")}
          </h3>
          <div className="tech-box" data-aos="zoom-in-up">
            <img src="/tasbeehApp/group-tech.png" alt=" Using technology stack in Tasbeeh App" />
          </div>
        </section>
      </Container>
    </JoylaStyle>
  );
};

export default JoylaApp;
