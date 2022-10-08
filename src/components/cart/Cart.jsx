import React from 'react';
import Button from '../UI/Button';
import styles from "./Cart.module.scss";
import CartItem from './CartItem';
const Cart = () => {
    return (
        <section className={ styles.cart }>
            <h2>Cart</h2>
            <CartItem />
            <Button className={ styles.btn } type="button">Checkout</Button>
        </section>
    );
};

export default Cart;