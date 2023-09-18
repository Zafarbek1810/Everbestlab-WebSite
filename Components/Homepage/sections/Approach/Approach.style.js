import styled from "styled-components";

const StyledApproach = styled.section`
  padding-bottom: 60px;

  /*  ======================= NEW ==================== */

  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #0c5adb;
      border-radius: 50%;
      padding: 20px;
      width: 100px;
      height: 100px;
      margin: auto;

      svg {
        width: 45px;
        height: 45px;
        max-width: 100%;
      }
    }

    .text {
      margin-top: 20px;
      text-align: center;
      p {
        font-family: "PT Sans" sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 25px;
        color: #0c5adb;
      }
    }

    .line {
      width: 70px;
      border-bottom: 3px dashed #0c5adb;
      transform: translateY(-15px);
    }
  }

  // ------------------------- LEFT SIDE STYLES ----------------------------------

  // ------------------------- RIGHT SIDE STYLES ----------------------------------
  .right-side {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .badge {
      font-size: 14px;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 10px;
      color: var(--primary);

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
      font-size: 36px;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 25px;
      line-height: 1.2;
      color: #222;
    }
    .approach-btn {
      color: var(--primary);
      border-color: var(--primary);

      &:hover {
        background-color: var(--primary);
        color: #fff;
      }
    }
  }
  // ------------------------- MEDIA STYLES ----------------------------------
  @media (max-width: 991px) {
    padding-bottom: 50px;
    .right-side {
      margin-bottom: 25px;

      .title {
        font-size: 36px;
      }
    }
  }

  @media (max-width: 767px) {
    padding-bottom: 35px;
    .left-side {
      margin-bottom: 20px;
    }
    .right-side {
      padding: 0;
      .title {
        margin-bottom: 16px;
      }
    }

    .icons {
      flex-direction: column;

      .col {
        margin-bottom: 10px;
      }
    }
  }

  @media (max-width: 450px) {
    .right-side {
      flex-direction: column;
      text-align: center;
    }
  }
`;

export { StyledApproach };
