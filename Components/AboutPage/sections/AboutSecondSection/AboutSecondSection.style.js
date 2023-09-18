import styled from "styled-components";

const Wrapper = styled.div`
width: 100%;
height: 85vh;
padding: 0;
   background-image: url("/images/about_us-1.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
  filter: grayscale(99%);
  transition: 0.2s;
  :hover{
    filter: grayscale(0);
  }
`;

export { Wrapper };
