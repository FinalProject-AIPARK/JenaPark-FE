import axios from 'axios';
import logo from '@/assets/images/logo.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveName } from '../../store/SignIn/signInSlice';
import { SignButton } from '../../styles/user/Layout';

const SignInForm = () => {
  const initialValue = {
    email: '',
    password: '',
  };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors]: any = useState({});
  const [displaySignInError, setDisplaySignInError] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const removeInputSpaces = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trim() });
  };

  const dispatch = useDispatch();

  const handleSignIn = (e: any) => {
    e.preventDefault();
    if (Object.values(formValues).indexOf('') > -1) {
      setFormErrors(validateSignInValues(formValues));
    } else {
      requestSignIn();
    }
  };

  const navigate = useNavigate();

  const requestSignIn = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/login`,
        formValues,
      );
      setFormErrors(validateSignInValues(formValues));
      setDisplaySignInError(false);
      const { accessToken, name } = response.data;
      window.localStorage.setItem('accessToken', accessToken);
      dispatch(saveName(name));
      navigate('/');
    } catch (e) {
      setFormErrors(validateSignInValues(formValues));
      setDisplaySignInError(true);
    }
  };

  const validateSignInValues = (values: any) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = '이메일을 입력해주세요!';
    }
    if (!values.password) {
      errors.password = '비밀번호를 입력해주세요!';
    }
    return errors;
  };

  return (
    <form onSubmit={handleSignIn}>
      <div className="input-wrapper">
        <p className="label">Email</p>
        <input
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={formValues.email}
          onChange={handleInputChange}
          onBlur={removeInputSpaces}
        />
        <p
          style={{ visibility: formErrors.email ? 'visible' : 'hidden' }}
          className="error-message"
        >
          {formErrors.email}
        </p>
      </div>
      <div className="input-wrapper">
        <p className="label">Password</p>
        <input
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={formValues.password}
          onChange={handleInputChange}
          onBlur={removeInputSpaces}
        />
        <p
          style={{ visibility: formErrors.password ? 'visible' : 'hidden' }}
          className="error-message"
        >
          {formErrors.password}
        </p>
      </div>
      <div className="button-wrapper">
        <SignButton type="submit">로그인</SignButton>
        <p
          className="error-message"
          style={{ visibility: displaySignInError ? 'visible' : 'hidden' }}
        >
          아이디가 존재하지 않거나 올바른 비밀번호가 아닙니다
        </p>
      </div>
      <p className="signup-text">
        아직 계정이 없으신가요?
        <span onClick={() => navigate('/signup')}>회원가입</span>
      </p>
    </form>
  );
};

export default SignInForm;
