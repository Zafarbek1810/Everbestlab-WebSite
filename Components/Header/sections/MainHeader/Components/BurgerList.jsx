import React, { useContext, useState } from "react";
import MyLink from "../../../../CommonComponents/MyLink";
import { LINKS } from "../MainHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { HeaderContext } from "../../../../../Context/HeaderContext";
import { useTranslation } from "react-i18next";

const BurgerList = ({ burger, setIsModalVisible }) => {
  const [burgerDrop, setBurgerDrop] = useState(false);
  const { setBurger } = useContext(HeaderContext);

  const { t } = useTranslation();

  return (
    <div className={`burger-list-wrapper ${burger ? "open" : "close"}`}>
      <ul className="burger-list">
        {LINKS.map(({ name, path, id, dropMenu }) => (
          <li key={id} className="burger-item">
            {dropMenu ? (
              <>
                <div
                  onClick={() => setBurgerDrop((p) => !p)}
                  className="burger-link drop-link"
                >
                  <span>{t(name)}</span>
                  <FontAwesomeIcon
                    style={{ transform: burgerDrop ? "rotate(-180deg)" : "" }}
                    icon={faAngleDown}
                  />
                </div>
                <div
                  className="burger-drop-wrapper"
                  style={{
                    maxHeight: burgerDrop ? "200px" : 0,
                  }}
                >
                  <ul>
                    {dropMenu.map((item) => (
                      <li key={item.id}>
                        <MyLink to={item.path}>{t(item.title)}</MyLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <MyLink
                onClick={() => setBurger(false)}
                to={path}
                className="burger-link"
              >
                {t(name)}
              </MyLink>
            )}
          </li>
        ))}
      </ul>
      <button
        className="myDefaultButton burger-getBtn"
        onClick={() => {
          setBurger(false);
          setIsModalVisible((p) => !p);
        }}
      >{t("button.btn2")}
      </button>
    </div>
  );
};

export default BurgerList;
