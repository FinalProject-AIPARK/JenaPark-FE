import { useSignInMutation } from '@/api/useApi';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { Cookies } from 'react-cookie';
import { memo, useState } from 'react';

const SignInForm = memo(() => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const [requestSignIn] = useSignInMutation();
  const onSubmit = (signInValue: SignInFormInputs) => {
    requestSignIn(signInValue)
      .unwrap()
      .then((res) => {
        cookies.set('accessToken', res.data.accessToken);
        cookies.set('refreshToken', res.data.refreshToken);
        navigate('/');
      });
  };
  const KAKAO_AUTH_LOGIN = 'https://api.fafago.link/oauth2/authorization/kakao';
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_LOGIN;
  };
  const GOOGLE_AUTH_LOGIN = 'https://api.fafago.link/oauth2/authorization/google';
  const googleLogin = () => {
    window.location.href = GOOGLE_AUTH_LOGIN;
  };

  return (
    <S.Container>
      <div className="wrap">
        <img className="loginMan" src="/images/login-man.svg" alt="로그인맨" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>서비스를 이용하기 위해 로그인을 진행해주세요.</h1>

          <div className="signInput">
            <input {...register('email', { required: '아이디를 입력해 주세요' })} />
            <label>아이디</label>
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="signInput">
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: '비밀번호를 입력해 주세요' })}
            />
            <label>비밀번호</label>
            <div className="toggleShowPw">
              {showPassword ? (
                <img src="/showPassword.svg" onClick={toggleShowPassword}></img>
              ) : (
                <img src="/hidePassword.svg" onClick={toggleShowPassword}></img>
              )}
            </div>
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <button type="submit">로그인</button>

          <div className="links">
            <span onClick={() => navigate('/signup')}>회원가입</span>
            <span onClick={() => navigate('/signup')}>비밀번호 찾기</span>
          </div>

          <div className="snsLogin">
            <h2>SNS계정으로 로그인/가입</h2>
            <div className="snsImgBox">
              <img onClick={googleLogin} src="/images/googleLogin.svg" alt="구글 로그인 버튼" />
              <img onClick={kakaoLogin} src="/images/kakaoLogin.svg" alt="카카오 로그인 버튼" />
            </div>
          </div>

          <div className="terms">
            <span>개인정보 처리방침</span>
            <span>서비스 이용약관</span>
          </div>
        </form>
      </div>
    </S.Container>
  );
});

interface SignInFormInputs {
  email: string;
  password: string;
}

export default SignInForm;
