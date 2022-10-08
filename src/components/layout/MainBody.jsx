import React from 'react';
import img1 from "../../assets/images/image-product-1.jpg";
import img2 from "../../assets/images/image-product-2.jpg";
import img3 from "../../assets/images/image-product-3.jpg";
import imgThb1 from "../../assets/images/image-product-1-thumbnail.jpg";
import imgThb2 from "../../assets/images/image-product-2-thumbnail.jpg";
import imgThb3 from "../../assets/images/image-product-3-thumbnail.jpg";
import Button from '../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Form from '../form/Form';

import styles from "./MainBody.module.scss";

const MainBody = () => {
    return (
        <section className={ styles.section }>
            <div className={ styles[`section__item-wrapper`] }>
                <img src={ img1 } alt="sneaker" />
                <Button className={ styles[`section__prev-btn`] }><FontAwesomeIcon icon={ faChevronLeft } className={ styles.icon } /></Button>
                <Button className={ styles[`section__next-btn`] }><FontAwesomeIcon icon={ faChevronRight } className={ styles.icon } /></Button>
            </div>
            <h2 className={ styles[`section__title`] }>Sneaker Company</h2>
            <article className={ styles[`item`] }>
                <h1 className={ styles[`item__name`] }>Fall Limited Edition Sneakers</h1>
                <p className={ styles[`item__desc`] }>{ `These low-profile sneakers are your perfect casual wear companion.
                     Featuring a durable rubber outer sole, they'll withstand everything the
                      weather can offer.`}</p>

                <article className={ styles[`item__price-details`] } >
                    <span >{ `$125.00` }</span>
                    <span>{ `50%` }</span>
                    <span>{ `$250.00` }</span>
                </article>
            </article>
            <Form />
        </section>
    );
};

export default MainBody;