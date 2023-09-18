import Head from "next/head";
import { NextSeo } from 'next-seo';
import Approach from "../Components/ApproachPage";

export default function Home() {
  return (
    <>
     <NextSeo
        title="Approach - High level quality in every stage, together."
        titleTemplate="High level quality in every stage, together."
        description="Approach page, where we unveil our unique methodology for delivering exceptional results to our clients. At Everbestlab LLC, we believe that a strategic approach is the key to achieving digital success."
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Approach />
    </>
  );
}
