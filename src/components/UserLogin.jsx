import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // const validateEmail = () => {
  //   const emailRegex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}$/;
  //   // console.log(emailRegex);
  //   console.log(email);
  //   if (email.endsWith('.ru')) {
  //     // console.log(!emailRegex.test(email));
  //     setEmailError('');
  //   } else {
  //     setEmailError('Yalnız .ru domenlərinə icazə verilir.');
  //     // console.log(emailError);
  //   }
  // };

  const validatePassword = () => {
    if (password.length < 7) {
      setPasswordError('Ən azı 8 simvol.');
    } else {
      setPasswordError('');
    }
  };
useEffect(()=>{
  const validateEmail = () => {
    // const emailRegex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}$/;
    // console.log(emailRegex);
    console.log(email);
    if (email.endsWith('.ru')) {
      // console.log(!emailRegex.test(email));
      setEmailError('');
    } else {
      setEmailError('Yalnız .ru domenlərinə icazə verilir.');
      // console.log(emailError);
    }
  };
  validateEmail()
},[ email])

  const handleEmailChange = (e) => {
    // validateEmail(e.target.value);
      setEmail(e.target.value);
    
    // const validateEmail = () => {
    //   const emailRegex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}$/;
    //   // console.log(emailRegex);
    //   console.log(email);
    //   if (email.endsWith('.ru')) {
    //     // console.log(!emailRegex.test(email));
    //     setEmailError('');
    //   } else {
    //     setEmailError('Yalnız .ru domenlərinə icazə verilir.');
    //     // console.log(emailError);
    //   }
    // };
    // validateEmail()
    // setEmailError('');
    // console.log(e.target.value);
    
    
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
    validatePassword();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // console.log(emailError);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          id="email"
          // value={email}
          onChange={handleEmailChange}
         
        />
        {emailError && <div className="error">{emailError}</div>}
      </div>

      <div>
        <label htmlFor="password">Parol:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <div className="error">{passwordError}</div>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
};


UserLogin.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default UserLogin;