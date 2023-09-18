import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutHeroSection from "./sections/AboutHeroSection";
import AboutSecondSection from "./sections/AboutSecondSection";
import AboutThirdSection from "./sections/AboutThirdSection";
import AboutFourthSection from "./sections/AboutFourthSection";
import AboutFifthSection from "./sections/AboutFifthSection";
import {HeaderProvider} from "../../Context/HeaderContext";
import AboutSixthSection from "./sections/AboutSixthSection";

const AboutPage = () => {
  return (
    <HeaderProvider>
        <Header/>

        <div className="main-content">
          <AboutHeroSection/>
          <AboutSecondSection/>
          <AboutThirdSection/>
          <AboutFifthSection/>
          <AboutFourthSection/>
          <AboutSixthSection />
        </div>

        <Footer/>
    </HeaderProvider>
  );
};

export default AboutPage;
