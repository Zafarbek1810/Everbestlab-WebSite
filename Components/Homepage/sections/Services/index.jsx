import React from "react";
import { FourthSectionWrapper } from "./FourthSection.style";
import Container from "../../../CommonComponents/Container";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const slides = [
  {
    title: "service.info-title1",
    icon: "./icons/layers.webp",
    image: "./services/software.webp",
    text: "service.info-text1",
  },
  {
    title: "service.info-title2",
    icon: "./icons/app-development.webp",
    image: "./services/mobile.webp",
    text: "service.info-text2",
  },
  {
    title: "service.info-title3",
    icon: "./icons/web-development.webp",
    image: "./services/web.webp",
    text: "service.info-text3",
  },
  {
    title: "service.info-title4",
    icon: "./icons/layers.webp",
    image: "./services/cosultancy.webp",
    text: "service.info-text4"
  },
  {
    title: "service.info-title5",
    icon: "./icons/ux-design.webp",
    image: "./services/ux-ui.webp",
    text: "service.info-text5",
  },
];

const FourthSection = () => {
  // HOZIR KERAKMAS BU NARSA CLIENTDA HASH-LINK NOTO'GRI ISHLAYAPTI
  // const { domLoaded } = useDomLoaded();

  const { t } = useTranslation();

  return (
    <>
      <FourthSectionWrapper>
        <div className="anchorLink" id="services"></div>
        <Container>
          <div className="top">
            <div className="title-wrapper">
              <span className="badge">{t("service.title-top")}</span>
              <h2 className="title">{t("service.title")}</h2>
            </div>
            <div className="top-text">
              <p>
              {t("service.text-top")}
              </p>
            </div>
          </div>
          <div className="swiperWrapper">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              breakpoints={{
                200: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {slides.map(({ title, text, icon, image }) => (
                <SwiperSlide key={title}>
                  <div className="swiper-item">
                    <div className="swiper-inner">
                      <div className="main-content">
                        <img src={icon} alt="Ит консультация" width={40} height={40} />
                        <h4>{t(title)}</h4>
                        <p>{t(text)}</p>
                      </div>
                      {/* <div
                        className="inner-hover"
                        style={{ backgroundImage: `url(${image})` }}
                      >
                        <MyButton to="/#services" className="more-btn" arrow={true}>
                          Learn More
                        </MyButton>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </FourthSectionWrapper>
    </>
  );
};

export default FourthSection;
