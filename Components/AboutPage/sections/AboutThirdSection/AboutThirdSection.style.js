import styled from "styled-components";

const Wrapper = styled.div`
  height: auto;
  padding-top: 90px;

  .section1 {
    width: 100%;
    padding: 40px 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
  }
  .first {
    max-width: 50%;
  }
  .first h2 {
    margin: 0;
    padding-top: 10px;
    font-size: 55px;
  }

  .second {
    width: 50%;
    padding-top: 33px;
  }
  .p1 {
    font-size: 24px;
  }
  .p2 {
    font-size: 18px;
  }

  .section2 {
    padding: 40px 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .first1 {
    width: 50%;
  }
  .info {
    max-width: 100%;
    display: flex;
    align-content: center;
    gap: 10px;
  }
  .second1 {
    width: 50%;
  }
  .person-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #0499f3;
  }
  .person-info h4 {
    margin: 0;
    padding-top: 2px;
    font-size: 19px;
    font-weight: 700;
  }
  .person-info p {
    font-size: 18px;
  }

  .second1 {
    font-size: 35px;
  }

  // MOBILE
  @media (max-width: 767.98px) {
    .section1 {
      flex-direction: column;
    }
    .first {
      max-width: 100%;
    }
    .first h2 {
      width: 100%;
      font-size: 38px;
      font-weight: 600;
    }
    .second {
      width: 100%;
    } 
  }
`;

export { Wrapper };
