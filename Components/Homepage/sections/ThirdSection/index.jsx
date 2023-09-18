import { Col, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { ThirdSectionWrapper } from "./ThirdSection.style";
import Container from "../../../CommonComponents/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

const MCol = motion(Col);

const imgAnimation = {
  hidden: custom => ({
    x: custom === 0 ? -250 : 250,
    opacity: 0,
  }),
  visible: custom => (
    {
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 1
      }
    }
  )
}

const ThirdSection = () => {

  const { t } = useTranslation();

  return (
    <ThirdSectionWrapper>
      <Container>
        <Row>
          <MCol
            span={24} md={12}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
          >
            <div className="imgs">
              <motion.div
                variants={imgAnimation}
                custom={0}
                className="img1"
              >
                <img src="./4/back.webp" alt="разработка веб сайтов" width={800} height={1034} />
              </motion.div>
              <motion.div
                variants={imgAnimation}
                custom={1}
                className="img2"
              >
                <img src="./4/front.webp" alt="разработка мобильных приложении в Ташкента" width={800} height={891} />
              </motion.div>
            </div>
          </MCol>
          <Col md={12} span={24} >
            <div className="rightWrapper">
              <div className="titleTop">{t("thirdSection.title-top")}</div>
              <h2>{t("thirdSection.title")}</h2>
              <p className="topP">
              <p className="info">
              {t("thirdSection.title-p")}
            </p>
              </p>
              <ul>
                <li>
                  <h3>
                    <FontAwesomeIcon icon={faCheck} /> {t("thirdSection.ul1")}
                  </h3>
                  <p className="bottomP">
                  {t("thirdSection.p1")}
                  </p>
                </li>
                <li>
                  <h3>
                    <FontAwesomeIcon icon={faCheck} />{t("thirdSection.ul2")}
                  </h3>
                  <p className="bottomP">
                  {t("thirdSection.p2")}
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </ThirdSectionWrapper>
  );
};

export default ThirdSection;
