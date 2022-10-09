/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../UI/Button';
import styles from "./Cart.module.scss";
import CartItem from './CartItem';
const Cart = (props) => {
    const items = useSelector(state => state.cart.items);

    let cartContent = items.map(item => {
        return <CartItem name={item.name} price={item.price} totalPrice={item.totalPrice} amount={item.amount} key={item.id} id={item.id} />;
    });
    if (items.length === 0) {
        cartContent = <p className={styles.empty}>Your cart is empty.</p>;
    }
    return (
        <section className={styles.cart}>
            <h2>Cart</h2>
            {cartContent}
            <Button onClick={props.toggleCart} className={styles.btn} type="button">Checkout</Button>
        </section>
    );
};

export default Cart;