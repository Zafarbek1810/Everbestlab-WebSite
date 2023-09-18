import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f5f5f5;
  height: auto;
  padding: 40px 0 120px;

  .title {
    font-size: 60px;
    font-weight: 600;
    margin: 0 auto;
  }
  .images-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  .images-item {
    width: calc((100% - 45px) / 4);
  }
  .img-wrapper {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 260px;
    border-radius: 15px;


    img {
      max-width: 100%;
      border-radius: 15px;
      filter: grayscale(99%);
      transition: 0.2s;
      :hover {
        filter: grayscale(0);
        
      }
    }

    .linkedin{
        position: absolute;
        bottom: 5px;
        right: 20px;
        background-color: #0A66C2;
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-content: center;
        justify-content: center;
        filter: grayscale(99%);
        transition: 0.2s;
        :hover {
          filter: grayscale(0);
          
        }

        .linkedinIcon{
          padding: 10px;
        }
    }
  }

  .images-inner {
    text-align: center;

    h2 {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: 24px;
    }
    p {
      font-size: 16px;
      color: #5d5d5d;
    }
  }

  // MOBILE
  @media (max-width: 767.98px) {
    .title {
      font-size: 40px;
      font-weight: 600;
      margin: 0 auto;
    }
    .images-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
    .images-item {
      width: calc((100% - 15px) / 2);
    }
    .img-wrapper {
      overflow: hidden;
      width: 100%;
      height: auto;

      img {
        max-width: 100%;
        height: auto;
        border-radius: 15px;
      }
    }

    .images-inner {
      text-align: center;

      h2 {
        margin-top: 10px;
        margin-bottom: 5px;
        font-size: 19px;
        font-family: sans-serif;
      }
      p {
        font-size: 12px;
        color: #5d5d5d;
      }
    }
  }
`;

export { Wrapper };
