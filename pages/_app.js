import Head from "next/head";
import React, { useEffect, useState } from "react";
import MyTawk from "../Components/Tawk";
import Modal from "../Components/ContactModal";
import FormModal from "../Components/ContactModal/FormModal";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ModalProvider } from "../Context/ModalContext/Context";

import "react-phone-number-input/style.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "antd/dist/antd.css";
import "antd/dist/antd.css";
import "aos/dist/aos.css";

import "../styles/globals.css";
import Loader from "../Components/CommonComponents/Loader/Loader";

config.autoAddCss = false;

if (typeof window === undefined) {
  var window = {};
}

const lang = window?.localStorage?.getItem("siteLang") || "en";
console.log(lang);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "kr"],
    lng: lang,
    fallbackLng: "en",
    detectionL: {
      order: ["htmlTag", "cookie", "localStorage", "subdomain", "path"],
      caches: ["cookie"],
    },
    ns: ["translation"],
    backend: {
      loadPath: "/assets/locales/{{lng}}/{{ns}}.json",
    },
    react: { useSuspense: true },
  });

function MyApp({ Component, pageProps }) {

  const {
    i18n: { language },
    i18n,
  } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("siteLang")) || "en";
    setTimeout(() => {
      setLoading2(false);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }, 1500); 
  }, []);      

  return (
    <>
     <Head>
       <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
       <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModalProvider>
        <Component {...pageProps} />
        <Modal>
          <FormModal />
        </Modal>
          {loading && <Loader loading2={loading2} />}
        <MyTawk />
      </ModalProvider>
    </>
  );
}

export default MyApp;
