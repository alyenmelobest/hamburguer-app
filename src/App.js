import React from "react";

import LogoBurguer from "./assets/logoBurguer.svg";
import Trash from "./assets/trash.svg";

import {
  Container,
  H1,
  Image,
  ContainerItems,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

function App() {
  const users = [];

function addNewOrder(){
    users.push( {
        id: Math.random(),
        order: "1 Coca-Cola, 1 X-Salada",
        clientName: "Alyne",
        price: 44,
        status: "pronto",
      })
}

  return (
    <Container>
      <Image alt="logo-burguer" src={LogoBurguer} />
      <ContainerItems>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input placeholder="1 Coca-Cola, 1-X Salada" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder="Steve Jobs" />

        <Button onClick={addNewOrder} >Cadastrar Pedido</Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.order}</p>
              <button>
                <img alt="trash"src={Trash}/>
              </button>
              <p>{user.clientName}</p>
            </User>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App;
