import React from "react";
import Container from "../../CommonComponents/Container";
import { useTranslation } from "react-i18next";
import { SecondSectionArticleWrapper } from "./SecondSectionArticle.style";

const SecondSectionArticle = ({ article }) => {

  const { t } = useTranslation();

  return (
    <SecondSectionArticleWrapper>
      <Container>
        <p>{t(article?.texttop)}</p>
        <img src={`${article?.img2}`} alt="image" />
        <p>{t(article?.textbottom)}</p>
        {article.textArray.map((v, i) => {
          return (
            <div key={i}>
              <h4>{t(v.title)}</h4>
              <p>{t(v.text)}</p>
            </div>
          );
        })}
      </Container>
    </SecondSectionArticleWrapper>
  );
};

export default SecondSectionArticle;
