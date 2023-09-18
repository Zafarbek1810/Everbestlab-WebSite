import React from 'react';
import Container from '../../../CommonComponents/Container';
import { ApproachFifthWrapper } from './ApproachFifth.style';
import { useTranslation } from "react-i18next";
import { Row, Col } from 'antd';

const ApproachFifth = () => {

    const { t } = useTranslation();

    return (
        <ApproachFifthWrapper>
            <Container>
            <Row className="roww">
            <Col span={24} md={12} className="left">
                <h3>3. <span>{t("approachPage.phase3title")}</span></h3>
                <ul>
                    <li><p>{t("approachPage.phase3p1")}</p></li>
                    <li><p>{t("approachPage.phase3p2")}</p></li>
                    <li><p>{t("approachPage.phase3p3")}</p></li>
                </ul>
            </Col>
            <Col span={24} md={12} className="right">
                <img src="approach/approachFifth.webp" alt="IT в бизнеса" />
            </Col>
        </Row>
            </Container>
            
        </ApproachFifthWrapper>
    );
};

export default ApproachFifth;