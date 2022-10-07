import React from 'react';
import { useSignInMutation } from '@/api/useApi';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { Cookies } from 'react-cookie';

interface SignInFormInputs {
  email: string;
  password: string;
}

export default function SignInForm() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();
  const [requestSignIn] = useSignInMutation();
  const onSubmit = (signInValue: SignInFormInputs) => {
    requestSignIn(signInValue)
      .unwrap()
      .then((res) => {
        console.log(res);
        cookies.set('accessToken', res.data.accessToken);
        cookies.set('refreshToken', res.data.refreshToken);
        navigate('/');
      });
    // .catch((err) => {
    //   console.log(err);
    // });
  };
  return (
    <S.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>서비스를 이용하기 위해 로그인을 진행해주세요.</h1>
        <article>
          <label>이메일</label>
          <input {...register('email', { required: '이메일을 입력해 주세요' })} />
          {errors.email && <p>{errors.email.message}</p>}
        </article>
        <article>
          <label>비밀번호</label>
          <input
            type="password"
            {...register('password', { required: '비밀번호를 입력해 주세요' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </article>
        <span onClick={() => navigate('/signup')}>회원가입</span>
        <button type="submit">로그인</button>
      </form>
    </S.Container>
  );
}
