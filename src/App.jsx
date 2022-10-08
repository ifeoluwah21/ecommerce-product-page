
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.scss';
import Cart from './components/cart/Cart';
import MainBody from './components/layout/MainBody';
import MainHeader from './components/layout/MainHeader';
import Overlay from './components/layout/Overlay';

function App() {
  const [isNavShown, setIsNavShown] = useState(false);
  const [isCartShown, setIsCartShown] = useState(false);
  const toggleNavHandler = () => {
    setIsNavShown(state => !state);
  };
  return (
    <React.Fragment>
      <MainHeader openNav={ toggleNavHandler } />
      { isNavShown && ReactDOM.createPortal(<Overlay onCloseNav={ toggleNavHandler } />, document.getElementById("overlay")) }
      <main>
        { isCartShown && ReactDOM.createPortal(<Cart />, document.getElementById("cart")) }
        <MainBody />
      </main>
    </React.Fragment>
  );
}

export default App;
