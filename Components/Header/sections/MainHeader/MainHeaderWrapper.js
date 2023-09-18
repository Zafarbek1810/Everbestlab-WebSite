import styled, { css } from "styled-components";

const MainHeaderWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.22);
  z-index: 1000;

  .logo {
    flex-shrink: 0;
  }

  .header {
    background-color: rgb(28 28 28 / 75%);
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    transform: translateY(0);
    //transition: transform 0.6s ease;
    z-index: 77777;

    .navs {
      p {
        color: white;
      }
    }

    .burger-btn {
      &:after,
      &:before {
        background-color: #222;
      }

      span {
        background-color: #222;
      }
    }
    .selectOp { 
      width: 75px;
      margin-right: 15px;
      font-size: 14px;
      font-family: "PT Sans Narrow" sans-serif ;
      color: #fff;
      background-color: transparent !important;
    }
    .css-1u9des2-indicatorSeparator{
      display: none;
      padding: 0;
    } 
    .css-13cymwt-control{
      background-color: transparent;
    }
    .css-1dimb5e-singleValue{
      color: #fff;
    }
    .css-t3ipsp-control{
      background-color: transparent;
    }

    // ARTICLE PAGE UCHUN STILLAR

    ${(props) =>
      props.isFixed
        ? css`
            background-color: #fff;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

            .navs {
              p {
                color: #222;
              }

              svg {
                color: transparent;
              }

              &:hover {
                svg {
                  color: #222 !important;
                }
              }

              p + svg {
                color: #222 !important;
              }
            }

            .getBtn {
              color: #222;
              border-color: #222;
            }
          `
        : ""}
  }

  .header2 {
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    .selectOp { 
      width: 75px;
      margin-right: 15px;
      font-size: 14px;
      font-family: "PT Sans Narrow" sans-serif ;
      color: #fff;
      background-color: transparent !important;
    }
    .css-1u9des2-indicatorSeparator{
      display: none;
      padding: 0;
    } 
    .css-13cymwt-control{
      background-color: transparent;
    }
    .css-1dimb5e-singleValue{
      color: #000;
    }
    .css-t3ipsp-control{
      background-color: transparent;
      border: #000;
    } 


    a,
    button {
      color: black !important;
      border-color: black !important;
    }

    .links_cont {
      .navs {
        svg {
          color: transparent;
        }

        .angle-svg {
          color: #000 !important;
        }

        &:hover {
          svg {
            color: black !important;
          }
        }
      }
    }

    .burger-btn {
      &:after,
      &:before {
        background-color: #222;
      }

      span {
        background-color: #222;
      }
    }
  }

  .content {
    padding: 0px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 230px;
    }

    .links_cont {
      display: flex;
      justify-content: center;

      .navs {
        flex-shrink: 0;
        position: relative;
        padding: 30px 20px;
        display: flex;

        .arrow-svg {
          font-size: 13px;
          position: absolute;
          left: -15px;
          top: 50%;
          transform: translateY(-55%);
          color: transparent;
          transition: 0.3s;
          line-height: 1.2;
        }

        .angle-svg {
          font-size: 13px;
          margin-left: 5px;
          color: #fff;
          transition: color 0.1s ease;
        }

        &:hover {
          .arrow-svg {
            left: 0;
            color: white;
          }
        }

        p {
          font-size: 13px;
          line-height: 1.2;
        }
      }

      a {
        text-transform: uppercase;
      }

      p {
        margin: 0;
        padding: 0;
      }
    }

    .lang_button {
      display: flex;
      align-items: center;
      margin-right: 30px;

      img {
        width: 18px;
      }

      button {
        background-color: transparent;
        border: none;
        color: white;
        font-size: 15px;
      }
    }
  }

  // --------------------------- DROPDOWN MENU ----------------------------------
  .content {
    .links_cont {
      & > li {
        position: relative;
      }

      & > li:hover {
        & > .dropdown {
          top: 100%;
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }

  .dropdown {
    position: absolute;
    background-color: #fff;
    color: #222;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);
    left: 0;
    top: 140%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease, top 0.3s ease;

    &__list {
    }

    &__item {
    }

    &__link {
      padding: 15px 40px;
      display: block;
      white-space: nowrap;
      position: relative;
      font-size: 13px;

      svg {
        position: absolute;
        top: 50%;
        left: -10px;
        transform: translateY(-50%);
        opacity: 0;
        color: #222;
        transition: opacity 0.3s ease, left 0.3s ease;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);

        svg {
          left: 15px;
          opacity: 1;
        }
      }
    }
  }

  .header {
    .dropdown {
      background-color: #fff;
      box-shadow: none;

      &__link {
        color: #000;

        svg {
          color: #000;
        }
      }
    }
  }

  // --------------------------- BURGER STYLES ----------------------------------
  .getBtn {
    cursor: pointer;
  }
  .burger-btn {
    display: none;
    position: relative;

    cursor: pointer;
    width: 40px;
    height: 40px;

    &:after,
    &:before {
      display: block;
      position: absolute;
      width: 100%;
      height: 4px;
      left: 0;
      background-color: #fff;

      content: "";
      transition: transform 0.3s ease;
    }

    &:before {
      top: 5px;
      transform-origin: left top;
    }

    &:after {
      transform-origin: left bottom;
      bottom: 5px;
    }

    span {
      width: 100%;
      height: 4px;
      background-color: #fff;
      transition: transform 0.3s ease;
    }
  }

  .burger-list-wrapper {
    display: none;
  }

  @media (max-width: 1024px) {

    .header{
      .selectOp { 
      width: 60px;
      margin-right: 10px;
      font-size: 13px;
      font-family: "PT Sans Narrow" sans-serif ; 
      background-color: transparent !important;
    }
    .css-1u9des2-indicatorSeparator{
      display: none;
      padding: 0;
    } 
    .css-13cymwt-control{
      background-color: transparent;
      color: #000;
    }
    .css-1dimb5e-singleValue{
      color: #000;
    }
    .css-t3ipsp-control{
      background-color: transparent;
      color: #000;
    } 
    }
    
    .content {
      padding: 10px;
      background-color: #fff;
    }

    .navbar-wrapper {
      display: none !important;
    }

    .burger-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .getBtn {
      display: none;
    }

    .burger-list-wrapper {
      height: calc(100vh - 59px);
      position: absolute;
      top: 100%;
      left: 0;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      padding: 15px;
      min-width: 300px;
      box-shadow: rgba(0, 0, 0, 0.15) 3px 3px 5px;

      a {
        color: #222;
      }

      overflow: auto;

      .burger-list {
        display: flex;
        flex-direction: column;
      }

      .burger-link {
        cursor: pointer;
        display: block;
        color: #222;
        padding: 6px 0;
        font-size: 15px;
        text-transform: uppercase;

        &:hover {
          color: var(--primary) !important;
        }
      }

      .burger-getBtn {
        border-color: #222;
        justify-content: center;
        color: #222;
      }

      .drop-link {
        span {
          display: inline-block;
          margin-right: 10px;
        }

        svg {
          transition: all 0.3s ease;
        }
      }

      .burger-drop-wrapper {
        overflow: hidden;
        transition: max-height 0.3s ease;

        li {
          margin-left: 15px;

          a {
            cursor: pointer;
            display: block;
            color: #222;
            padding: 6px 0;
            font-size: 15px;
            text-transform: uppercase;

            &:hover {
              color: var(--primary) !important;
            }
          }
        }
      }

      transition: left 0.5s ease;

      &.close {
        left: -100%;
      }

      &.open {
        left: 0;
      }
    }
  }
`;

export default MainHeaderWrapper;
