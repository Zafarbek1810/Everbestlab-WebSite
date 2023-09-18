import React from "react";
import { Wrapper } from "./AboutThirdSection.style";
import Container from "../../../CommonComponents/Container";
import { useTranslation } from "react-i18next";

const AboutThirdSection = () => {

  const { t } = useTranslation();

  return (
    <Wrapper>
      <Container>
        <div className="top">
          <hr />
        </div>
        <section className="section1">
          <div className="first">
            <h2>{t("aboutPage.story")}</h2>
          </div>
          <div className="second">
            <p className="p1">
            {t("aboutPage.storyP1")}
            </p>
            <p className="p2">
            {t("aboutPage.storyP2")}
            </p>
          </div>
        </section>

        <section className="section1">
          <div className="first">
            <h2>{t("aboutPage.mission")}</h2>
          </div>
          <div className="second">
            <p className="p1">
            {t("aboutPage.missionP1")}
            </p>
            <p className="p2">
            {t("aboutPage.missionP2")}
            </p>
          </div>
        </section>

        <section className="section1">
          <div className="first">
            <h2>{t("aboutPage.vision")}</h2>
          </div>
          <div className="second">
            <p className="p1">{t("aboutPage.visionP1")}
            </p>
           
          </div>
        </section>

        

        {/* <section className="section2"> */}
          {/* <div className="first1"> */}
            {/* <div className="info"> */}
              {/* <div className="person-img">
                <img src="/public/images/homepage-hero.webp" alt="little image person" />
              </div> */}

              {/* <div className="person-info">
                <h4>Jumaboyev Jony</h4>
                <p>Frontend developer</p>
              </div> */}
            {/* </div> */}
          {/* </div> */}

          {/* <div className="second1">
            <p>
              “Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur nostrum, minus cum iusto voluptatem dolor quidem quo
              maiores iure? Incidunt molestiae nesciunt obcaecati aperiam cum et
              impedit laborum?”
            </p>
          </div> */}
        {/* </section> */}

        


      </Container>
    </Wrapper>
  );
};

export default AboutThirdSection;
