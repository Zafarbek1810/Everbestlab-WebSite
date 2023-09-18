import Head from "next/head";
import React from "react";
import { NextSeo } from 'next-seo';
import { useTranslation } from "react-i18next";
import ArticlePage from "../Components/ArticlesPage";

const article = {
  title: "article1.title",
  img1: "",
  subtitle: "article1.subtitle",
  texttop:
    "article1.text1",
  img2: "./images/article1.webp",
  textbottom:
    "article1.text3",
  textArray: [
    {
      title: "article1.title1",
      text: "article1.text4",
    },
    {
      title: "article1.title2",
      text: "article1.text5",
    },
    {
      title: "article1.title3",
      text: "article1.text6",
    },
  ],
}

const Article = () => {

  const { t } = useTranslation();

  return (
    <>
     <NextSeo
        title="Top machine Learning Platforms 2022"
        titleTemplate="Top machine Learning Platforms 2022"
        description="Machine learning is a term referring to a computational system with the capability to ingest data, analyze it and spot trends and patterns. As a subdivision of AI, machine learning (ML) systems build algorithms based on sets of sample data and deliver forecast, without being exclusively programmed to do so"
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticlePage article={article} />
    </>
  );
};

export default Article;
