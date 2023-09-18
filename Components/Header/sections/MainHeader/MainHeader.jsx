import React, { useEffect, useState, useRef, useContext } from "react";
import MainHeaderWrapper from "./MainHeaderWrapper";
import MyLink from "../../../CommonComponents/MyLink";
import Container from "../../../CommonComponents/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BurgerList from "./Components/BurgerList";
import { HeaderContext } from "../../../../Context/HeaderContext";
import useWindowDimensions from "../../../../Hooks/useWindow";
import { useContextSelector } from "use-context-selector";
import { useTranslation } from "react-i18next";
import Select from 'react-select';
import { ModalContext } from "../../../../Context/ModalContext/Context";
import i18next from "i18next";

export const LINKS = [
  {
    name: "header.home",         
    path: "/about",          
    id: 1,                   
  },
  {
    name: "header.service",
    path: "/#services",
    dropMenu: [
      {
        title: "header.dropmenu1",
        path: "/#services",
        id: 2.1,
      },
      {
        title: "header.dropmenu2",
        path: "/#services",
        id: 2.2,
      },
      {
        title: "header.dropmenu3",
        path: "/#services",
        id: 2.3,
      },
      {
        title: "header.dropmenu4",
        path: "/#services",
        id: 2.4,
      },
      {
        title: "header.dropmenu5",
        path: "/#services",
        id: 2.5,
      },
    ],
    id: 2,
  },
  {
    name: "header.success",
    path: "/#case",
    id: 3,
  },
  {
    name: "header.approach",
    path: "/approach",
    id: 4,
  },
  {
    name: "header.testimonials",
    path: "/#testimonials",
    id: 5,
  },
  {
    name: "header.insights",
    path: "/#insights",
    id: 6,
  },
  {
    name: "header.contact",
    path: "/#contacts",
    id: 7,
  },
];

const languageOptions = [
  { value: 'en', label: 'EN' },
  { value: 'kr', label: 'KR' }
];

const MainHeader = ({ isFixed }) => {

  const { t, i18n } = useTranslation();
  const defaultLang = i18n.language; 

  // const handleChange = (e) => {
  //   localStorage.setItem("siteLang", e);
  //   console.log(e);
  //   i18n.changeLanguage(e);
  // };

  const [selectedOption, setSelectedOption] = useState(
    languageOptions.find((option) => option.value === i18next.language)
  );

  const handleChange = (option) => {
    setSelectedOption(option);
    i18next.changeLanguage(option.value);
  };



  const [header, setHeader] = useState("header");
  const width = useWindowDimensions();
  const { burger, handleBurger, setBurger } = useContext(HeaderContext);
  const ref = useRef(null);

  const setIsModalVisible = useContextSelector(
    ModalContext,
    (state) => state[1],
  );

  useEffect(() => {
    const listenScrollEvent = () => {
      if (window.scrollY < 40) {
        return setHeader("header");
      } else if (window.scrollY > 40) {
        return setHeader("header2");
      }
    };
    const listenClickWindow = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (
        path.includes(document.querySelector(".content.header")) ||
        path.includes(document.querySelector(".content.header2"))
      ) {
      } else {
        setBurger(false);
      }
    };

    window.addEventListener("scroll", listenScrollEvent);
    window.addEventListener("click", listenClickWindow);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
      window.removeEventListener("click", listenClickWindow);
    };
  }, []);

  return (
    <MainHeaderWrapper ref={ref} isFixed={isFixed}>
      <div className={`content ${header}`}>
        <div className="logo">
          <MyLink to="/" onClick={() => setBurger(false)}>
            {/*//! TODO -- imagen src-ini optimizatsiya qiliw kerak  */}
            <img
              src={
                width > 991
                  ? header !== "header"
                    ? `/images/fixed-logo.webp`
                    : isFixed
                    ? `/images/fixed-logo.webp`
                    : `/images/static-logo.webp`
                  : `/images/fixed-logo.webp`
              }
              alt="Burger logo-img"
              width={225}
              height={32}
            />
          </MyLink>
        </div>
        <Container className="navbar-wrapper">
          <ul className="links_cont">
            {LINKS.map(({ name, path, id, dropMenu }) => (
              <li key={id}>
                <MyLink to={path}>
                  <div className="navs">
                    <FontAwesomeIcon
                      className="arrow-svg"
                      icon={faArrowRight}
                    />
                    <p>{t(name)}</p>
                    {dropMenu && (
                      <FontAwesomeIcon
                        className="angle-svg"
                        icon={faAngleDown}
                      />
                    )}
                  </div>
                </MyLink>
                {dropMenu && (
                  <div className="dropdown">
                    <ul className="dropdown__list">
                      {dropMenu.map((drop, idx) => (
                        <li key={idx} className="dropdown__item">
                          <MyLink to={drop.path} className="dropdown__link">
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span>{t(drop.title)}</span>
                          </MyLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Container>

        <div>
              <Select

                className="selectOp"
                id="lang"
                value={selectedOption}
                options={languageOptions}
                onChange={handleChange}
                defaultValue={languageOptions[0]}

                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                   background: 'transparent',
                   width: '60px',
                   ...(state.dropdownIndicator ? { 
                    padding: '0',
                  } : {})
                   
                  }),
                  indicatorsContainer: (base) => {
                    return {
                      ...base,
                      padding: '0',
                      margin: '-5px'
                    }
                  },
                  valueContainer: (base) => {
                    return {
                      ...base,
                      padding: '0',
                      margin: '5px'
                    }
                  },
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    width: '60px',
                    
                    ...(state.isHovered ? {
                      color: 'red',
                    } : {}),
                     
                    ...(state.isSelected ? {
                      color: '#fff',
                    } : {})

                  }),
                  menu: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? 'white' : 'white',
                    background: '#f5f5f5',
                    color: 'black',
                    width: '60px'
                  }),
                  dropdownIndicator: (baseStyles, state) => ({
                    ...baseStyles,
                    
                    ...(state.isHovered ? {
                      padding: '0',
                    } : {}) 

                  }),
                  
                }}
              
              />
            </div>

        <button
          onClick={() => {
            setIsModalVisible((p) => !p);
          }}
          className="myDefaultButton getBtn"
        >
          {t("button.btn2")}
        </button>
        <div
          onClick={handleBurger}
          className={`burger-btn ${burger ? "open" : "close"}`}
        >
          <span></span>
        </div>
        <BurgerList burger={burger} setIsModalVisible={setIsModalVisible} />
      </div>
    </MainHeaderWrapper>
  );
};

export default MainHeader;
