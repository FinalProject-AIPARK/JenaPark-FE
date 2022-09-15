import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const SignIn = () => {
  const initialValue = {
    email: '',
    password: '',
  };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [displaySignInError, setDisplaySignInError] = useState(false);

  const handleInputChange = (e: { target: { name: any, value: any } }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const removeInputSpaces = (e: { target: { name: any, value: any } }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trim() });
  };

  const dispatch = useDispatch();

  // const handleSignIn = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   if (Object.values(formValues).indexOf('') > -1) {
  //     setFormErrors(validateSignInValues(formValues));
  //   } else {
  //     requestSignIn();
  //   }
  // };

  const navigate = useNavigate();

  // const requestSignIn = async () => {
  //   try {
  //     const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, formValues);
  //     setFormErrors(validateSignInValues(formValues));
  //     setDisplaySignInError(false);
  //     const { accessToken, name } = response.data;
  //     window.localStorage.setItem('accessToken', accessToken);
  //     dispatch(saveName(name));
  //     navigate('/');
  //   } catch (e) {
  //     setFormErrors(validateSignInValues(formValues));
  //     setDisplaySignInError(true);
  //   }
  // };

  // const validateSignInValues = (values: { email: any, password: any }) => {
  //   const errors = {};
  //   if (!values.email) {
  //     errors.email = '이메일을 입력해주세요!';
  //   }
  //   if (!values.password) {
  //     errors.password = '비밀번호를 입력해주세요!';
  //   }
  //   return errors;
  // };

  return (
    <>
      <h1>로그인</h1>
    </>
  );
};

export default SignIn;
