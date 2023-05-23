import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { RiShoppingCartLine } from 'react-icons/ri';


const CartWidget = () => {
  return (
    <Button variant="dark">
      <RiShoppingCartLine className='iconoCarrito'/> <Badge>5</Badge>
    </Button>
  );
};

export default CartWidget;



