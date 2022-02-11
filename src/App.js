import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/users.selector';

const App = () => {
  
  const currentUser = useSelector(selectCurrentUser); //instead of mapStateToProps in 'connect'
  const dispatch = useDispatch(); //instead of mapDispatchToProps in 'connect'

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop/*' element={<ShopPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/signin' element={
          currentUser ?
            <Navigate to='/' />
            : (
              <SignInAndSignUpPage />
            )} />
      </Routes>
    </>
  );
}

export default App;
