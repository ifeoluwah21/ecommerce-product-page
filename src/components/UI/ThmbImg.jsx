/* eslint-disable react/prop-types */
import React from 'react';

import styles from "./ThmbImg.module.scss";


const ThmbImg = (props) => {
    const clickHandler = () => {
        props.onClick(props.id);
    };
    return (
        <div className={`${styles[`img-wrapper`]} ${props.currentIndex === props.id ? styles.active : ""}`}>
            <img onClick={clickHandler} src={props.img} alt="Thumbnail Image" />
        </div>

    );
};

export default ThmbImg;
