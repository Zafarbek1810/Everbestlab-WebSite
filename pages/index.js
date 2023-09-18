import React from "react";
import Head from "next/head";
import Homepage from "../Components/Homepage";
import { NextSeo } from 'next-seo';
import AOS from 'aos';

export default function Home() {
  React.useEffect(( ) => {
    AOS.init({ once: true });
  }, [])

  return (
    <>
    <NextSeo
        title="Everbestlab - Software Company"
        titleTemplate="Everbestlab - Custom Software Development Company based in Tashkent"
        description="Everbestlab is a software development and digital transformation company with a commitment to assist businesses capture the markets and deliver outstanding software products."
      />
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </>
  );
}