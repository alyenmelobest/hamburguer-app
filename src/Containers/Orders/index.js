import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import orderBag from "../../assets/orderBag.svg";
import Trash from "../../assets/trash.svg";
import H1 from "../../components/Title";
import Button from "../../components/Button";

import { Container, Image, ContainerItems, User } from "./styles";

function Orders() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/orders"
      );

      setOrders(newOrders);
    }
    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);
    const newrOrders = orders.filter((order) => order.id !== orderId);

    setOrders(newrOrders);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <Image alt="logo-order-burguer" src={orderBag} />
      <ContainerItems>
        <H1>Pedidos</H1>

        <ul>
          {orders.map((user) => (
            <User key={user.id}>
              <div>
                <p>{user.order}</p>
                <p>{user.clientName}</p>
              </div>
              <button onClick={() => deleteOrder(user.id)}>
                <img alt="trash" src={Trash} />
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>Voltar</Button>
      </ContainerItems>
    </Container>
  );
}

export default Orders;
