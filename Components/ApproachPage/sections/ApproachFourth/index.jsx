import React from "react";
import Container from "../../../CommonComponents/Container";
import { ApproachFourthWrapper } from "./ApproachFourth.style";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

const ApproachFourth = () => {
  const { t } = useTranslation();

  return (
    <ApproachFourthWrapper>
      <Container>
        <Row className="roww">
          <Col span={24} md={12} className="left">
            <img
              src="approach/approachFourth.webp"
              alt="ИТ сервис на бизнеса в Узбекистане"
            />
          </Col>
          <Col span={24} md={12} className="right">
            <h3>
              2.<span>{t("approachPage.phase2title")}</span>
            </h3>
            <ul>
              <li>
                <p>{t("approachPage.phase2p1")}</p>
              </li>
              <li>
                <p>{t("approachPage.phase2p2")}</p>
              </li>
              <li>
                <p>{t("approachPage.phase2p3")}</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </ApproachFourthWrapper>
  );
};

export default ApproachFourth;
