import { Col, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../../../CommonComponents/Container";
import { AproachFirstWrapper } from "./ApproachFirst.style"; 

const ApproachFirst = () => {

  const { t } = useTranslation();

  return (
    <AproachFirstWrapper>
      <Container>
        <Row>
          <Col span={24}>
            <span className="subtitle">{t("approachPage.subtitle")}</span>
            <h3>
            {t("approachPage.title")} <span>{t("approachPage.title-span")}</span>
            </h3>
            <Row>
              <Col span={24} md={8} className="card">
                <img src="approach/approach1.webp" alt="развитие бизнеса" />
                <p>{t("approachPage.cardP1")}</p>

                {/* <p data-aos={"fade-right"} className="info">
              <b>{t("about.info").split(" ").slice(0, 1).join(" ")}</b>
              &nbsp;
              {t("about.info").split(" ").slice(1).join(" ")}
            </p> */}
              </Col>
              <Col span={24} md={8} className="card">
                <img
                  src="approach/approach3.webp"
                  alt="разработка crm системы"
                />
                <p>{t("approachPage.cardP2")}</p>
              </Col>
              <Col span={24} md={8} className="card">
                <img
                  src="approach/approach2.webp"
                  alt="веб и мобильный приложение"
                />
                <p>
                {t("approachPage.cardP3")}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </AproachFirstWrapper>
  );
};

export default ApproachFirst;
