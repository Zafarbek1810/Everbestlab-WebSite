import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {HeaderProvider} from "../../Context/HeaderContext";
import ApproachFirst from "./sections/ApproachFirst";
import ApproachSecond from "./sections/ApproachSecond";
import ApproachThird from "./sections/ApproachThird";
import ApproachFourth from "./sections/ApproachFourth";
import ApproachFifth from "./sections/ApproachFifth";
import ApproachSixth from "./sections/ApproachSixth";
import ApproachSeventh from "./sections/ApproachSeventh";

const AboutPage = () => {
  return (
    <HeaderProvider>
        <Header isFixed={true}/>

        <div className="main-content">
          <ApproachFirst/>
          <ApproachSecond/>
          <ApproachThird/>
          <ApproachFourth/>
          <ApproachFifth/>
          <ApproachSixth/>
          <ApproachSeventh/>
        </div>

        <Footer/>
    </HeaderProvider>
  );
};

export default AboutPage;