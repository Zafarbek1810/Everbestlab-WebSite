import React from "react";
import { SixthSectionWrapper } from "./SixthSection.style";
import { useTranslation } from "react-i18next";
import Container from "../../../CommonComponents/Container";
import AnimatedSection from "./Components/AnimatedSection";
// import MyButton from "../../../CommonComponents/MyButton";

const SixthSection = () => {

  const { t } = useTranslation();

  return (
    <SixthSectionWrapper id="case">
      <Container>
        <div className="top">
          <div className="top__left">
            <div className="badge">
              <span>{t("recentProjects.title-top")}</span>
            </div>
            <h2 className="title">{t("recentProjects.title")}</h2>
          </div>
          {/* <div className="top__right">
            <MyButton to="/#case" className="all-btn" arrow={true}>
              View All
            </MyButton>
          </div> */}
        </div>
        <AnimatedSection />
      </Container>
    </SixthSectionWrapper>
  );
};

export default SixthSection;
