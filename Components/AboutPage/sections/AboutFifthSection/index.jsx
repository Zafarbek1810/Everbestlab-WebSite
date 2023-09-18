import React from "react";
import Icon1 from "../../../CommonComponents/Svg/icon1";
import Icon2 from "../../../CommonComponents/Svg/icon2";
import Icon3 from "../../../CommonComponents/Svg/icon3";
import Icon4 from "../../../CommonComponents/Svg/icon4";
import Container from "../../../CommonComponents/Container";
import { Wrapper } from "./AboutFifthSection.style";
import { useTranslation } from "react-i18next";

const ourValues = [
  {
    title: "aboutPage.valueTitle1",
    text: "aboutPage.valueinfo1",

    svg: <Icon1 />,
  },
  {
    title: "aboutPage.valueTitle2",
    text: "aboutPage.valueinfo2",

    svg: <Icon2 />,
  },
  {
    title: "aboutPage.valueTitle3",
    text: "aboutPage.valueinfo3",
    
    svg: <Icon4 />,
  },
  {
    title: "aboutPage.valueTitle4",
    text: "aboutPage.valueinfo4",

    svg: <Icon3 />,
  },
];

const AboutFifthSection = () => {

  const { t } = useTranslation();

  return (
    <Wrapper>
     <Container> 
        <div className="top">
          <h3>{t("aboutPage.values")}</h3>
          <h2>{t("aboutPage.descr")} </h2>
        </div>


        <section>
          <div className="wrapper">
            <div className="values-wrapper">
              {ourValues.map(({ title, text, svg }, index) => (
                <div className="value-item" key={index}>
                  <div className="value-inner">
                    <span>{svg}</span>
                    <h4>{t(title)}</h4>
                    <p>{t(text)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="right-img">
            <img src="/values-img.jpg" alt="Everbest values images community" />
          </div>
        </section>
      
</Container>
    </Wrapper>
  );
};

export default AboutFifthSection;
