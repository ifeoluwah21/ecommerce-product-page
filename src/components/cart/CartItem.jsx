/* eslint-disable react/prop-types */
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import thmb1 from "../../assets/images/image-product-1-thumbnail.jpg";
import { cartActions } from '../../store/cart-slice';
import styles from "./CartItem.module.scss";

const CartItem = (props) => {
    const dispatch = useDispatch();
    const removeItemHandler = () => {
        dispatch(cartActions.removeItem({ id: props.id }));
    };
    console.log(props);
    return (
        <article className={`${styles[`item`]}`} >
            <img src={thmb1} alt="sneaker" />
            <p className={styles[`item__name`]}>{props.name}</p>
            <p className={styles[`item__price`]}> ${props.price} x {props.amount} <span style={{ fontWeight: `700` }}>${props.totalPrice}</span></p>
            <span onClick={removeItemHandler} className={styles[`item__clear`]}><FontAwesomeIcon icon={faTrash} /></span>
        </article>
    );
};

export default CartItem;