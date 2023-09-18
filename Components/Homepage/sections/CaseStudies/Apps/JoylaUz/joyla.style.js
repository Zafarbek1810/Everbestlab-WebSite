import styled from "styled-components";

const JoylaStyle = styled.div`
  font-family: "Arial";
  .intro {
    background: linear-gradient(93.5deg, #0c1bae 0%, #0c5adb 100%);
    height: 100vh;
    display: flex;
    scroll-behavior: auto;
  }
  .intro-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 30px;
  }
  .right {
    padding-left: 36px;
    width: 50%;
  }
  .right p {
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    letter-spacing: 0.03rem;
  }
  .left {
    width: 50%;
  }
  .left img{
    width: 100%;
  }
  .right h2 {
    font-weight: 700;
    font-size: 56px;
    line-height: 56px;
    color: #ffffff;
  }
  .info-bottom {
    width: 100%;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  .info-bottom p {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    letter-spacing: 0.03rem;
  }
  .info-bottom b {
    font-size: 18px;
    line-height: 20px;
    padding-left: 10px;
    letter-spacing: 0.03rem;

    color: #ffffff;
  }
  .last { 
    display: flex;
    align-items: center;
  }
  .timeline{
    width: 35%;
  }
  .role{
    width: 65%;
  }
  .info-bottom img {
    width: 24px;
    padding-bottom: 6px;
  }

  .background {
    display: flex; 
    justify-content: space-around;
  }
  .left-background {
    width: 50%;
    padding: 100px 0;
  }
  .left-background h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
  }
  .left-background p {
    font-size: 19px;
    color: #333333;
  }
  .right-background {
    width: 50%; 
    padding-left: 80px;
    display: flex;
    justify-content: space-evenly   ;
  }

  .right-background img {
     width: 60%;
     padding: 60px 0;
  }

  .challenge {
    background: linear-gradient(93.5deg, #0c1bae 0%, #0c5adb 100%);
    height: 100vh;
    width: 100%;
  }
  .container-challenge {
    display: flex;
    align-items: center;
    padding-top: 100px;
  }
  .right-challenge {
    width: 50%;
    padding-left: 30px;
  }
  .right-challenge h2 {
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
  }
  .right-challenge p {
    font-weight: 400;
    font-size: 21px;
    line-height: 33px;
    color: #ffffff;
  }
  .left-challenge{
    width: 50%;
  }
  .left-challenge img{
    width: 100%;
  }

  .design { 
    margin-top: 133px;
    background: #d9d9d9;
    height: auto;
    padding-bottom: 100px;
  }
  .container-design {
    display: flex;
    flex-direction: column;
    padding-top: 100px;
    display: flex;
    align-items: center;
  }
  .right-design img{
    width: 100%;
    height: 60%;
    padding-bottom: 50px;
  }
  .left-design {   
    padding-right: 35px;
  }
  .left-design h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: #333333;
  }
  .left-design p {
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;
    color: #333333;
    padding-bottom: 16px;
  }
  .btn {
    padding: 15px 67px;
    background: linear-gradient(93.5deg, #0c1bae 0%, #0c5adb 100%);
    transition: background-color 0.3s ease, color 0.3s ease;
    border-radius: 5px;
    font-family: "Arial";
    font-weight: 700;
    font-size: 17px;
    color: #ffffff;
  }
  .btn:hover {
    color: black;
    background: #ffffff;
  }

  .project {
    padding: 100px 0;
  }
  .project h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
  }
  .project {
    font-weight: 400;
    font-size: 22px;
    line-height: 34px;
  }
  .download {
    background: #d9d9d9;
    padding: 100px 0;
  }
  .tit-down {
    padding-bottom: 30px;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0.03rem;
  }
  .wrapper {
    display: flex;
    align-items: center;
  }
  .left-download {
    width: 28%;
  }
  .left-download img {
    width: 45px;
    padding-bottom: 5px;
  }
  .left-download a {
    display: flex;
    align-items: center;
    padding: 5px 25px;
    margin: 5px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #a6a6a6;
  }
  .span {
    padding-top: 5px;
    padding-left: 10px;
  }
  .span p {
    color: black;
    font-size: 14px;
  }
  .span h3 {
    line-height: 0;
    margin: 0;
    font-size: 28px;
    font-weight: 600;
    padding-bottom: 30px;
  }
  .apple {
  }

  .right-download {
    width: 60%;
    padding-left: 20px;
  }
  .right-download p {
    font-size: 21px;
    padding-top: 20px;
  }

  .tech-wrapper {
    padding: 70px 0px 170px 0px;
    /* height: 100vh; */
  }
  .tech-box {
    width: 100%;
    height: 400px;
    background: linear-gradient(93.5deg, #0c1bae 0%, #0c5adb 100%);
    text-align: center;
  }
  .tech-box {
    padding-top: 65px;
  }

  /* ---------RESPONSIVE TABLET------------ */

  @media (max-width: 991px) {
    .intro {
      height: 100vh;
    }
    .right {
      width: 45%;
    }
    .right h2 {
      font-size: 35px;
      line-height: 50px;
    }
    .last b {
      font-size: 15px;
    }
    .timeline {
      padding-bottom: 20px;
    }
    .info-bottom {
      display: flex;
      flex-direction: column;
    }

    .tech-box img {
      padding-top: 30px;
      width: 85%;
    }
    .right-background {
    position: relative;
    height: 100%;
    padding-left: 50px;
  }

  .right-background img {
    position: absolute;
    
    &:nth-child(3) {
      transform: translateY(-50%) translateX(-10%);
    }
    &:nth-child(2) {
      transform: translateX(30%) translateY(-45%);
    }
    &:nth-child(1) {
      transform: translateX(70%) translateY(-38%);
    }
  }
  .challenge{
    height: auto;
  }
  .container-challenge{
    display: flex;
    flex-direction: column-reverse;
    padding-top: 10px;
    padding-bottom: 50px;
  }
  .right-challenge{
    padding: 0;
  }
  .right-challenge h2{
    text-align: center;
    padding-top: 40px;
  }
  .container-design {
      flex-direction: column;
      padding-top: 20px;
    }

    .right-design img {
      padding-top: 50px;
      max-width: 100%;
    }
    .left-design h2{
      text-align: center;
    }
    .left-design a{
      display: flex;
      align-content: center;
      justify-content: center;
      margin: 0 auto;
      width: 180px;
    }
    .wrapper {
      display: flex;
      flex-direction: column-reverse;
    }
    .left-download {
      width: 90%;
    }
    .span{
      width: 100%;
      padding-top: 10px;
    }
    .span h3{
      font-size: 24px;
    }
    span p{
      font-size: 12px;
    }
    .right-download {
      width: 100%;
    }
    .apple {
      width: 40%;
    }
    .google {
      width: 40%;
    }
  }
  
 
  /* --------------RESPONSIVE MOBILE------------- */
  @media (max-width: 767px) {
    .intro {
      height: auto;
      padding-left: 0;
      padding-right: 0;
    }
    .intro-container {
      padding-left: 0;
      padding-right: 0;
      padding-top: 70px;
      display: flex;
      flex-direction: column-reverse;
    }
    .right {
      width: 100%;
    }
    .right h2 {
      font-size: 35px;
    }
    .left img {
      max-width: 100%;
      padding: 25px;
    }
    .last b {
      font-size: 15px;
    }
    .timeline {
      padding-bottom: 20px;
    }
    .info-bottom {
      display: flex;
      flex-direction: column;
    }

    .background {
      display: flex;
      flex-direction: column;
      padding-bottom: 300px;
    }
    .left-background {
      width: 100%;
    }
    .right-background {
      position: relative;
      height: 100%;
    }

    .right-background img {
      position: absolute;
      width: 200px;
      &:nth-child(3) {
        transform: translateY(-32%) translateX(-80%);
      }
      &:nth-child(2) {
        transform: translateX(-45%) translateY(-20%);
      }
      &:nth-child(1) {
        transform: translateX(-7%) translateY(-6%);
      }
    }
    .challenge {
      height: auto;
    }
    .container-challenge {
      width: 100%;
      padding-top: 0;
    }
    .container-challenge {
      display: flex;
      flex-direction: column-reverse;
      padding-bottom: 50px;
      padding-top: 20px;
    }
    .left-challenge img {
      padding-top: 20px;
      width: 100%;
    }
    .right-challenge {
      width: 100%;
      padding: 0;
    }
    .right-challenge h2 {
      padding-top: 10px;
    }
    .container-design {
      flex-direction: column;
      padding-top: 20px;
    }

    .right-design img {
      padding-top: 50px;
      max-width: 100%;
    }
    .project{
      padding: 25px 0;
    }
    .project p{
      font-size: 18px;
    }

    .wrapper {
      display: flex;
      flex-direction: column-reverse;
    }
    .left-download {
      width: 90%;
    }
    .span{
      width: 100%;
      padding-top: 10px;
    }
    .span h3{
      font-size: 24px;
    }
    span p{
      font-size: 12px;
    }
    .right-download {
      width: 100%;
    }
    .apple {
      width: 100%;
    }
    .google {
      width: 100%;
    }
    .tech-wrapper{
      height: auto;
      padding-bottom: 30px;
    }
    .tech-box img {
      padding-top: 80px;
      width: 100%;
    }
  }
`;
export { JoylaStyle };
