/* eslint-disable react/prop-types */
import React from 'react';
import styles from "./Overlay.module.scss";

const Overlay = (props) => {
    return (
        <div onClick={ props.toggleOverlay } className={ styles.overlay }></div>
    );
};

export default Overlay;