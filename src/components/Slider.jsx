import 'react-image-gallery/styles/css/image-gallery.css';

import ImageGallery from 'react-image-gallery';
import { useMediaQuery } from 'react-responsive';

import productImage1 from '/image-product-1.jpg';
import productImage1Thumb from '/image-product-1-thumbnail.jpg';
import productImage2 from '/image-product-2.jpg';
import productImage2Thumb from '/image-product-2-thumbnail.jpg';
import productImage3 from '/image-product-3.jpg';
import productImage3Thumb from '/image-product-3-thumbnail.jpg';
import productImage4 from '/image-product-4.jpg';
import productImage4Thumb from '/image-product-4-thumbnail.jpg';

const Slider = () => {
  const isDesktopOrMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const images = [
    {
      original: productImage1,
      thumbnail: productImage1Thumb,
    },
    {
      original: productImage2,
      thumbnail: productImage2Thumb,
    },
    {
      original: productImage3,
      thumbnail: productImage3Thumb,
    },
    {
      original: productImage4,
      thumbnail: productImage4Thumb,
    },
  ];

  return (
    <div>
      {isDesktopOrMobile ? (
        <ImageGallery items={images} showThumbnails={false} />
      ) : (
        <ImageGallery items={images} />
      )}
    </div>
  );
};

export default Slider;
