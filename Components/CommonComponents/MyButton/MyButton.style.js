import styled from "styled-components"

const StyledLink = styled.a`
  color: #fff;
  background-color: transparent;
  padding: 10px 30px;
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  transition: background-color .3s ease, color .3s ease;
  white-space: nowrap;
  
  &:hover {
    background-color: #fff;
    color: #222;
  }
  
  svg {
    margin-left: 6px;
  }

`

export {
  StyledLink
}
