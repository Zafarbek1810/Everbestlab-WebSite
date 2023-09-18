import styled from "styled-components";

const ApproachSixthWrapper=styled.div`
background-color: #E5E5E5;
  padding: 100px 0;
  .roww {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .right { 
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 70%;
      h3 {
        font-family: "PT Sans Caption";
        font-style: normal;
        font-weight: 700;
        font-size: 34px;
        line-height: 150%;
        letter-spacing: -0.022em;
        color: #000000;
        span {
          margin-left: 15px;
          color: #0174f3;
        }
      }

      ul {
        margin-left: 30px;
        list-style: outside;
        li {
          p {
            font-family: "PT Sans" sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 30px;
            color: #000000;
          }
        }
      }
    }

    .left {
      width: 50%;
      img {
        width: 90%;
      }
    }

}
@media (max-width: 676px) {
  ul{
    width: 100%;
  }
    .right{
        width: 100%;
        h3{
          width: 100%;
            font-size: 30px !important;
        }

        p{
            font-size: 17px !important;
        }
    }
    
}
@media (max-width: 767px) {
    .roww{
        flex-direction: column-reverse;
        align-items: center;
    }
    .right{
        width: 100%;
        margin-bottom: 40px;
        margin-left: 0 !important;
    }

    .left{
        width: 100%;
        img{
            width: 100%;
            object-fit: cover;
        }
    }
}
`

export{ApproachSixthWrapper}