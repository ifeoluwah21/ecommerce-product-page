/* eslint-disable react/prop-types */
import React from 'react';

import styles from "./ThmbImg.module.scss";

const ThmbImg = (props) => {
    return (
        <img className={styles.img} src={props.img} alt="Thumbnail Image" />
    );
};

export default ThmbImg;
