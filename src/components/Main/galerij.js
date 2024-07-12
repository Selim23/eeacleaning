// src/components/Carousel.js

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Aangepaste CSS voor full-screen view

// Importeer de afbeeldingen
import image1 from '../../images/galerij/badkamer.jpg';
import image2 from '../../images/galerij/gang.jpg';
import image3 from '../../images/galerij/marmer.jpg';
import image4 from '../../images/galerij/marmer2.jpg';
import image5 from '../../images/galerij/schoonkeuken.jpg';
import image6 from '../../images/galerij/trap.jpg';
import image7 from '../../images/galerij/traphal.jpg';
import image8 from '../../images/galerij/woonkamer.jpg';
// Voeg hier meer afbeeldingen toe als je die hebt

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const Carousel = () => {

  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowArrows(false);
      } else {
        setShowArrows(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "5px",
    slidesToShow: 3,
    speed: 300,
    dots: false,
    slidesToScroll: 1,
    autoplay: true,
    arrows: showArrows,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 1800, // Op smartphones
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const handleImageClick = (src) => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = "block";
    modalImg.src = src;
  };

  const closeModal = () => {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
  };

  return (
    <div className='bg-blue-400'>
      <div class='pt-6 lg:pb-8'>
        <h1 className="text-3xl text-white font-bold ">
          Benieuwd naar onze werk? <br/>
          Bekijk het hier onder.
        </h1>
      </div>
      <Slider {...settings} className='md:w-5/6 xl:w-4/6 mx-auto py-8'>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover cursor-pointer"
              onClick={() => handleImageClick(image)}
              style={{ width: '100%', height: '500px' }} // Inline styles for width and height
            />
          </div>
        ))}
      </Slider>
      <div id="modal" className="modal z-50 mt-16 md:mt-20 lg:mt-32" onClick={closeModal}>
        <span className="close">&times;</span>
        <img
          className="modal-content p-12"
          id="modal-img"
          style={{ width: '100%', height: 'auto', maxWidth: '900px', maxHeight: '700px' }} // Inline styles for modal image
        />
      </div>
    </div>
  );
};

export default Carousel;
