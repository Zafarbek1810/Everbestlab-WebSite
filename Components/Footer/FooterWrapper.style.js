import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #2d2d2d;
  padding: 120px 0 0;
  position: relative;

  .clip {
    position: absolute;
    /* 
    // bu qismi jsxda berilgan
    top: -120px; 
    */
    left: 0;
    width: 100%;
    overflow: hidden;

    .clip-white {
      position: absolute;
      left: 0;

      width: calc(100% + 200px);
      height: 100%;
    }

    .clip-white {
      bottom: 0;
      background-color: #2d2d2d;
      transform-origin: top left;
      z-index: 2;
    }
  }

  h5 {
    color: white;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 8px;
  }

  p span {
    color: white;
    //font-size: 18px;
    font-weight: bold;
  }

  p {
    color: #ccc;
  }



  .second-col {
    .contact-link {
      color: #ccc;
      .span-value {
        display: inline-block;
        color: #ccc;
      }
      &:hover {
        .span-value {
          text-decoration: underline;
        }
      }
    }
  }

  .third-col {
    p {
      a {
        color: #ccc;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  
  .fourth-col {
    .subtitle {
      color: #ccc;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .col {
    
  }

  .first-col {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 50px;
    
    .logo-img {
      color: red;
    }

    .social-icons-wrapper {
      margin-top: auto;

      svg {
        color: #ffffff;
        width: 20px;
        height: 20px;
        cursor: pointer;
        transition: color 0.3s ease;
        &:hover {
          color: var(--primary);
        }
      }
      a:not(:last-child) {
        margin-right: 15px;
      }
    }
    & >a {
      align-self: start;
      margin-bottom: 25px;
    }
    & >a > img {
      width: 200px;
      object-fit: cover;
    }
  }

  .footer_bottom{
    margin-top: 60px;
    background-color: #222;
    font-size: 12px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 2px;
  }
  
  @media (max-width: 767px) {
    .first-col {
      margin-bottom: 30px;
    }
    
    .col {
      padding: 0;
      margin-bottom: 25px;
    }
  }
`;

export default FooterWrapper;
