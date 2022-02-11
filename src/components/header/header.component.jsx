import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/users.selector';
import { signOutStart } from '../../redux/user/user.actions';

// import './header.style.scss'
import { StyledHeader, StyledLogo, StyledLink, StyledOptions } from './header.styles';

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <StyledLogo to='/' >
        <Logo className='logo' />
      </StyledLogo>
      <StyledOptions>
        <StyledLink to='/shop'>SHOP</StyledLink>
        <StyledLink to='/shop'>CONTACT</StyledLink>
        {
          currentUser ?
            <StyledLink as='div' onClick={() => dispatch(signOutStart())}> SIGN OUT </StyledLink>
            :
            <StyledLink to='/signin' > SIGN IN</StyledLink>
        }
        <CartIcon />
      </StyledOptions>
      {
        hidden ? null : <CartDropdown />
      }
    </StyledHeader>
  )
};

export default Header;