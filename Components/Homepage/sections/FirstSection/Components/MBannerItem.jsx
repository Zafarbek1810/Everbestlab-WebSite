import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const BannerTexts = [
  {
    title: "hero.title",
    subtitle: "hero.paragr",
  },
  {
    title: "hero.title",
    subtitle: "hero.paragr2",
  },
  {
    title: "hero.title3",
    subtitle: "hero.paragr3",
  },
];

const MBannerItem = ({ item }) => {
  const banner = BannerTexts[item];

  const { t } = useTranslation();

  return (
    <motion.div className="animated-title">
      <div className="text-top">
        <motion.div
          initial={{
            y: "150%",
          }}
          animate={{
            y: "0",
          }}
          exit={{
            y: "150%",
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <h1>{t(banner.title)}</h1>
        </motion.div>
      </div>

      <div className="text-bottom">
        <motion.div
          initial={{
            y: "-150%",
          }}
          animate={{
            y: "0",
          }}
          exit={{
            y: "-150%",
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <h3>{t(banner.subtitle)}</h3>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MBannerItem;
