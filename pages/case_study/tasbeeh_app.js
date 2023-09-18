import Head from "next/head";
import React, { useLayoutEffect } from 'react'
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import TasbeehApp from "../../Components/Homepage/sections/CaseStudies/Apps/Tasbeeh/tasbeeh";
import { HeaderProvider } from "../../Context/HeaderContext";

const Tasbeeh = () => {

  useLayoutEffect(()=>{


    return ()=>{
      document.querySelector('html').style.scrollBehavior='smooth';
    }
  }, [])

  return (
    <>
      <Head>
        <title>Everbestlab - Software Company</title>
        <meta name="description" content="Everbestlab  is a software development and digital transformation company with a commitment to assist businesses capture the markets and deliver outstanding software products." />
        <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderProvider>
        <Header />
        <TasbeehApp />
        <Footer/>
    </HeaderProvider>
    </>
  )
}

export default Tasbeeh;