import styled from "styled-components";

const SixthSectionWrapper = styled.div`
  padding: 80px 0;
  height: auto;

  transition: height 0.5s ease;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    &__left,
    &__right {
      width: 49%;
    }

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
          background-color: rgb(246, 246, 246);
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
          background-color: rgb(246, 246, 246);
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

    /* &__right {
      text-align: end;

      .all-btn {
        color: var(--primary);
        border-color: var(--primary);
        position: relative;
        span {
          position: relative;
          z-index: 3;
        }
        svg {
          position: relative;
          z-index: 3;
        }
        &:after {
          position: absolute;
          display: block;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          background-color: var(--primary);
          content: "";
        }
        &:hover {
          color: #fff;
          border-color: #0c5adb;
          &:after {
            opacity: 1;
          }
        }
      }
    } */
  }

  @media (max-width: 991px) {
    padding: 50px 0;
    .top {
      flex-direction: column;
      &__left,
      &__right {
        width: 100%;
      }
      &__left {
        margin-bottom: 16px;
        .title {
          font-size: 36px;
        }
      }
      /* &__right {
        text-align: start;
      } */
    }
  }
  @media (max-width: 767px) {
    padding-top: 35px;
    .top {
      flex-direction: column;
      margin-bottom: 0;
      &__left,
      &__right {
        width: 100%;
      }
      &__left {
        margin-bottom: 1px;
      }
      /* &__right {
        text-align: start;
      } */
    }
  }
`;

export { SixthSectionWrapper };
