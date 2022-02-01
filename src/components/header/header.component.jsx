import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/users.selector';

// import './header.style.scss'
import { StyledHeader, StyledLogo, StyledLink, StyledOptions } from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <StyledHeader>
    <StyledLogo to='/' >
      <Logo className='logo' />
    </StyledLogo>
    <StyledOptions>
      <StyledLink to='/shop'>SHOP</StyledLink>
      <StyledLink to='/shop'>CONTACT</StyledLink>
      {
        currentUser ?
          <StyledLink as='div' onClick={() => auth.signOut()}> SIGN OUT </StyledLink>
          :
          <StyledLink  to='/signin' > SIGN IN</StyledLink>
      }
      <CartIcon />
    </StyledOptions>
    {
      hidden ? null : <CartDropdown />
    }
  </StyledHeader>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header)