import styled from "styled-components";

const Wrapper = styled.div`
  padding: 170px 0 90px;

  .countWrapper {
    padding: 40px 0 30px 0;
    margin-top: -100px;
    border-radius: 7px;
    position: relative;
    

    .count-col {
      display: flex;
      flex-direction: column;
      p{
        font-size: 22px;
      }
    }
    .count-col:not(:last-child) {
      border-right: 1px solid #ebe9eb;
    }

    .inCount {
      text-align: center;
      font-size: 70px;
      color: #000;
      font-weight: 700;
      font-family: sans-serif;

      & > span {
        display: inline-block;
        position: relative;
        line-height: 1;
        &:after {
          position: absolute;
          display: block;
          top: 0;
          right: 0;
          line-height: 1;
          font-weight: 100;
          font-size: 0.8em;
          transform: translateY(-100%) translateX(100%);
          
        }
      }
    }

    .count-col:last-child {
      .inCount {
        & > span {
          &:after {
            transform: translateY(-100%) translateX(200%);
          }
        }
      }
    }

    .suffix {
      height: 20px;
      width: 20px;
      font-size: 30px;
      color: #000;
      font-weight: 400;
      margin-left: 60%;
      margin-bottom: 7%;
    }

    .countTitle {
      font-size: 15px;
      font-weight: 400;
      text-align: center;
      color: #000;
      margin-bottom: 0;
    }
  }

  @media (max-width: 991px) {
    .countWrapper {
      margin-top: 20px;
    }
  }

  @media (max-width: 767px) {
    padding: 40px 0 1px;

    .count-col {
      margin-bottom: 40px;
    }
  }
`;

  /* section {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 70px;
  }
  .boxWr {
    width: 33.3%;
    display: flex;
    align-items: flex-start;
    text-align: start;
    flex-direction: column;
  }
  .text {
    font-size: 24px;
  }

  .countup {
    margin: 0;
    margin-top: -30px;
  }
  .counth2 {
    font-size: 85px;
    font-weight: 650;
    font-family: sans-serif;
  }
  // TABLET
  @media (max-width: 991.98px) {
    .text {
      font-size: 20px;
    }

    .countup {
      margin: 0;
      margin-top: -30px;
    }
    .counth2 {
      font-size: 75px;
    }
  }

  // MOBILE
  @media (max-width: 767.98px) {
    section {
      flex-direction: column;
      gap: 10px;
    }
    .boxWr {
      width: 100%;
      padding: 10px;
      display: flex;
      align-items: center;
      text-align: center;
    }
  } */


export { Wrapper };
