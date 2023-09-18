import styled from "styled-components";

const ThirdSectionWrapper = styled.div`
  /* padding: 30px 0 80px 0; */
  overflow-x: hidden;

  .imgs {
    height: 550px;
    position: relative;

    img {
      display: block;
      object-fit: cover;
    }

    .img1 {
      max-width: 52%;
      max-height: 60%;
      height: auto;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 10px;
      overflow: hidden;

      img {
        object-position: left;
        max-width: 100%;
        height: auto;
      }

      @media (max-width: 991px) {
        max-width: 55%;
      }
      @media (max-width: 767px) {
        max-width: 55%;
      }
    }

    .img2 {
      max-width: 65%;
      max-height: 90%;
      height: auto;
      position: absolute;
      bottom: 0;
      right: 0;
      border-radius: 10px;
      overflow: hidden;
      display: flex;

      img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
        overflow: hidden;
      }

      @media (max-width: 991px) {
        //max-width: 85%;
      }
      @media (max-width: 767px) {
        max-width: 60%;
      }
    }

    @media (max-width: 991px) {
      height: 450px;
    }
    @media (max-width: 767px) {
      /* max-width: 60%; */
    }
  }

  .rightWrapper {
    margin-left: 150px;
    margin-top: 50px;
    position: relative;

    .titleTop {
      color: #0c5adb;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;

      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        border-radius: 7px;
        background-color: #f6f6f6;
        top: -53px;
        left: -60px;
        width: 48px;
        height: 48px;
      }

      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        border-radius: 7px;
        background-color: #f6f6f6;
        top: -6px;
        width: 32px;
        height: 32px;
        left: -11px;
      }
    }

    h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 50px;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .topP {
      font-size: 20px;
      line-height: 32px;
      color: #616161;
      line-height: 1.4;
    }

    ul {
      li {
        margin-bottom: 30px;

        h3 {
          font-size: 20px;
          line-height: 24px;

          .svg-inline--fa {
            color: #0c5adb;
            margin-right: 15px;
          }
        }

        .bottomP {
          margin-left: 38px;
          font-size: 16px;
          color: #616161;
          line-height: 1.4;
        }
      }
    }
  }

  @media (max-width: 991px) {
    .rightWrapper {
      margin-left: 50px;
    }
  }
  @media (max-width: 767px) {
    .rightWrapper {
      margin-left: 0;
    }
    .imgs{
      height: 66vh;
    }
  }
`;

export {ThirdSectionWrapper};
