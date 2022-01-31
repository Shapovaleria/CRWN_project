import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './slider.style.scss'

const SliderOfPhotos = ({photos}) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div >
        <Slider {...settings} >
          {
            photos.map(photo => (
              <div className='slide' key={photo}>
                <img src={photo} alt='item' className='item'/>
              </div>
            ))
          }
        </Slider>
      </div>
    )
  };


export default SliderOfPhotos;