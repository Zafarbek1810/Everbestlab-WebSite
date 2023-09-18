import React from 'react';
import Container from '../CommonComponents/Container';
import FirtsSectionArticle from './sections/FirtsSectionArticle';
import SecondSectionArticle from './sections/SecondSectionArticle';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {HeaderProvider} from "../../Context/HeaderContext";

const ArticlePage = ({article}) => {
  return (
    <HeaderProvider>
        <Header isFixed={true} />
        <Container>
          <FirtsSectionArticle article={article}/>
          <SecondSectionArticle article={article}/>
        </Container>
        <Footer/>
    </HeaderProvider>
  );
};

export default ArticlePage;