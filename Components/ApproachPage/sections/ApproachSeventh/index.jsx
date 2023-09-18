import React from 'react';
import Container from '../../../CommonComponents/Container';
import { ApproachSeventhWrapper } from './ApproachSeventh.style';
import { useTranslation } from "react-i18next";
import { Row, Col } from 'antd';

const ApproachSeventh = () => {

    const { t } = useTranslation();

    return (
        <ApproachSeventhWrapper>
            <Container>
            <Row className="roww">
            <Col span={24} md={12} className="left">
                <h3>5. <span>{t("approachPage.phase5title")}</span></h3>
                <ul>
                    <li><p>{t("approachPage.phase5p1")}</p></li>
                    <li><p>{t("approachPage.phase5p2")}</p></li>
                    <li><p>{t("approachPage.phase5p3")}</p></li>
                </ul>
            </Col>
            <Col span={24} md={12} className="right">
                <img src="approach/approachSeventh.webp" alt="ИТ услуги в Узбекистана" />
            </Col>
        </Row>
            </Container>
        </ApproachSeventhWrapper>
    );
};

export default ApproachSeventh;