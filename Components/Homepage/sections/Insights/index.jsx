import { Col, Row } from "antd";
import React from "react";
import Container from "../../../CommonComponents/Container";
// import MyButton from "../../../CommonComponents/MyButton";
import { TenthSectionWrapper } from "./TenthSection.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { useTranslation } from "react-i18next";
import MyLink from "../../../CommonComponents/MyLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    img: "./images/article1.webp",
    alt: "ИТ сервисы в ташкенте",
    title: "insights.ins-title1",
    comment: "2 COMMENT",
    before: "insights.before1",
    href: "/article-1",
    descr: "insights.ins-descr1",
  },
  {
    img: "./images/article2.webp",
    alt: "Ayti xizmatlar",
    title: "insights.ins-title2",
    comment: "2 COMMENT",
    before: "insights.before2",
    href: "/article-2",
    descr: "insights.ins-descr2",
  },
  {
    img: "./images/article3.webp",
    alt: "Veb saytlar yasash",
    title: "insights.ins-title3",
    comment: "2 COMMENT",
    before: "insights.before3",
    href: "/article-3",
    descr: "insights.ins-descr3",
  },
];

const TenthSection = () => {
  // HOZIR KERAKMAS BU NARSA CLIENTDA HASH-LINK NOTO'GRI ISHLAYAPTI
  // const { domLoaded } = useDomLoaded();

  const { t } = useTranslation();

  return (
    <TenthSectionWrapper>
      <div className="anchorLink" id="insights"></div>
      <Container>
        <Row className="top">
          <Col className="top__left" span={24} md={12}>
            <div className="badge">
              <span>{t("insights.top-title")}</span>
            </div>
            <h2 className="title">{t("insights.title")}</h2>
          </Col>
          {/* <Col className="top__right" span={24} md={12}>
            <MyButton to="/#insights" className="all-btn" arrow={false}>
              Read All
            </MyButton>
          </Col> */}
        </Row>
        <div className="bottom">
          <Row gutter={16} className="cards-row" justify="space-evenly">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              // navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              breakpoints={{
                // when window width is >= 640px
                200: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                1000: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
            >
              {data.map((v, i) => (
                <SwiperSlide key={i}>
                  <Col className="cards-col" key={i}>
                    <div className="card-top">
                      <div className="before">{t(v.before)}</div>
                      <img src={v.img} alt={v.alt} />
                    </div>
                    <div className="card-bottom">
                      <h3>
                        <MyLink to={v.href} className="cards-link">
                          {t(v.title)}
                        </MyLink>
                      </h3>
                      <div className="link-wr">
                        <p className="descr">{t(v.descr)}</p>
                        <MyLink to={v.href} className="learn-link">
                          <span>{t("button.btn3")}</span>

                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="learn-arrow-initial"
                          />

                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="learn-arrow-onHover"
                          />
                        </MyLink>
                      </div>
                    </div>
                  </Col>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </div>
      </Container>
    </TenthSectionWrapper>
  );
};

export default TenthSection;
