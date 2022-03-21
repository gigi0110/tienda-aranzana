import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import { useState } from "react";


const ItemCount = ({ onAdd }) => {
  const initial = 1;
  const stock = 5;

  const [count, setcount] = useState(initial);

  const agregarCarrito = (cantidad) => {
    setcount(count + cantidad);
  };

  return (
  <div>
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="dark"onClick={() => agregarCarrito(-1)}
        disabled={count === initial ? true : null}>-</Button>
        <Button variant="light">{count}</Button>
        <Button variant="dark"onClick={() => agregarCarrito(+1)}
        disabled={count === stock ? true : null}>+</Button>
      </ButtonGroup>
    </div>
    <Button variant="warning" onClick={() => onAdd(count)}
    disabled={stock === 0 ? true : null}>Agregar al Carrito</Button>
    </div>
  );
};

export default ItemCount;