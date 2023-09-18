import styled from "styled-components";

const CounterWrapper = styled.div`
  .countWrapper {
    background-image: var(--gradient);
    box-shadow: 11px 11px 38px rgb(0 0 0 / 20%);
    padding: 40px 0 30px 0;
    margin-top: -100px;
    border-radius: 7px;
    position: relative;

    .count-col {
      display: flex;
      flex-direction: column;
    }
    .count-col:not(:last-child) {
      border-right: 1px solid #ebe9eb;
    }

    .inCount {
      text-align: center;
      font-size: 40px;
      color: #fff;
      font-weight: 800;

      & > span {
        display: inline-block;
        position: relative;
        line-height: 1;
        &:after {
          position: absolute;
          display: block;
          top: 0;
          right: 0;
          line-height: 1;
          font-weight: 100;
          font-size: 0.8em;
          transform: translateY(-100%) translateX(100%);
          content: "+";
        }
      }
    }

    .count-col:last-child {
      .inCount {
        & > span {
          &:after {
            transform: translateY(-100%) translateX(200%);
          }
        }
      }
    }

    .suffix {
      height: 20px;
      width: 20px;
      font-size: 30px;
      color: #fff;
      font-weight: 400;
      margin-left: 60%;
      margin-bottom: 7%;
    }

    .countTitle {
      font-size: 15px;
      font-weight: 400;
      text-align: center;
      color: #fff;
      margin-bottom: 0;
    }
  }

  @media (max-width: 991px) {
    .countWrapper {
      margin-top: 20px;
    }
  }

  @media (max-width: 767px) {
    .count-col {
      margin-bottom: 40px;
    }
  }
`;
export { CounterWrapper };
