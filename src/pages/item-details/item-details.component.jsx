import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CustomButton from '../../components/custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { selectItem } from '../../redux/shop/shop.selectors';
import SliderOfPhotos from '../../components/slider/slider.component';

import './item-details.style.scss'

const ItemDetailsPage = () => {
  const dispatch = useDispatch();
  const itemId = useParams().itemId;
  const itemToShow = useSelector(selectItem(itemId));
  const { name, imageUrl, price, description, slider } = itemToShow;

  return (
    <div className='item-details'>
      <div className='item-image'>
        {/* <img src={`${imageUrl}`} alt='item' className='image' /> */}
        <SliderOfPhotos photos={[imageUrl, ...slider]} />
      </div>
      <div className='description'>
        <h2 className='title'>{name}</h2>
        {
          description.map(paragraph =>
            <p className='description-text' key={`${Math.random() * 100}`} >
              {paragraph}
            </p>)
        }
        <div className='description-footer'>
          <CustomButton onClick={() => dispatch(addItem(itemToShow))}> Add to Cart</CustomButton>
          <span className='price'>Price: ${price}</span>
        </div>
      </div>
    </div>
  )
};

export default ItemDetailsPage;