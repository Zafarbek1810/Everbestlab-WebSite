import Head from "next/head";
import { NextSeo } from 'next-seo';
import AboutPage from "../Components/AboutPage";

export default function Home() {
  return (
    <>
     <NextSeo
        title="About Us - Transforming your vision into reality with our expertise."
        titleTemplate="Transforming your vision into reality with our expertise."
        description="We are a trusted software outsourcing partner with customer satisfaction in mind."
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutPage />
    </>
  );
}
