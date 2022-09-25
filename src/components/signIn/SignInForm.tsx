import { useSignInMutation } from '@/api/useApi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

interface SignInFormInputs {
  email: string;
  password: string;
}

export default function SignInForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>();
  const [requestSignIn] = useSignInMutation();
  const onSubmit = (data: SignInFormInputs) => {
    requestSignIn(data)
      .unwrap()
      .then(() => {
        navigate('/');
      });
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>서비스를 이용하기 위해 로그인을 진행해주세요.</h1>
        <article>
          <input {...register('email', { required: '이메일을 입력해 주세요' })} />
          <label>이메일</label>
          {errors.email && <p>{errors.email.message}</p>}
        </article>

        <article>
          <input {...register('password', { required: '비밀번호를 입력해 주세요' })} />
          <label>비밀번호</label>
          {errors.password && <p>{errors.password.message}</p>}
        </article>
        <span onClick={() => navigate('/signup')}>회원가입</span>
        <button type="submit">로그인</button>
      </form>
    </S.Container>
  );
}
