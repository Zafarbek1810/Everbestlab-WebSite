import styled from "styled-components";

const TenthSectionWrapper = styled.div`
  position: relative;
  .anchorLink {
    position: absolute;
    top: -75px;
    left: 0;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    min-height: 250px;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    background-color: #000;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }

  background-color: #f8f8f8 !important;
  padding: 80px 0;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    &__left,
    /* &__right {
      width: 49%;
    } */

    &__left {
      .badge {
        color: #035adb;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 10px;
        position: relative;

        span {
          position: relative;
          z-index: 3;
        }

        &:before {
          position: absolute;
          top: -12px;
          left: -10px;
          z-index: 2;

          width: 32px;
          height: 32px;
          background-color: #fff;
          border-radius: 5px;
          content: "";
        }

        &:after {
          position: absolute;
          top: -60px;
          left: -60px;
          z-index: 2;

          width: 48px;
          height: 48px;
          background-color: #fff;
          border-radius: 5px;
          content: "";
        }
      }

      .title {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 42px;
        letter-spacing: -1.6px;
        font-weight: 900;
      }
    }
  }

  .bottom {
    .cards-row {
      margin-left: -8px !important;
      margin-right: -8px !important;

      .cards-col {
        padding-left: 8px !important;
        padding-right: 8px !important;
        margin-bottom: 50px;
        color: white;
      }

      .card-top {
        position: relative;

        .before {
          font-size: 13px;
          position: absolute;
          top: 18px;
          left: 18px;
          background-color: blue;
          border-radius: 5px;
          padding: 5px;
        }

        img {
          width: 100%;
          height: auto;
        }
      }

      .card-bottom {
        background-color: #fff;
        padding: 30px;
        height: 210px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          font-size: 23px;
          font-weight: 700;
        }

        .cards-link {
          color: #000;
          &:hover {
            color: var(--primary);
          }
        }
        .descr {
          color: #000;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          justify-content: flex-start;
        }
        .learn-link {
          width: 90%;
          margin-top: 20px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          color: var(--primary);
          text-transform: uppercase;
          transition: 250ms;
        }

        span {
          font-size: 17px;
          transition: 300ms;
        }

        svg {
          font-size: 14px;
        }

        .learn-arrow-initial {
          position: absolute;
          right: 120px;
          top: 20%;

          // initial arrow hover olingandagi transition
          transition: all 0.25s ease 0.25s;
        }

        .learn-arrow-onHover {
          position: absolute;
          top: 50%;
          right: 150px;
          opacity: 0;
          transform: translateY(-50%);

          transition: all 0.25s ease;
        }

        &:hover {
          .learn-arrow-initial {
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.25s ease;
          }
          .learn-arrow-onHover {
            right: 120px;
            opacity: 1;
            transition: all 0.25s ease 0.25s;
          }
        }
      }

      .date::after {
        content: "";
        margin: 0 10px 0 8px;
        display: inline-block;
        width: 4px;
        height: 4px;
        vertical-align: middle;
        margin-top: -2px;
        background-color: blue;
      }
    }
  }

  @media (max-width: 1000px) {
    padding-bottom: 100px;
    .learn-link {
      width: 77%;
    }
  }
  @media (max-width: 767px) {
    .top {
      &__left {
        margin-bottom: 25px;
      }
    }
    .bottom {
      .cards-row {
        .card-bottom {
        height: auto;
        .descr{
          padding-top: 13px;
          padding-bottom: 23px;
        }
          .learn-link {
            width: 63%;
            span{
              margin: 0;

            }
          }
        }
      }
    }
  }

  .swiper-slide {
    cursor: grab;
    user-select: none;
    &:active {
      cursor: grabbing;
    }
  }
`;

export { TenthSectionWrapper };
