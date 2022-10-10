/* eslint-disable react/prop-types */
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from '../UI/Button';

import styles from "./Form.module.scss";

const Form = (props) => {
    const [amount, setAmount] = useState(0);
    const incrementHandler = () => {
        setAmount(state => state + 1);
    };
    const decrementHandler = () => {
        if (amount === 0) {
            return;
        }
        setAmount(state => state - 1);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (amount === 0) {
            return;
        }
        props.onSubmit(amount);
        setAmount(0);
    };
    return (
        <form onSubmit={ submitHandler } className={ styles.form }>
            <div className={ styles[`form__controls`] }>
                <Button onClick={ decrementHandler } className={ styles[`form__decrement-btn`] }> - </Button>
                <span className={ styles[`form__value`] }>{ amount }</span>
                <Button onClick={ incrementHandler } className={ styles[`form__increment-btn`] }> + </Button>
            </div>

            <Button className={ styles[`form__submit-btn`] } type='submit'>
                <FontAwesomeIcon icon={ faCartShopping } />
                <span>Add to cart</span>
            </Button>
        </form>
    );
};

export default Form;