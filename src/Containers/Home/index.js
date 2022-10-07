import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import LogoBurguer from "../../assets/logoBurguer.svg";

import H1 from "../../components/Title";
import Button from "../../components/Button";
import {
  Container,
  Image,
  ContainerItems,
  InputLabel,
  Input,
} from "./styles";

function App() {
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputClientName = useRef();
  const history = useHistory();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post(
      "http://localhost:3001/orders",
      {
        order: inputOrder.current.value,
        clientName: inputClientName.current.value,
      }
    );

    setOrders([...orders, newOrder]);

    history.push("/orders");
  }

  return (
    <Container>
      <Image alt="logo-burguer" src={LogoBurguer} />
      <ContainerItems>
        <H1> Faça seu pedido! </H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClientName} placeholder="Jeff Bezos" />

        <Button isHome={true} onClick={addNewOrder}>Cadastrar Pedido</Button>
      </ContainerItems>
    </Container>
  );
}

export default App;
