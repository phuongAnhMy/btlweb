import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      {/* <div className = 'logoForm'>
      <img src="u2.png" alt=""></img>
      </div> */}
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Tạo tài khoản mới
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Họ và tên</label>
          <input
            className='form-input'
            type='text'
            name='name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>} 
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Tên đăng nhập</label>
          <input
            className='form-input'
            type='text'
            name='username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Mật khẩu</label>
          <input
            className='form-input'
            type='password'
            name='password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Xác nhận mật khẩu</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
      </form>
      
    </div>
  );
};

export default FormSignup;