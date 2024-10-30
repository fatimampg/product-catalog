import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImageCaroussel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setCurrentImage((prevState) => (prevState + 1) % images.length);
    }, 4000);
    return () => clearInterval(int);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden h-[100vh]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 easy-in-out 
            ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={image}
            alt="cover-img-1"
            className="w-full h-full object-cover"
            priority={index === 0}
            layout="fill"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCaroussel;
