import siteLogo from '../assets/logo.svg';
import CartIcon from '../assets/icon-cart.svg?react';
import user from '../assets/react.svg';

import { useMediaQuery } from 'react-responsive';

import MainNav from './MainNav.jsx';

const Header = ({ isDesktopOrMobile, openModal, cart }) => {
  return (
    <div className="container header-container">
      {isDesktopOrMobile ? (
        <>
          <MainNav isDesctopOrMobile={isDesktopOrMobile} />
          <div className="header-content">
            <img src={siteLogo} alt="logo" />
            <section className="header-content-controls">
              <section>
                {cart.count ? <span>{cart.count}</span> : null}
                <CartIcon className="cart-icon" onClick={openModal} />
              </section>
              <img src={user} alt="user panel image" />
            </section>
          </div>
        </>
      ) : (
        <div className="header-content">
          <img src={siteLogo} alt="logo" />
          <MainNav isDesktopOrMobile={isDesktopOrMobile} />
          <section className="header-content-controls">
            <section>
              {cart.count ? <span>{cart.count}</span> : null}
              <CartIcon className="cart-icon" onClick={openModal} />
            </section>
            <img src={user} alt="user panel image" />
          </section>
        </div>
      )}
    </div>
  );
};

export default Header;
