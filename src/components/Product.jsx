import Button from './Button';
import plusImage from '../assets/icon-plus.svg';
import minusImage from '../assets/icon-minus.svg';
import CartIcon from '../assets/icon-cart.svg?react';

const Product = ({ handleCount, handleInputChange, itemsCount, handleCart }) => {
  const product = {
    title: 'Fall Limited Edition Sneakers',
    descr:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    regPrice: 250,
    discountRate: 0.5,
    calculatePrice: function () {
      return this.regPrice - this.regPrice * this.discountRate;
    },
  };

  return (
    <div className="container product-container">
      <p className="product-company-details">Sneaker Company</p>
      <p className="product-title">{product.title}</p>
      <p className="product-description">{product.descr}</p>
      <div className="product-price">
        <div className="item-price-discount">
          <p className="item-price">{`$ ${product.calculatePrice()}`}</p>
          <p className="item-discount">{`${product.discountRate * 100}%`}</p>
        </div>
        <p className="item-regular-price">{`$ ${product.regPrice}.00`}</p>
      </div>
      <section className="product-controls">
        <Button type="count" onClick={() => handleCount('decr')}>
          <img src={minusImage} alt="decrease image" />
        </Button>

        <input
          aria-label="quantity"
          onChange={handleInputChange}
          type="number"
          value={itemsCount}
          min={0}
          max={99}
        />

        <Button type="count" onClick={() => handleCount('incr')}>
          <img src={plusImage} alt="increase image" />
        </Button>
      </section>
      <Button type="add" onClick={() => handleCart(product)}>
        <span className="add-to-cart-btn">
          <CartIcon className="product-cart-icon" aria-label="cart image" /> Add To Cart
        </span>
      </Button>
    </div>
  );
};

export default Product;
