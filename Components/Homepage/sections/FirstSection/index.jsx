import React from "react";
import { useTranslation } from "react-i18next";
import FirstSectionWrapper from "./FirstSectionWrapper";
import Container from "../../../CommonComponents/Container";
import MyButton from "../../../CommonComponents/MyButton";
import AnimatedBannerText from "./Components/AnimatedBannerText";
import { useContextSelector } from "use-context-selector";
import { ModalContext } from "../../../../Context/ModalContext/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const FirstSection = () => {
  const [width, setWidth] = React.useState(1);

  const setIsModalVisible = useContextSelector(
    ModalContext,
    (state) => state[1],
  );

  const { t } = useTranslation();

  React.useEffect(() => {
    function handleResize() {
      const { innerWidth } = window;
      setWidth(innerWidth);
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const val = (() => {
    if (width > 1440) {
      return 100;
    } else if (width > 1200) {
      return 90;
    } else if (width > 991) {
      return 80;
    } else if (width > 767) {
      return 60;
    } else if (width < 768) {
      return 50;
    } else {
      return 50;
    }
  })();

  const grad = (() => {
    if (width === 1) {
      return 0;
    }
    const num = val / width;
    const gr = num / 0.0175;
    return gr;
  })();

  return (
    <FirstSectionWrapper>
      <Container>
        <div className="content">
          <AnimatedBannerText />
          <div className="banner-actions">
            <button
              className="myDefaultButton"
              // arrow={true}  
              onClick={() => {
                setIsModalVisible((p) => !p);
              }}
            >
              <span>{t("button.btn2")}</span>
              <FontAwesomeIcon icon={faArrowRightLong} />
            </button>
            <MyButton to="/about" 
            // arrow={false}
            >
            {t("button.btn")}
            </MyButton>
          </div>
        </div>
      </Container>

      <div
        className="firstSectionWrapper__clip"
        style={{ height: val, top: `calc(100vh - ${val}px)` }}
      >
        <div
          className="clip-white"
          style={{ transform: `translateY(100%) rotate(-${grad}deg)` }}
        ></div>
      </div>
    </FirstSectionWrapper>
  );
};

export default FirstSection;
