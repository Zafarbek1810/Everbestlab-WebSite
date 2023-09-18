import styled from "styled-components";

const HomePageFormWrapper = styled.div`
  margin-bottom: -30px;
  width: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #f8f8f8;
  position: relative;

  .anchorLink {
    position: absolute;
    top: -85px;
    left: 0;
  }

  .form {
    z-index: 10;
    position: relative;
    width: 80%;
    background-image: var(--gradient);
    padding: 20px;
    border-radius: 7px;
    margin: auto;

    h3 {
      text-align: center;
      font-weight: 800;
      color: #fff;
      font-size: 27px;
    }

    Input,
    TextArea {
      background-color: rgb(60, 90, 210);
      border: none;
      border-radius: 5px;
      padding: 5px;
      padding-left: 15px;
      color: #fff;

      &::placeholder {
        color: #cccccc !important;
      }
    }

    textarea {
      min-height: 85px;
      resize: vertical;
    }

    Button {
      background-color: #fff;
      color: #272727;
      font-weight: 700;
      width: 100%;
      height: 75px;
      padding: 10px;
      border-radius: 5px;

      @media (max-width: 767px) {
        margin-top: 20px;
      }

      .icon {
        margin-left: 5%;
      }
    }
  }

  .captcha-row {
    justify-content: space-between;

    .formBtn {
      width: 300px;
    }
  }

  .captcha-col {
    display: flex;
    justify-content: start;
    @media (max-width: 767px) {
      /* justify-content: center !important; */
    }
  }

  @media (max-width: 767px) {
    .icon{
      font-size: 12px;
    }
    .form {
      width: 100%;
      padding: 30px 15px;
    }

    .captcha-row {
      padding-top: 20px;
    }

    .captcha-col {
      justify-content: center !important;
    }
    .formBtn {
      margin: auto;
      &__span{
        font-size: 42px;
      }
    }
  }

  @media (max-width: 400px) {
    .captcha-col {
      overflow-x: hidden;
    }
  }
`;
export { HomePageFormWrapper };
