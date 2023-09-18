import React from "react";
import { HeroWrapper } from "./AboutHeroSection.style";
import Container from "../../../CommonComponents/Container";
import { useTranslation } from "react-i18next";

const AboutHeroSection = () => {

  const { t } = useTranslation();

  return (
    <HeroWrapper>
      <Container width={1050}>
        <div className="content">
          <div className="first">
            <h2>
            {t("aboutPage.title")} <span> {t("aboutPage.title-span")}</span>
            </h2>
          </div>

          <div className="second">
            <p>{t("aboutPage.paragr")} </p>
          </div>
        </div>
       
      </Container>
      
    </HeroWrapper>
  );
};

export default AboutHeroSection;
