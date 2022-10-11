import { useSignUpMutation } from '@/api/useApi';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

interface SignUpFormInputs {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpForm() {
  const navigate = useNavigate();
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormInputs>();
  const [requestSignUp] = useSignUpMutation();
  const onSubmit = (data: SignUpFormInputs) => {
    requestSignUp(data)
      .unwrap()
      .then(() => {
        navigate('/signin');
      });
  };

  return (
    <S.Container>
      <img className="registerGirl" src="/images/register-girl.svg" alt="레지스터걸" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>서비스를 이용하기 위해 회원가입을 진행해주세요.</h1>
        <article>
          <label>이메일</label>
          <input
            {...register('email', {
              required: '필수 정보입니다.',
              pattern: {
                value: /^[A-Za-z0-9]*[@]{1}[a-z]*[.][a-z]{1,3}$/,
                message: '올바른 이메일을 입력해주세요.',
              },
            })}
          />
          <span>{errors?.email?.message}</span>
        </article>

        <article>
          <label>닉네임</label>
          <input
            {...register('username', {
              required: '필수 정보입니다.',
              pattern: {
                value: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/,
                message: '2~16자의 영문 대 소문자, 숫자와 한글만 사용 가능합니다.',
              },
            })}
          />
          <span>{errors?.username?.message}</span>
        </article>

        <article>
          <label>비밀번호</label>
          <input
            type="password"
            {...register('password', {
              required: '필수 정보입니다.',
              pattern: {
                value: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-z0-9!@#$%^&*()_+]{8,16}$/,
                message: '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
              },
            })}
          />
          <span>{errors?.password?.message}</span>
        </article>

        <article>
          <label>비밀번호 확인</label>
          <input
            type="password"
            {...register('confirmPassword', {
              required: '필수 정보입니다.',
              validate: (value) => value === watch('password') || '비밀번호가 일치하지 않습니다.',
            })}
          />
          <span>{errors?.confirmPassword?.message}</span>
        </article>

        <button type="submit">가입하기</button>
      </form>
    </S.Container>
  );
}
