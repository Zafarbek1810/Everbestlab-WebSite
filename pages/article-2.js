import Head from "next/head";
import React from "react";
import { NextSeo } from 'next-seo';
import ArticlePage from "../Components/ArticlesPage";

const article = {
  title: "article2.title",
  img1: "",
  subtitle: "article2.subtitle",
  texttop:
    "article2.text1",
  img2: "./images/article2.webp",
  textbottom:
    "article2.text3",
  textArray: [
    {
      title: "article2.title1",
      text: "article2.text4",
    },
    {
      title: "article2.title2",
      text: "article2.text5",
    },
    {
      title: "article2.title3",
      text: "article2.text6",
    },
    {
      title: "article2.title4",
      text:
        "article2.text7"
    },
    {
      title: "article2.title5",
      text:
        "article2.text8"
    },
  ],
}

const Article = () => {
  return (
    <>
     <NextSeo
        title="The 5 Key Benefits to Using Agile Methodology"
        titleTemplate="The 5 Key Benefits to Using Agile Methodology"
        description="In today's world of project management, Agile stands as one of the most popular approaches due to its flexibility and evolutionary nature."
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticlePage article={article} />
    </>
  );
};

export default Article;
