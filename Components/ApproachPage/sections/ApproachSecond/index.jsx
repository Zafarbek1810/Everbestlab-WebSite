import React from "react";
import { ApproachSecondWrapper } from "./ApproachSecond.style";
import Container from "../../../CommonComponents/Container";
import { useTranslation } from "react-i18next";

const ApproachSecond = () => {
  const { t } = useTranslation();

  return (
    <ApproachSecondWrapper>
      <Container>
        <span className="subtitle">{t("approachPage.how-work")}</span>

        <h3>{t("approachPage.hw-title")}</h3>
        <p>{t("approachPage.hw-p")}</p>
      </Container>
    </ApproachSecondWrapper>
  );
};

export default ApproachSecond;
