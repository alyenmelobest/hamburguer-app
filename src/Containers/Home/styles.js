import styled from "styled-components";

export const Container = styled.div`
  background: #0a0a10; 
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  height: 100%;
`;
export const Image = styled.img`
  margin-top: 11px;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.p`
  margin-left: 56px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;

  color: #eeeeee;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  padding: 19px 15px;
  margin-left: 36px;
  margin-bottom: 42px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;
`;


