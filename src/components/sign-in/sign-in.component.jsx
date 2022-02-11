import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.style.scss'

const SignIn = () => {

  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userInfo;

  const handleSubmit = async event => {
    event.preventDefault();

    dispatch(emailSignInStart({email, password}));
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserInfo({ ...userInfo, [name]: value })
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons'>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type='button'
            onClick={() =>dispatch(googleSignInStart())}
            isGoogleSignIn
          > Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn;