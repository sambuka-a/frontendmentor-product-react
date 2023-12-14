import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Header from './components/Header';
import Product from './components/Product';
import Slider from './components/Slider';
import ModalWindow from './components/ModalWindow';

function App() {
  const [itemsCount, setItemsCount] = useState(0);
  const [cart, setCart] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  const isDesktopOrMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleCart = (product) => {
    const updatedProduct = { ...product, count: (cart.count || 0) + itemsCount };
    setCart(updatedProduct);
    setItemsCount(0);
  };

  const resetCart = () => {
    setCart((prevState) => {
      const updatedProduct = { ...cart, count: 0 };
      return updatedProduct;
    });
  };

  const handleCount = (action) => {
    if (action === 'incr') {
      setItemsCount(itemsCount + 1);
    } else if (action === 'decr' && itemsCount > 0) {
      setItemsCount(itemsCount - 1);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue)) {
      setItemsCount(inputValue);
    }
  };

  return (
    <>
      <Header openModal={openModal} cart={cart} isDesktopOrMobile={isDesktopOrMobile} />
      <section className={!isDesktopOrMobile && 'container product-page-container'}>
        <Slider />
        <Product
          handleCount={handleCount}
          handleInputChange={handleInputChange}
          itemsCount={itemsCount}
          handleCart={handleCart}
        />
      </section>

      <ModalWindow
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        cart={cart}
        resetCart={resetCart}
      />
    </>
  );
}

export default App;
