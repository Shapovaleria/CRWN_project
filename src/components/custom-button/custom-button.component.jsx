import React from 'react';

import { StyledCustomButton } from './custom-button.styles';
// import './custom-button.style.scss';

const CustomButton = ({children, ...props}) => (
  <StyledCustomButton {...props} >
    {children}
  </StyledCustomButton>
)

export default CustomButton