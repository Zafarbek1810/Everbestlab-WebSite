import styled from "styled-components";

const ApproachThirdWrapper = styled.div`
  padding: 100px 0;
  background: rgba(1, 116, 243, 0.05);
  .roww {
    display: flex;
    justify-content: space-between;

    .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 70%;
      h3 {
        font-family: "PT Sans Caption";
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 150%;
        letter-spacing: -0.022em;
        color: #000000;
        span {
          margin-left: 15px;
          color: #0174f3;
        }
      }

      ul {
        margin-left: 30px;
        list-style: outside;
        li {
          p {
            font-family: "PT Sans" sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 30px;
            color: #000000;
          }
        }
      }
    }

    .right {
      width: 50%;
      img {
      }
    }
  }
  @media (max-width: 676px) {
    .left {
      width: 50%;
      h3 {
        font-size: 30px !important;
      }

      p {
        font-size: 17px !important;
      }
    }
  }
  @media (max-width: 767px) {
    .roww {
      flex-direction: column;
      align-items: center;
    }
    .left {
      width: 100%;
    }

    .right {
      width: 100%;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;

export { ApproachThirdWrapper };
