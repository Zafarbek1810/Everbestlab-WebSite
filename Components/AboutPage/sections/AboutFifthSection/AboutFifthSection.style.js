import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 0 30px;
  text-align: start;
  height: auto;
  background-color: #0b0c33;
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .top {
    margin-bottom: 40px;
    h3 {
      font-size: 40px;
      margin-top: 10px;
      margin-bottom: 20px;
      /* font-weight: 600; */
      color: #009cf1;
    }
    h2 {
      font-size: 18px;
      margin-top: 0;
      color: #9d9d9d;
      margin-bottom: 16px;
    }
  }
  .wrapper {
    width: 100%;
    height: auto;
  }
  .values-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .right-img {
    width: 40%;
    img {
      border-radius: 20px;
      width: 450px;
      filter: grayscale(99%);
      transition: 0.2s;
      :hover {
        filter: grayscale(0);
      }
    }
  }
  .value-item {
    display: flex;
    flex-wrap: wrap;
    /* margin-left: 15px; */
    margin-right: 25px;
    width: calc(50% - 25px);
    margin-bottom: 20px;
  }

  .value-inner {
    display: flex;
    flex-direction: column;
    text-align: start;

    span {
      width: 55px;
      padding: 10px;
      border-radius: 12px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #203141;
    }

    h4 {
      font-weight: 700;
      font-size: 24px;
      margin-top: 0;
      margin-bottom: 12px;
      color: #fff;
    }

    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.5;
      text-align: start;
      color: #9d9d9d;
      /* : "Open Sans", "Muli", sans-serif; */
    }
  }

  // TABLET
  @media (max-width: 991.98px) {
    flex-direction: column;
    .top {
      margin-bottom: 40px;
      h3 {
        font-size: 40px;
        margin-top: 10px;
        margin-bottom: 20px;
        font-weight: 600;
        color: #8d7bf4;
      }
      h2 {
        font-size: 15px;
        margin-top: 0;
        color: #9d9d9d;
        margin-bottom: 16px;
      }
    }
    section {
      width: 100%;
      flex-direction: column;
    }
    .values-wrapper {
      width: 100%;
      margin-left: -15px;
      display: flex;
      flex-wrap: wrap;
    }
    .right-img {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .value-item {
      display: flex;
      flex-wrap: wrap;
      margin-left: 15px;
      margin-right: 15px;
      width: calc(50% - 30px);
      margin-bottom: 20px;
    }

    .value-inner {
      display: flex;
      flex-direction: column;
      text-align: start;

      span {
        width: 45px;
        padding: 10px;
        border-radius: 12px;
        margin-bottom: 8px;
      }

      h4 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }
    }

    @media (max-width: 767px) {
      .values-wrapper {
        width: 100%;
      }
      .value-item {
        width: calc(50% - 30px);
      
      }
      .value-inner {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        text-align: start;

        span {
          width: 45px;
          padding: 10px;
          border-radius: 12px;
          margin-bottom: 8px;
        }

        h4 {
          font-size: 18px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }
`;

export { Wrapper };
