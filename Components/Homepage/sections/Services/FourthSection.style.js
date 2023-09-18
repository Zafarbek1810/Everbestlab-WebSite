import styled from "styled-components";

const FourthSectionWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 160px;
  background-color: rgba(0, 0, 0, 0.8);
  background-image: url("./images/fourthBgImage.webp");
  color: var(--textColorDark);
  position: relative;

  .anchorLink {
    position: absolute;
    top: -75px;
    left: 0;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    .title-wrapper {
      width: 49%;
    }

    .top-text {
      width: 49%;

      p {
        font-size: 20px;
        margin-top: 0;
        margin-bottom: 10px;
      }
    }

    .badge {
      font-size: 14px;
    }

    .title {
      font-size: 42px;
      letter-spacing: -1.6px;
      font-weight: 900;
      color: #fff;
    }
  }

  .swiperWrapper {
    padding-left: 1px;
    .swiper-item {
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-radius: 5px;
      overflow: hidden;
      height: 99%;
    }

    .swiper-slide {
      height: auto;
      margin-bottom: 30px;
    }

    .swiper-inner {
      position: relative;
      height: 100%;
    }

    /* .swiper-inner:hover .inner-hover {
      bottom: 0;
    } */
/* 
    .swiper-inner:hover .inner-hover .more-btn {
      top: 74.5%;
    } */

    .main-content {
      padding: 35px;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;

      img {
        width: 50px;
        height: auto;
        margin-bottom: 15px;
      }

      h4 {
        font-size: 22px;
        font-weight: 700;
        line-height: 1.3;
        color: #fff;
        margin-top: 0;
        margin-bottom: 15px;
      }

      p {
        font-size: 16px;
        line-height: 30px;
        margin: 0;

        // 3 qatordan keyin korinmaydi
        display: -webkit-box;
        //-webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        //overflow: hidden;
        //text-overflow: ellipsis;
      }
    }

    /* .inner-hover { */
      /* position: absolute;
      bottom: calc(100% + 10px);
      left: 0;
      transition: bottom 1s ease;

      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: left center; */

      /* .more-btn {
        color: #fff;
        position: absolute;
        overflow: hidden;
        background-color: transparent;
        top: -100%;
        left: 50%;
        padding: 12px 30px;
        border-radius: 8px;
        border: none !important;
        transform: translateX(-50%);
        background-image: var(--gradient);
        /* span {
          position: relative;
          z-index: 3;
          color: #fff;
        } */
        /* svg {
          position: relative;
          z-index: 3;
        } */
      /* } */

      /* @media (max-width: 767px) {
        /* background-image: url("./images/fourthImageMB.webp"); */
      /* } */

      
    }
  /* } */

  @media (max-width: 991px) {
    padding-top: 50px;
    padding-bottom: 70px;
    .top {
      .title {
        font-size: 36px;
      }
      .top-text {
        p {
          font-size: 20px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    padding-top: 35px;
    padding-bottom: 40px;
    .top {
      flex-direction: column;
      align-items: stretch;
      .title-wrapper,
      .top-text {
        width: 100%;
      }
    }
  }
`;

export { FourthSectionWrapper };
