import styled from "styled-components";

const Wrapper = styled.div`
  .categories {
    margin-bottom: 20px;
    /* overflow-x: auto; */

    ul {
      display: flex;
      align-items: center;
    }

    li:not(:last-child) {
      margin-right: 20px;
    }

    .categories_btn {
      background-color: transparent;
      color: #616161;
      border: 0;
      font-size: 18px;
      cursor: pointer;
      white-space: nowrap;

      svg {
        margin-right: 6px;
        position: relative;
        opacity: 0;
        right: 6px;
        color: #0c5adb;
        transition: all 0.8s ease;
      }

      sup {
        color: #0c5adb;
        font-weight: 700;
      }
    }
    .categories_btn:hover {
      color: #222;
      svg {
        right: 0;
        opacity: 1;
      }
    }
    .categories_btn.active {
      color: #222;
      svg {
        right: 0;
        opacity: 1;
      }
    }
  }

  .animation-place-wrapper {
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-wrap: wrap;

    .card-item {
      width: 33.3333%;
      padding-left: 15px;
      padding-right: 15px;
      min-height: 250px;
      margin-bottom: 30px;
    }

    .card-inner {
      height: 100%;
      background-color: #fff;
      background-size: cover;
      border-radius: 10px;
      overflow: hidden;

      position: relative;
      &:after {
        top: 0;
        left: 0;
        display: block;
        padding-top: 100%;
        width: 100%;
        content: "";
      }
    }

    .card-content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 25px;
      display: flex;
      flex-direction: column;
      justify-content: end;
    }

    .card-main {
      border-radius: 10px;
      padding: 20px 25px;
      width: 100%;
      background-image: linear-gradient(to right, #0c1bae, #0c5adb);
      display: flex;
      flex-direction: column;
      position: relative;
      top: 20px;
      visibility: hidden;
      opacity: 0;
      transition: top 0.5s ease, visibility 0.5s ease, opacity 0.5s ease;

      &__badge {
        display: inline-block;
        font-size: 13px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.6);
        transition: color 0.3s ease;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
      &__title {
        display: inline-block;
        white-space: nowrap;
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        cursor: pointer;
        transition: color 0.3s ease;
        &:hover {
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }

    .card-inner:hover .card-main {
      top: 0;
      visibility: visible;
      opacity: 1;
    }
  }

  @media (max-width: 1100px) {
    .animation-place-wrapper {
      .card-main {
        &__title {
          font-size: 20px;
        }
      }
    }
  }
  @media (max-width: 991px) {
    .animation-place-wrapper {
      .card-item {
        width: 50%;
      }
      .card-main {
        &__title {
          font-size: 18px;
        }
        &__badge {
          font-size: 12px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .categories {
      position: sticky;
      top: 50px;
      z-index: 99;
      background-color: #fff;
      padding: 15px 0;
      display: flex;
      flex-direction: column;
      ul{
        display: flex;
        /* flex-direction: column; */
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    .animation-place-wrapper {
      .card-item {
        width: 100%;
      }
      .card-inner{
      height: 65vh;
    }
    }
    .card-inner .card-main {
      top: 0;
      visibility: visible;
      opacity: 1;
    }
    
  }
`;

export { Wrapper };
