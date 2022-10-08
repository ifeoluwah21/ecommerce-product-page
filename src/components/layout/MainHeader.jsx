/* eslint-disable react/prop-types */
import { faBars, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/image-avatar.png";
import styles from "./MainHeader.module.scss";

const MainHeader = (props) => {
    return (
        <header className={ styles.header }>
            <span onClick={ props.openNav } className={ styles[`header__menu-btn`] } tabIndex={ "0" }>
                <FontAwesomeIcon className={ styles.icon } icon={ faBars } />
            </span>
            <div className={ styles[`header__logo-wrapper`] }>
                <img src={ logo } alt="Company Logo" />
            </div>
            <nav className={ styles.nav }>
                <span className={ styles[`nav__close-btn`] } tabIndex={ "0" }>
                    <FontAwesomeIcon className={ styles.icon } icon={ faXmark } />
                </span>
                <ul className={ styles[`nav__list`] }>
                    <li className={ styles[`nav__item`] }><a href="#">Collections</a></li>
                    <li className={ styles[`nav__item`] }><a href="#">Men</a></li>
                    <li className={ styles[`nav__item`] }><a href="#">Women</a></li>
                    <li className={ styles[`nav__item`] }><a href="#">About</a></li>
                    <li className={ styles[`nav__item`] }><a href="#">Contact</a></li>
                </ul>
            </nav>
            <span className={ styles[`header__cart-btn`] } tabIndex={ "0" }>
                <span>{ 1 }</span>
                <FontAwesomeIcon className={ styles.icon } icon={ faCartShopping } />
            </span>
            <div className={ styles[`header__avatar-wrapper`] }>
                <img src={ avatar } alt="avatar" />
            </div>
        </header>
    );
};

export default MainHeader;