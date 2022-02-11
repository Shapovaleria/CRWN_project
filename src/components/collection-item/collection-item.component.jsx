import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { useNavigate} from 'react-router-dom';
import { 
  StyledCollectionItem, 
  StyledCustomButtonInsideItem, 
  StyledFooter, 
  StyledImage, 
  StyledName, 
  StyledPrice 
} from './collection-item.style'

// import './collection-item.style.scss'

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  const navigate = useNavigate();
  return (
    <StyledCollectionItem >
      <StyledImage
        onClick={() => navigate(`/shop/items/${item.id}`)}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <StyledFooter>
        <StyledName>{name}</StyledName>
        <StyledPrice>{price}</StyledPrice>
      </StyledFooter>
      <StyledCustomButtonInsideItem onClick={() => dispatch(addItem(item))} inverted> Add to cart</StyledCustomButtonInsideItem>
    </StyledCollectionItem>
  )
}

export default CollectionItem;