import styled from "styled-components";

const FirstSectionWrapper = styled.div`
  min-height: calc(100vh - 40px);
  background-image: url("./images/homepage-hero.webp");
  background-size: cover;

  @media (max-width: 800px) {
    background-position-x: 50%;
  }
  @media (max-width: 390px) {
    background-position-x: 60%;
  }

  .firstSectionWrapper__clip {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: hidden;

    .clip-white {
      position: absolute;
      left: 0;

      width: calc(100% + 200px);
      height: 100%;
    }

    .clip-white {
      bottom: 0;
      background-color: #fff;
      transform-origin: top left;
      z-index: 2;
    }
  }

  & > div:first-child {
    min-height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .banner-actions {
    padding-top: 30px;
    & > button {
      cursor: pointer;
    }

    & > a,
    & > button {
      min-width: 180px;
      justify-content: center;
    }

    & > button:first-child {
      margin-right: 20px;
      @media (max-width: 767px) {
        margin-right: 20px;
        margin-bottom: 12px;
      }
    }
    & > a:last-child {
      color: #fff;
      border-color: #0c55d7;
      position: relative;
      overflow: hidden;

      span {
        z-index: 2;
      }

      svg {
        z-index: 2;
      }

      &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        opacity: 1;
        transition: opacity 0.3s ease;

        background-image: linear-gradient(to right, #0c1bae, #0c5adb);
        content: "";
      }

      &:hover {
        color: #222;
        border-color: #fff;
        background-color: #fff;
        &:before {
          opacity: 0;
        }
      }
    }
  }
`;

export default FirstSectionWrapper;
