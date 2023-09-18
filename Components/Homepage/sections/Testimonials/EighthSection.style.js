import styled from "styled-components";

const EighthSectionWrapper = styled.div`
  padding: 80px 0;
  background-image: url("./images/testimonials-bg.webp");
  background-size: cover;
  background-position: center;
  color: #fff;
  position: relative;

  .testimonial-item-wr{
    padding-top: 40px;
  }

  .anchorLink {
    position: absolute;
    top: -75px;
    left: 0;
  }

  .left-col {
    padding-right: 30px;
    .badge {
      font-size: 14px;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 10px;
      color: #fff;
    }

    .title {
      font-size: 36px;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 25px;
      line-height: 1.2;
      color: #fff;
    }

    .subtitle {
      font-size: 24px;
      margin-top: 0;
      margin-bottom: 50px;
    }

    .getBtn {
      cursor: pointer;
    }
  }

  .swiper-wrapper-col {
    .swiper-slide {
      margin-bottom: 30px;
      height: auto;
      cursor: grab;
      &:active {
        cursor: grabbing;
      }
    }
    .testimonials-item {
      height: 100%;
      background-color: #fff;
      color: #616161;
      border-radius: 10px;
      position: relative;
    }

    .testimonials-item-inner {
      height: 100%;
    }

    .testimonials-item-top {
      padding: 30px;
      border-bottom: 1px solid rgba(154, 154, 154, 0.3);



      &__name {
        font-size: 20px;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 10px;
        line-height: 1.2;
        color: #222;
        user-select: none;
      }

      &__job {
        font-size: 16px;
        margin: 0;
        user-select: none;
      }
    }
    .testimonials-item img{
      position: absolute;
      top: 0px; left: 70%;
      transform: translateY(-50%);
    }
    
    .testimonials-item-bottom {
      padding: 30px;
      &__text {
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        line-height: 1.8;
        user-select: none;
      }
    }
  }

  @media (max-width: 991px) {
    padding: 50px 0;
    .left-col {
      margin-bottom: 25px;

      .title {
        font-size: 36px;
      }
      .subtitle {
        font-size: 20px;
      }
    }
  }
  @media (max-width: 767px) {
    padding: 35px 0;
    .left-col {
      margin-bottom: 25px;

      .title {
        margin-bottom: 16px;
      }
      .subtitle {
        margin-bottom: 16px;
      }
    }
  }
`;

export { EighthSectionWrapper };
