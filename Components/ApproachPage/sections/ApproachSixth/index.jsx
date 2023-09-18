import React from 'react';
import Container from '../../../CommonComponents/Container';
import { ApproachSixthWrapper } from './ApproachSixth.style';
import { useTranslation } from "react-i18next";
import { Row, Col} from "antd"

const ApproachSixth = () => {

    const { t } = useTranslation();

    return (
        <ApproachSixthWrapper>
            <Container>
            <Row className="roww">
            <Col span={24} md={12} className="left">
                <img src="approach/approachSixth.webp" alt="веб сайт разработка для бизнеса" />
            </Col>
            <Col span={24} md={12} className="right">
                <h3>4. <span>{t("approachPage.phase4title")}</span></h3>
                <ul>
                    <li><p>{t("approachPage.phase4p1")}</p></li>
                    <li><p>{t("approachPage.phase4p2")}</p></li>
                    <li><p>{t("approachPage.phase4p3")}</p></li>
                    <li><p>{t("approachPage.phase4p4")}</p></li>
                    <li><p>{t("approachPage.phase4p5")}</p></li>
                    <li><p>{t("approachPage.phase4p6")}</p></li>
                </ul>
            </Col>
        </Row>
            </Container>
        </ApproachSixthWrapper>
    );
};

export default ApproachSixth;