import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 68px;

  margin: 76px 36px;

  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  border: none;

  cursor: pointer;

  color: #ffffff;
  background: ${(props) =>
    props.isHome ? "#D93856" : "rgba(255, 255, 255, 0.14)"};

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
