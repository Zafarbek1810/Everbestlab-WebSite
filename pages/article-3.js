import Head from "next/head";
import React from "react";
import { NextSeo } from 'next-seo';
import ArticlePage from "../Components/ArticlesPage";

const article = {
  title: "article3.title",
  img1: "",
  subtitle: "article3.subtitle",
  texttop:
    "article3.text1",
  img2: "./images/article3.webp",
  textbottom:
    "article3.text4",
  textArray: [
    {
      title: "article3.title1",
      text:
        "article3.text5"
    },
    {
      title: "article3.title2",
      text:
        "article3.text6",
    },
    {
      title: "article3.title3",
      text: "article3.text11",
    },
    {
      title: "article3.title4",
      text:
        "article3.text12"
    },
  ],
}

const Article = () => {
  return (
    <>
     <NextSeo
        title="What is electronic document management and why is it important"
        titleTemplate="What is electronic document management and why is it important"
        description="In contemporary era, nobody likes dealing with paperwork. That’s especially the case when you have just set up a business and there are a hundred and one things to do."
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticlePage article={article} />
    </>
  );
};

export default Article;

