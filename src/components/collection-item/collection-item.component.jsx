import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { useNavigate} from 'react-router-dom';
import { StyledCollectionItem, StyledCustomButtonInsideItem, StyledFooter, StyledImage, StyledName, StyledPrice } from './collection-item.style'

// import './collection-item.style.scss'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const navigate = useNavigate();
  return (
    <StyledCollectionItem >
      <StyledImage
        onClick={() => navigate(`/details/${item.id}`)}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <StyledFooter>
        <StyledName>{name}</StyledName>
        <StyledPrice>{price}</StyledPrice>
      </StyledFooter>
      <StyledCustomButtonInsideItem onClick={() => addItem(item)} inverted> Add to cart</StyledCustomButtonInsideItem>
    </StyledCollectionItem>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem)