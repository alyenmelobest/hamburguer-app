import styled from "styled-components";

export const Container = styled.div`
  background: #0a0a10;
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
`;
export const Image = styled.img`
  margin-top: 11px;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;

  margin: 25px 100px 76px 101px;

  color: #ffffff;
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
  background: #d93856;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const User = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  padding: 17px 27px;
  margin-left: 36px;
  margin-bottom:18px ;

  width: 342px;
  height: 101px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;

  button {
    background: transparent;
    border: none;

    cursor: pointer;
  }
`;
