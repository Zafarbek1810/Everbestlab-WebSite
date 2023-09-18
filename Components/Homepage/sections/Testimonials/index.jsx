import React from "react";
import { EighthSectionWrapper } from "./EighthSection.style";
import Container from "../../../CommonComponents/Container";
import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useContextSelector } from "use-context-selector";
import { ModalContext } from "../../../../Context/ModalContext/Context";

const testimonials = [
  {
    name: "Maruf",
    job: "CEO, DTM Trucking Inc., USA",
    id: 1,
    text: "testimonials.marufSay",
  },
  {
    name: "Jasurbek Ruzmat",
    job: "CEO at Joyla.uz",
    id: 2,
    text: "testimonials.jasurSay",
  },
  {
    name: "Maruf",
    job: "CEO, DTM Trucking Inc., USA",
    id: 3,
    text: "testimonials.marufSay",
  },
  {
    name: "Jasurbek Ruzmat",
    job: "CEO at Joyla.uz",
    id: 4,
    text: "testimonials.jasurSay",
  },
];

const EighthSection = () => {
  // HOZIR KERAKMAS BU NARSA CLIENTDA HASH-LINK NOTO'GRI ISHLAYAPTI
  // const { domLoaded } = useDomLoaded();

  const setIsModalVisible = useContextSelector(
    ModalContext,
    (state) => state[1],
  );

  const { t } = useTranslation();

  return (
    <>
      <EighthSectionWrapper>
        <div className="anchorLink" id="testimonials"></div>
        <Container>
          <Row>
            <Col span={24} md={8} className="left-col">
              <div>
                <p className="badge">{t("testimonials.title-top")}</p>
                <h2 className="title">{t("testimonials.title")}</h2>
                <p className="subtitle">{t("testimonials.subtitle")}</p>
                <button
                  className="myDefaultButton getBtn"
                  onClick={() => {
                    setIsModalVisible((p) => !p);
                  }}
                >
                  <span>{t("button.btn2")}</span>
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
              </div>
            </Col>
            <Col span={24} md={16} className="swiper-wrapper-col">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                spaceBetween={30}
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                }}
              >
                {testimonials.map(({ name, job, id, text }) => (
                  <SwiperSlide key={id}>
                    <div className="testimonial-item-wr">
                    <div className="testimonials-item">
                      
                    <img src="./left-quotes.png" alt="qoutes" width={66}/>

                      <div className="testimonials-item-inner">
                        <div className="testimonials-item-top">
                          
                        
                          <h5 className="testimonials-item-top__name">
                            {t(name)}
                          </h5>
                          <p className="testimonials-item-top__job">{t(job)}</p>
                        </div>
                        <div className="testimonials-item-bottom">
                          <p className="testimonials-item-bottom__text">
                            {t(text)}
                          </p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </EighthSectionWrapper>
    </>
  );
};

export default EighthSection;
