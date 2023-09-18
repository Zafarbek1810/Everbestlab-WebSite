import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import Container from "../CommonComponents/Container";
import MyLink from "../CommonComponents/MyLink";
import useWindowWidth from "../../Hooks/useWindow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterWrapper from "./FooterWrapper.style";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const width = useWindowWidth();

  const val = (() => {
    if (width > 1440) {
      return 160;
    } else if (width > 1200) {
      return 140;
    } else if (width > 991) {
      return 125;
    } else if (width > 767) {
      return 100;
    } else if (width < 768) {
      return 70;
    } else {
      return 700;
    }
  })();

  const grad = (() => {
    const num = val / width;
    const gr = num / 0.0175;
    return gr;
  })();

  const { t } = useTranslation();

  return (
    <>
      <FooterWrapper>
        <div className="clip" style={{ height: val, top: `-${val}px` }}>
          <div
            className="clip-white"
            style={{ transform: `translateY(100%) rotate(-${grad}deg)` }}
          ></div>
        </div>
        <Container>
          <div className="content">
            <Row gutter={[30]}>
              {/* ----------- COL ---------- */}
              <Col span={24} md={24} className="first-col">
                <MyLink to="/">
                  <img
                    className="logo-img"
                    src="/images/static-logo.webp"
                    alt="footer-logo"
                  />
                </MyLink>
                <p>{t("footer.lab-p")}</p>
                <div className="social-icons-wrapper">
                  <a
                    href="https://www.facebook.com/profile.php?id=100089824862898&mibextid=LQQJ4d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/everbestlab/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href="https://www.instagram.com/everbestlab/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </Col>


              {/* ----------- COL ---------- */}
              <Col span={24} md={8} className="second-col col">
                <h5 className="title">{t("footer.contact")}</h5>
                <p>
                  <span className="subtitle">{t("footer.address")} </span>
                  {t("footer.address-span")}
                </p>
                <p>
                  <span className="subtitle">{t("footer.address")} </span>
                  {t("footer.address-span2")}
                </p>
                <p>
                  <a
                    className="contact-link"
                    href="mailto:bobur@everbestlab.com"
                  >
                    <span className="subtitle">{t("footer.email")} </span>
                    <span className="span-value">bobur@everbestlab.com</span>
                  </a>
                </p>
                <p>
                  <a className="contact-link" href="tel:+17733092111">
                    <span className="subtitle">{t("footer.phone2")} </span>
                    <span className="span-value">+1 773 309 21 11</span>
                  </a>
                </p>
                <p>
                  <a className="contact-link" href="tel:+998942345432">
                    <span className="subtitle">{t("footer.phone2")} </span>
                    <span className="span-value">+99894 234 54 32</span>
                  </a>
                </p>
              </Col>

              {/* ----------- COL ---------- */}
              <Col span={24} md={8} className="third-col col">
                <h5 className="title">{t("footer.service")} </h5>
                <p>
                  <MyLink to={"/#services"}>{t("footer.serv1")} </MyLink>
                </p>
                <p>
                  <MyLink to={"/#services"}>{t("footer.serv2")} </MyLink>
                </p>
                <p>
                  <MyLink to={"/#services"}>{t("footer.serv3")} </MyLink>
                </p>
                <p>
                  <MyLink to={"/#services"}>{t("footer.serv4")} </MyLink>
                </p>
                <p>
                  <MyLink to={"/#services"}>{t("footer.serv5")} </MyLink>
                </p>
              </Col>

              {/* ----------- COL ---------- */}
              <Col span={24} md={8} className="fourth-col col">
                <h5 className="title">{t("footer.news-title")} </h5>
                <p>
                  <MyLink to="/article-1" className="subtitle">
                  {t("footer.news1")} 
                  </MyLink>
                </p>
                <p>
                  <MyLink to="/article-2" className="subtitle">
                  {t("footer.news2")} 
                  </MyLink>
                </p>
                <p>
                  <MyLink to="/article-3" className="subtitle">
                  {t("footer.news3")} 
                  </MyLink>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="footer_bottom">
          <p> {t("footer.bottom")} </p>
        </div>
      </FooterWrapper>
    </>
  );
};

export default Footer;
