import styled from "styled-components";

const SecondSectionWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 80px;
  margin-top: -110px;
  position: relative;
  z-index: 3;

  .cards-row {
    margin-left: -15px;
    margin-right: -15px;
  }

  .cards-col {
    padding-left: 15px;
    padding-right: 15px;
    height: auto;
  }

  .card-inner {
    border-radius: 10px;
    text-align: center;
    padding: 65px 30px 65px !important;
    height: 100%;
    box-shadow: 6px 5px 30px 0 rgb(0 0 0 / 12%);
  }

  .card-inner-0 {
    background-image: url(/images/card-blue.webp);
    background-position: center;
    background-size: cover;
  }

  .card-inner-1 {
    background-image: url(/images/card-black.webp);
    background-position: center;
    background-size: cover;
  }

  .card-inner-2 {
    background-image: url(/images/card-white.webp);
    background-position: center;
    background-size: cover;
  }

  .card-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    .icon {
      margin-bottom: 40px;
    }

    h3 {
      color: #fff;
      font-size: 20px;
      line-height: 1.4;
      font-weight: 600;
      word-break: break-word;
      transition: inherit;
    }

    p {
      font-size: 16px;
      color: #fff;
      line-height: 1.5;
      flex-grow: 1;
    }

    .learn-link {
      position: relative;
      display: flex;
      align-items: center;
      color: #fff;
      text-transform: uppercase;

      svg {
        font-size: 16px;
      }

      .learn-arrow-initial {
        margin-left: 12px;
        
        // initial arrow hover olingandagi transition
        transition: all 0.25s ease 0.25s;
      }

      .learn-arrow-onHover {
        position: absolute;
        top: 50%;
        right: 16px;
        opacity: 0;
        transform: translateY(-50%);

        transition: all 0.25s ease;
      }
      
      &:hover {
        .learn-arrow-initial {
          transform: translateX(100%);
          opacity: 0;
          transition: all 0.25s ease;
        }
        .learn-arrow-onHover {
          right: 0;
          opacity: 1;
          transition: all 0.25s ease 0.25s;
        }
      }
    }
  }
  
  // WHITE CARD
  .card-inner-2 {
    h3, p {
      color: #222;
    }
    .learn-link {
      color: var(--primary);
    }
  }

  @media (max-width: 767px) {
    .cards-col:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`

export {SecondSectionWrapper};
