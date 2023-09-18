// import {
//   faArrowRight,
//   faCloud,
//   faGlobe,
//   faLaptop,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import Container from "../../../CommonComponents/Container";
import { SecondSectionWrapper } from "./SecondSection.style";
// import MyLink from "../../../CommonComponents/MyLink";
import {motion} from "framer-motion";

const data = [
  {
    icon: "./icons/settings-white.webp",
    title: "about.title",
    text: "about.title",
  },
  {
    icon: "./icons/cloud-computing-white.webp",
    title: "about.title2",
    text: "about.title2",
  },
  {
    icon: "./icons/world-wide-web-blue.webp",
    title: "about.title3",
    text: "about.title3",
  },
];

const cardsAnimation = {
  hidden: {
    y: 300,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.15,
      duration: 1
    }
  })
}

const MCol = motion(Col)

const SecondSection = () => {
  
  const { t } = useTranslation();

  return (
    <SecondSectionWrapper>
      <Container>
        <Row gutter={16} className="cards-row">
          {data.map(({ title, icon, text }, idx) => (
            <MCol
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              className="cards-col"
              span={24} md={8}
              key={idx}
            >
              <motion.div
                variants={cardsAnimation}
                className={`card-inner card-inner-${idx}`}
                custom={idx}
              >
                <img
                  className="icon"
                  src={icon}
                  alt="Digital service in Tashkent"
                  width={60}
                  height={60}
                />
                <h3>{t(title)}</h3>
                <p>{t(text)}</p>

                {/* KEYINROQ QO'SHILADIGAN BO'LDI */}
                {/* <MyLink to="/" className="learn-link">
                  <span>Learn More</span>

                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="learn-arrow-initial"
                  />

                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="learn-arrow-onHover"
                  />
                </MyLink> */}
              </motion.div>
            </MCol>
          ))}
        </Row>
      </Container>
    </SecondSectionWrapper>
  );
};

export default SecondSection;
