import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './bootstrap.min.css';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css"></link>
        <link href="https://fonts.googleapis.com/css?family=Lora:400,700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Cabin:400,500,600,700&display=swap" rel="stylesheet"></link>
      <div className='form-container'>
        
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
        <span className='form-input-login'>
          Đã có tài khoản? Đăng nhập <a href='#'>tại đây</a>
        </span>
      </div>
    </>
  );
};

export default Form;