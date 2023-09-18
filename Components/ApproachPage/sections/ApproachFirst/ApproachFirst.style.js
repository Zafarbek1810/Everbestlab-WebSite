import styled from "styled-components";

const AproachFirstWrapper = styled.div`
  background-color: #e5e5e5;
  padding: 200px 0 50px 0;
  text-align: center;
  .subtitle {
    font-family: "PT Sans Caption" sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #0174f3;
    flex: none;
    order: 0;
    flex-grow: 0;
    background: rgba(1, 116, 243, 0.1);
    border-radius: 25px;
    padding: 10px 35px;
  }

  h3 {
    margin-top: 50px;
    margin-bottom: 50px;
    font-family: "PT Sans Caption" sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 46px;
    color: #000000;
    span {
      color: #0174f3;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
      width: 80%;
      margin-bottom: 30px;
    }
    p {
      width: 70%;
      font-family: "PT Sans" sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 150%;
      text-align: center;
      letter-spacing: -0.022em;
      color: #000000;
    }
  }
  @media (max-width: 767px) {
    .card p {
      width: 80%;
      font-family: "PT Sans" sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 150%;
      text-align: center;
      letter-spacing: -0.022em;
      color: #000000;
    }
  }
`;

export { AproachFirstWrapper };
