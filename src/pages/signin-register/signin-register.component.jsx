import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';
import './signin-register.styles.scss';

const SignInRegister = () => {
  return (
    <div className='signin-register'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInRegister;
