import styled from "styled-components";

const LoaderWrapper = styled.div`
  background-color: #fcfcfc;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 99999;

  img {
    width: 300px;
  }
  .count {
    position: absolute;
    bottom: 7px;
    left: 7px;
  }
  .number {
    font-size: 60px;
    font-family: "Rubik", sans-serif;
  }

  @media (max-width: 989.98px) {
    .number {
    font-size: 40px;
    font-family: "Rubik", sans-serif;
  }

  }


  // MOBILE
  @media (max-width: 767.98px) {
    background-color: #fcfcfc;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 99999;

    img {
      width: 270px;
      padding-bottom: 50px;
    }
    .count { 
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      padding-top: 17px;
    }
    .number {
      font-size: 20px;
      font-family: "Rubik", sans-serif;
    }
  }
`;

export { LoaderWrapper };