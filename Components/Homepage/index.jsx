import React from "react";
import { HeaderProvider } from "../../Context/HeaderContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// ----------- SECTIONS --------------
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import Services from "./sections/Services";
import Counter from "./sections/Counter";
import CaseStudies from "./sections/CaseStudies";
import Approach from "./sections/Approach";
import Brands from "./sections/Brands";
import Testimonials from "./sections/Testimonials";
import Insights from "./sections/Insights";
import HomePageContactForm from "./sections/HomePageContactForm";

const Homepage = () => {
  return (
    <HeaderProvider>
        <Header />

        <div className="main-content">
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <Services />
          <Counter />
          <CaseStudies />
          <Approach />
          <Brands />
          <Testimonials />
          <Insights />
          <HomePageContactForm />
        </div>

        <Footer />
    </HeaderProvider>
  );
};

export default Homepage;
