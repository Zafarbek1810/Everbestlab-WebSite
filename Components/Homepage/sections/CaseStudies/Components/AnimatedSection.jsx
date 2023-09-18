import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Wrapper } from "./AnimatedSection.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import MyLink from "../../../../../Components/CommonComponents/MyLink";

const allCards = [
  {
    title: "Tasbeeh App",
    badge: "Technology",
    category: "mobile",
    categoryText: "recentProjects.category1",
    img: "./caseStudy/TasbeehApp.png",
    id: 1,
    imgPosition: "square",
    path: "/case_study/tasbeeh_app",
  },
  {
    title: "RevoSc Tech",
    badge: "Technology",
    category: "web / design",
    categoryText: "recentProjects.category2",
    img: "./caseStudy/InvestmentPlatform.webp",
    id: 2,
    imgPosition: "center center",
    path: "https://revosc.com",
  },
  {
    title: "DTM Trucking",
    badge: "Badge text",
    category: "web",
    categoryText: "recentProjects.category3",
    img: "./caseStudy/TruckingService.webp",
    id: 3,
    imgPosition: "center left",
    path: "https://www.dtmtruckinginc.us/",
  },
  {
    title: "PGH Express",
    badge: "Badge text",
    category: "web",
    categoryText: "recentProjects.category4",
    img: "./caseStudy/LogisticsBusiness.webp",
    id: 4,
    imgPosition: "center",
    path: "http://pghexpresslp.com/",
  },
  {
    title: "Edu Track",
    badge: "Badge text",
    category: "web",
    categoryText: "recentProjects.category5",
    img: "./caseStudy/TrainingCenter.webp",
    id: 5,
    imgPosition: "center",
    path: "http://edutruck.uz",
  },
  {
    title: "Joyla Uz",
    badge: "Badge text",
    category: "design/ mobile",
    categoryText: "recentProjects.category6",
    img: "./caseStudy/ClassifiedAds.webp",
    id: 6,
    imgPosition: "center",
    path: "/case_study/joyla_app",
  }, 
  {
    title: "Document Management",
    badge: "Badge text",
    category: "Enterprise Software",
    categoryText: "recentProjects.category7",
    img: "./caseStudy/DocumentManagement.webp",
    id: 8,
    imgPosition: "center",
    path: "http://info.24m.uz/",
  },  
];

const categories = [
  {
    text: "recentProjects.optionText1",
    set: null,
  },
  {
    text: "recentProjects.optionText2",
    set: "web",
  },
  {
    text: "recentProjects.optionText3",
    set: "mobile",
  },
  {
    text: "recentProjects.optionText4",
    set: "design",
  },
  {
    text: "recentProjects.optionText5",
    set: "Enterprise Software",
  },
];

const AnimatedSection = () => {
  const [category, setCategory] = useState(null);
  const [cards, setCards] = useState(allCards);

  useEffect(() => {
    if (category === null) {
      setCards(allCards);
    } else {
      setCards(allCards.filter((item) => item.category.includes(category)));
    }
  }, [category]);

  const { t } = useTranslation();

  return (
    <Wrapper layout>
      <div className="categories">
        <ul>
          {categories.map((btn) => {
            const className = ["categories_btn"];
            if (btn.set === category) className.push("active");

            return (
              <li key={btn.text}>
                <button
                  className={className.join(" ")}
                  onClick={() => setCategory(btn.set)}
                >
                  <FontAwesomeIcon icon={faArrowRightLong} />
                  <span>
                    {t(btn.text)}
                    &nbsp;
                    {btn.set === category ? (
                      <sup>{cards.length}</sup>
                    ) : (
                      <sup style={{ color: "transparent" }}>&nbsp;&nbsp;</sup>
                    )}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <motion.div className="animation-place-wrapper" layout={true}>
        <LayoutGroup layout={true}>
          <AnimatePresence exitBeforeEnter={true}>
            {cards.map((item) => (
              <motion.div
                layout={true}
                key={item.id}
                style={{ transformOrigin: "center" }}
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                exit={{ transform: "scale(0)" }}
                transition={{ duration: 0.3 }}
                className="card-item"
              >
                <div
                  className="card-inner"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundPosition: item.imgPosition,
                  }}
                >
                  <div className="card-content">
                    {item.target !== "default" ? (
                      <a
                        className="card-main"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="card-main__badge">
                          {t(item.categoryText)}
                        </span>
                        <span className="card-main__title">{item.title}</span>
                      </a>
                    ) : (
                      <MyLink className="card-main" to={item.path} onClick={()=>{
                        document.querySelector('html').style.scrollBehavior='auto';
                      }}>
                        <span className="card-main__badge">
                          {t(item.category)}
                        </span>
                        <span className="card-main__title">{t(item.title)}</span>
                      </MyLink>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </LayoutGroup>
      </motion.div>
    </Wrapper>
  );
};

export default AnimatedSection;
