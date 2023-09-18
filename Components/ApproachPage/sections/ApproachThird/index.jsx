import React from "react";
import Container from "../../../CommonComponents/Container";
import { ApproachThirdWrapper } from "./ApproachThird.style";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";

const ApproachThird = () => {
  const { t } = useTranslation();

  return (
    <ApproachThirdWrapper>
      <Container>
        <Row className="roww">
          <Col span={24} md={12} className="left">
            <h3>
              1.<span>{t("approachPage.phase1title")}</span>
            </h3>
            <ul>
              <li>
                <p>{t("approachPage.phase1p1")}</p>
              </li>
              <li>
                <p>{t("approachPage.phase1p2")}</p>
              </li>
              <li>
                <p>{t("approachPage.phase1p3")}</p>
              </li>
            </ul>
          </Col>
          <Col span={24} md={12} className="right">
            <img
              src="approach/approachThird.webp"
              alt="crm системы в ташкенте"
            />
          </Col>
        </Row>
      </Container>
    </ApproachThirdWrapper>
  );
};

export default ApproachThird;
