import React from 'react';
import thmb1 from "../../assets/images/image-product-1-thumbnail.jpg";
import styles from "./CartItem.module.scss";

const CartItem = () => {
    return (
        <article className={ `${styles[`cart__item`]} ${styles[`item`]}` } >
            <img src={ thmb1 } alt="sneaker" />
            <p className={ styles[`item__name`] }>Autumn Limited Edition...</p>
            <p className={ styles[`item__price`] }> ${ 125.00 } x 3 <span>${ 375.00 }</span></p>
        </article>
    );
};

export default CartItem;