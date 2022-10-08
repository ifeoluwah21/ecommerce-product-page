import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../UI/Button';

import styles from "./Form.module.scss";

const Form = () => {
    return (
        <form className={ styles.form }>
            <div className={ styles[`form__controls`] }>
                <Button className={ styles[`form__decrement-btn`] }> - </Button>
                <span className={ styles[`form__value`] }>{ 0 }</span>
                <Button className={ styles[`form__increment-btn`] }> + </Button>
            </div>

            <Button className={ styles[`form__submit-btn`] } type='submit'>
                <FontAwesomeIcon icon={ faCartShopping } />
                <span>Add to cart</span>
            </Button>
        </form>
    );
};

export default Form;