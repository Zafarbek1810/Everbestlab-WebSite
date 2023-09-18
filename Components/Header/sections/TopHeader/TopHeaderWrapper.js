import styled from "styled-components";

const TopHeaderWrapper = styled.div`
  background-color: #000;
  color: white;

  .content {
    height: 40px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
  }
  .left_side {
    display: flex;
    align-items: baseline;
    a,
    p {
      font-size: 12px;
      margin: 0;
      color: gray;
      &:not(:last-child) {
        margin-right: 10px;
      }

      svg {
        margin-right: 4px;
      }
    }
    a:hover {
      color: #fff;
    }
  }
  .right_side {
    display: flex;
    align-items: baseline;

    a {
      display: flex;
    }
    a:not(:last-child) {
      margin-right: 10px;
    }
    svg {
      font-size: 18px;
      color: gray;
      transition: color 0.3s ease;
      &:hover {
        color: #fff;
      }
    }
  }

  @media (max-width: 767px) {
    .content {
      padding: 0 15px;
    }
    .left_side {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .location {
        display: none;
      }
      margin-right: 10px;
      align-items: center;
      a {
        width: 50% !important;
      }
      a,
      p {
        width: 50%;
        font-size: 10px;
        margin: 0;
        white-space: nowrap;

        //text 2qatordan keyin korinmaydi
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .right_side {
      a:not(:last-child) {
        margin-right: 6px;
      }
      svg {
        font-size: 16px;
      }
    }
  }
`;

export default TopHeaderWrapper;
