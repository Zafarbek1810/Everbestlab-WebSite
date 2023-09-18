import React from "react";
import TopHeader from "./sections/TopHeader/TopHeader";
import MainHeader from "./sections/MainHeader/MainHeader";

const Header = ({isFixed, isArticlePage}) => {
  return (
    <>
      <TopHeader />
      <MainHeader isFixed={isFixed} isArticlePage={isArticlePage}/>
    </>
  );
};

export default Header;
