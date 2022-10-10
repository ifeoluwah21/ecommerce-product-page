/* eslint-disable react/prop-types */
import React from 'react';

import styles from "./ImgsModal.module.scss";

import img1 from "../../assets/images/image-product-1.jpg";
import img2 from "../../assets/images/image-product-2.jpg";
import img3 from "../../assets/images/image-product-3.jpg";
import img4 from "../../assets/images/image-product-4.jpg";
import imgThb1 from "../../assets/images/image-product-1-thumbnail.jpg";
import imgThb2 from "../../assets/images/image-product-2-thumbnail.jpg";
import imgThb3 from "../../assets/images/image-product-3-thumbnail.jpg";
import imgThb4 from "../../assets/images/image-product-4-thumbnail.jpg";
import Button from './Button';
import ThmbImg from './ThmbImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';

const imgs = [img1, img2, img3, img4];
const imgThbs = [imgThb1, imgThb2, imgThb3, imgThb4];

const ImgsModal = (props) => {
    const nextHandler = () => {
        props.nextHandler();
    };
    const prevHandler = () => {
        props.prevHandler();
    };
    const changeFromThb = (id) => {
        props.changeFromThb(id);
    };
    return (
        <div className={styles[`item-wrapper`]}>
            <div className={styles.cancel}>
                <FontAwesomeIcon onClick={props.toggle} icon={faXmark} className={styles.icon} />
            </div>
            <img className={styles[`item-wrapper__img`]} src={imgs[props.count]} alt="sneaker" />
            <div className={styles[`item-wrapper__thumbnail`]}>
                {imgThbs.map((imgThb, index) => <ThmbImg currentIndex={props.count} onClick={changeFromThb} id={index} img={imgThb} key={Math.random().toString()} />)}
            </div>
            <Button onClick={prevHandler} className={styles[`item-wrapper__prev-btn`]}><FontAwesomeIcon icon={faChevronLeft} className={styles.icon} /></Button>
            <Button onClick={nextHandler} className={styles[`item-wrapper__next-btn`]}><FontAwesomeIcon icon={faChevronRight} className={styles.icon} /></Button>
        </div>
    );
};

export default ImgsModal;