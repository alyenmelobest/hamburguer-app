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
  width: 246px;
  height: 354px;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;

  margin: 36px 100px 50px 101px;

  color: #ffffff;
`;

export const User = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 17px 27px;
  margin-left: 36px;
  margin-bottom: 18px;

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

  p:first-child {
    margin-bottom: 28px;
  }

  button {
    background: transparent;
    border: none;

    cursor: pointer;
  }
`;
