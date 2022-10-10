import React, { useState } from 'react';
import ReactDOM from "react-dom";
import img1 from "../../assets/images/image-product-1.jpg";
import img2 from "../../assets/images/image-product-2.jpg";
import img3 from "../../assets/images/image-product-3.jpg";
import img4 from "../../assets/images/image-product-4.jpg";
import imgThb1 from "../../assets/images/image-product-1-thumbnail.jpg";
import imgThb2 from "../../assets/images/image-product-2-thumbnail.jpg";
import imgThb3 from "../../assets/images/image-product-3-thumbnail.jpg";
import imgThb4 from "../../assets/images/image-product-4-thumbnail.jpg";
import Button from '../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Form from '../form/Form';

import styles from "./MainBody.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import ThmbImg from '../UI/ThmbImg';
import ImgsModal from '../UI/ImgsModal';
import Overlay from './Overlay';

const imgs = [img1, img2, img3, img4];
const imgThbs = [imgThb1, imgThb2, imgThb3, imgThb4];

const MainBody = () => {
    const products = useSelector(state => state.store.products);
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const [isImgModalShown, setIsImgModalShown] = useState(false);
    const toggleImgModelHandler = () => {
        setIsImgModalShown(state => !state);
    };
    const addToCartHandler = (num) => {
        dispatch(cartActions.addItem({
            id: products[0].id,
            name: products[0].name,
            price: products[0].price,
            amount: num,
        }));
    };
    const nextHandler = () => {
        setCount(state => {
            if (state === imgs.length - 1) {
                return 0;
            }
            return state + 1;
        });
    };
    const prevHandler = () => {
        setCount(state => {
            if (state === 0) {
                return 2;
            }
            return state - 1;
        });
    };
    const changeFromThb = (id) => {
        console.log(id);
        console.log(count);
        setCount(id);
    };
    return (
        <section className={styles.section}>
            {isImgModalShown && ReactDOM.createPortal(<Overlay className="img-overlay" toggleOverlay={toggleImgModelHandler} />, document.getElementById("overlay"))}
            {isImgModalShown && ReactDOM.createPortal(<ImgsModal toggle={toggleImgModelHandler} count={count} prevHandler={prevHandler} nextHandler={nextHandler} changeFromThb={changeFromThb} />, document.getElementById("img"))}
            <div className={styles[`section__item-wrapper`]}>
                <img onClick={toggleImgModelHandler} className={styles[`section__img`]} src={imgs[count]} alt="sneaker" />
                <div className={styles[`section__thumbnail`]}>
                    {imgThbs.map((imgThb, index) => <ThmbImg currentIndex={count} onClick={changeFromThb} id={index} img={imgThb} key={Math.random().toString()} />)}
                </div>
                <Button onClick={prevHandler} className={styles[`section__prev-btn`]}><FontAwesomeIcon icon={faChevronLeft} className={styles.icon} /></Button>
                <Button onClick={nextHandler} className={styles[`section__next-btn`]}><FontAwesomeIcon icon={faChevronRight} className={styles.icon} /></Button>
            </div>
            <h2 className={styles[`section__title`]}>Sneaker Company</h2>
            <article className={styles[`item`]}>
                <h1 className={styles[`item__name`]}>Fall Limited Edition Sneakers</h1>
                <p className={styles[`item__desc`]}>{`These low-profile sneakers are your perfect casual wear companion.
                     Featuring a durable rubber outer sole, they'll withstand everything the
                      weather can offer.`}</p>

                <article className={styles[`item__price-details`]} >
                    <span >{`$${products[0].price.toFixed(2)}`}</span>
                    <span>{`${products[0].discount}%`}</span>
                    <span>{`$${products[0].initPrice.toFixed(2)}`}</span>
                </article>
            </article>
            <Form onSubmit={addToCartHandler} />
        </section>
    );
};

export default MainBody;