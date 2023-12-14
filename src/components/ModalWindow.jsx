import Modal from 'react-modal';
import Button from './Button';

import IconDelete from '../assets/icon-delete.svg?react';
import productImage1Thumb from '/image-product-1-thumbnail.jpg';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '16%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '20%',
    maxWidth: '420px',
  },
};

const ModalWindow = ({ modalIsOpen, closeModal, cart, resetCart }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Cart">
        {!cart.count ? (
          <section className="cart-content">
            <h2>Your Cart Is Empty</h2>
            <Button onClick={closeModal}>Continue Shopping</Button>
          </section>
        ) : (
          <section className="cart-content">
            <h2>Cart</h2>
            <section className="cart-details">
              <img src={productImage1Thumb} alt="product image thumb" />
              <div className="cart-total">
                <p>{cart.title}</p>
                <section>
                  <p>{`$${cart.calculatePrice()} x ${cart.count}`}</p>
                  <span>{`$${cart.calculatePrice() * cart.count}`}</span>
                </section>
              </div>
              <IconDelete onClick={resetCart} aria-label="delete button icon" />
            </section>
            <Button onClick={closeModal}>Checkout</Button>
          </section>
        )}
      </Modal>
    </div>
  );
};

export default ModalWindow;
