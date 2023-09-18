import styled from "styled-components";

const Wrapper = styled.div`
  .wrapper {
    align-items: center;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  // Animation
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(
        calc((-320px * 12) + ${(props) => props.animateWidth}px)
      );
    }

    100% {
      transform: translateX(0);
    }
  }

  // Styling
  .slider {
    background: white;
    height: 150px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100%;

    .slide-track {
      animation: scroll 90s linear infinite;
      display: flex;
      width: calc(320px * 12);
    }

    .slide {
      height: 150px;
      width: 320px;
      background-color: #f8f8f8;
      display: flex;
      align-items: center;
      justify-content: center;

      &>div {
        max-width: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
        filter: grayscale(1);
        transition: filter 0.4s ease, opacity 0.3s ease;
        opacity: 0.6;
        height: 80px;
        width: auto;
        &:hover {
          filter: grayscale(0);
          opacity: 1;
        }
      }
    }
  }
`;

export { Wrapper };
