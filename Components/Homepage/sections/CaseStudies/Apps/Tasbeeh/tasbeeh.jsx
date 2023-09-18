import React, { useEffect } from "react";
import Container from "../../../../../CommonComponents/Container";
import { TasbeehStyle } from "./tasbeeh.style";
import MyLink from "../../../../../CommonComponents/MyLink/index";
import { useTranslation } from "react-i18next";
import AOS from "aos";

const TasbeehApp = () => {
  useEffect(() => {
    AOS.init({ offset: 0, duration: 1000 , once: true });
    AOS.refresh();
  }, []);

  const { t } = useTranslation();

  return (
    <TasbeehStyle>
      <section className="intro">
        <Container className="intro-container">
          <div className="left" data-aos={"fade-right"}>
            <img src="/tasbeehApp/intro-img.png" alt="Quran and Tasbeeh image" />
          </div>
          <div className="right" data-aos={"fade-left"}>
            <p>{t("tasbeeh.top-title")}</p>
            <h2>{t("tasbeeh.title")}</h2>

            <div className="info-bottom">
              <div className="timeline">
                <p>{t("tasbeeh.time")}</p>
                <div className="last">
                  <img src="/tasbeehApp/time.svg" alt="timeline tasbeeh" />
                  <b>2022 - 2023</b>
                </div>
              </div>

              <div className="role">
                <p>{t("tasbeeh.role")}</p>
                <div className="last">
                  <img src="/tasbeehApp/role.svg" alt="Our Role Tasbeeh App" />
                  <b>{t("tasbeeh.roleP")}</b>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <section className="background">
          <div className="left-background" data-aos={"fade-right"}>
            <h2>{t("tasbeeh.background")}</h2>
            <p>
            {t("tasbeeh.bg-p")}
            </p>
          </div>

          <div className="right-background" data-aos={"fade-left"}  >
            <img src="/tasbeehApp/mobile-bottom.png" alt="Tasbeeh App Mobile Version" data-aos={"fade-left"} />
            <img src="/tasbeehApp/mobile-mid.png" alt="Tasbeeh App Mobile Version" data-aos={"fade-left"}/>
            <img src="/tasbeehApp/mobile-top.png" alt="Tasbeeh App Mobile Version" data-aos={"fade-left"}/>
          </div>
        </section>
      </Container>

      <section className="challenge">
        <Container className="container-challenge">
          <div className="left-challenge" data-aos="fade-right">
            <img
              src="/tasbeehApp/challenge.png"
              alt="A boy challenge with friends Tasbeeh App"
            />
          </div>
          <div className="right-challenge" data-aos="fade-left">
            <h2>{t("tasbeeh.challenge")}</h2>
            <p>
            {t("tasbeeh.challe-p")}
            </p>
          </div>
        </Container>
      </section>

      <section className="design">
        <Container className="container-design">
          <div className="left-design" data-aos="fade-right">
            <h2>{t("tasbeeh.ux/ui")}</h2>
            <p>
            {t("tasbeeh.ux/ui-p")}
            </p>
            <MyLink to={"https://www.behance.net/gallery/157345923/Digital-Tasbeh-app"} className="btn" target = {"_blank"}>
            {t("button.btn")}
            </MyLink>
          </div>
          <div className="right-design" data-aos="fade-left">
            <img src="/tasbeehApp/ux-ui.png" alt="Ux Ui design Tasbeeh App" />
          </div>
        </Container>
      </section>

      <Container>
        <section
          className="project"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h2>{t("tasbeeh.about")}</h2>
          <p>{t("tasbeeh.paragr")}</p>
            <p>
            {t("tasbeeh.text1")} <br />
            {t("tasbeeh.text2")} <br />
            {t("tasbeeh.text3")} <br />
            {t("tasbeeh.text4")} <br />
            {t("tasbeeh.text5")} <br />
            {t("tasbeeh.text6")} <br />
            {t("tasbeeh.text7")} <br />
            {t("tasbeeh.text8")} <br />
            <br />
            {t("tasbeeh.text9")} 

          </p>
        </section>
      </Container>

      <section className="download">
        <Container className="container-download">
          <h3 className="tit-down" data-aos="zoom-out-down">
          {t("tasbeeh.download-title")}
          </h3>
          <div className="wrapper">
            <div className="left-download" data-aos="fade-right">
              <MyLink to={"https://play.google.com/store/apps/details?id=com.everbestlab.tasbeeh"} className="google">
                <img src="/tasbeehApp/appstore.svg" alt="Tasbeeh App Google Play Download" />
                <span className="span">
                  <p>{t("tasbeeh.get")}</p>
                  <h3>{t("tasbeeh.google")}</h3>
                </span>
              </MyLink>

              <div to={'#'} className="apple">
                <img src="/tasbeehApp/applestore.svg" alt="Tasbeeh App App Store Download" />
                <span className="span">
                  <p>{t("tasbeeh.download")}</p>
                  <h3>{t("tasbeeh.app")}</h3>
                </span>
              </div>
            </div>

            <div className="right-download" data-aos="fade-left">
              <p>
              {t("tasbeeh.p-download")}
              </p>
            </div>
          </div>
        </Container>  
      </section>

      <Container>
        <section className="tech-wrapper">
          <h3 className="tit-down" data-aos="fade-down">
          {t("tasbeeh.tech")}
          </h3>
          <div className="tech-box" data-aos="zoom-in-up">
            <img src="/tasbeehApp/group-tech.png" alt=" Using technology stack in Tasbeeh App" />
          </div>
        </section>
      </Container>
    </TasbeehStyle>
  );
};

export default TasbeehApp;
