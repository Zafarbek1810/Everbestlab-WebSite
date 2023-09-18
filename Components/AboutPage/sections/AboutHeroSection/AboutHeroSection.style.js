import styled from "styled-components";

const HeroWrapper = styled.div`  
  position: relative; 
   padding-top: 50px;
   padding-bottom: 75px;
  &:before {
    position: absolute;
    
    background-color: #ffffff;
    content: "";
  }
  
  .content {
    position: relative;
    height: auto;
    display: flex;
    align-items: flex-end;
    gap: 40px;
    padding-top: 100px;
  }
  .first {
    width: 50%;
  }
  .first h2 {
    margin: 0;
    padding-bottom: 3px;
    font-size: 55px;
    font-weight: 700;
    color: #000000;
  }
  .first h2 span {
    color: #777777;
  }
  .second {
    width: 50%;
    padding: 0;
    display: flex;
    align-items: flex-end;
  }
  .second p {
    color: #222222;
    font-weight: 400;
    font-size: 19px;
    padding: 0 20px 0 10px;
  }

  // TABLET
  @media (max-width: 991.98px) {
      .first h2{
        font-size: 40px;
      }
      .second p{
        font-size: 15px;
      }
    }
  
    // MOBILE
    @media (max-width: 767.98px) {
      .content{
        width: 100%;
        flex-direction: column;
        gap: 0;
      }
      .first{
        width: 100%;
      }
      .first h2{ 
        font-size: 30px;
      }
      .second{
        padding-top: 20px;
        width: 100%;
      }
      .second p{
        padding: 0;
        font-size: 15px;
      }
    }
 
`;

export { HeroWrapper };
