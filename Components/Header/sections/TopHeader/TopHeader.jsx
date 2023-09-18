import React from "react";
import TopHeaderWrapper from "./TopHeaderWrapper";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const TopHeader = () => {

  const { t } = useTranslation();

  return (
    <TopHeaderWrapper>
      <div className="content">
        <div className="left_side">
          <a href="tel:998942345432">
            <FontAwesomeIcon icon={faPhone} />
            +99894 234 54 32
          </a>
          <p className="location">
            <FontAwesomeIcon icon={faLocationDot} />
           {t("footer.address-span2")}
          </p>
          <a href="mailto:bobur@everbestlab.com">
            <FontAwesomeIcon icon={faEnvelope} />
            bobur@everbestlab.com
          </a>
        </div>
        <div className="right_side">
          <a href="https://www.facebook.com/profile.php?id=100089824862898&mibextid=LQQJ4d" target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href="https://www.linkedin.com/company/everbestlab/" target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.instagram.com/everbestlab/" target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </TopHeaderWrapper>
  );
};

export default TopHeader;
