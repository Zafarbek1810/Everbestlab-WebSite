import React from "react";
import Container from "../../CommonComponents/Container";
import { useTranslation } from "react-i18next";
import { FirstSectionArticleWrapper } from "./FirstSectionArticle.style";

const FirtsSectionArticle = ({ article }) => {

  const { t } = useTranslation();

  return (
    <FirstSectionArticleWrapper>
      <Container>
        <h1>{t(article?.title)}</h1>

        <h3>{t(article?.subtitle)}</h3>
        <hr />
      </Container>
    </FirstSectionArticleWrapper>
  );
};

export default FirtsSectionArticle;