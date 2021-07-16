import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../store';
import { CartItem } from '../store/modules/cart/types';

const Cart: React.FC = () => {
  const cart = useSelector<State, CartItem[]>(state => state.cart.items)

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Cart;
