import { useSignUpMutation } from '@/api/useApi';
import React, { useEffect, useState } from 'react';
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
  } = useForm<SignUpFormInputs>({ mode: 'onChange' });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
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
      <div className="wrap">
        <img className="registerGirl" src="/images/register-girl.svg" alt="레지스터걸" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>서비스를 이용하기 위해 회원가입을 진행해주세요.</h1>

          <div className="signUpInput">
            <article>
              <input
                className={errors.email ? 'error' : ''}
                {...register('email', {
                  required: '필수 정보입니다.',
                  pattern: {
                    value: /^[a-z0-9]{5,20}$/,
                    message: '5~20자의 영문 소문자, 숫자만 사용 가능합니다.',
                  },
                })}
              />
              <label>아이디</label>
              <span className="errorMsg">{errors?.email?.message}</span>
            </article>

            <article>
              <input
                {...register('username', {
                  required: '필수 정보입니다.',
                  pattern: {
                    value: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/,
                    message: '2~16자의 영문 대 소문자, 숫자와 한글만 사용 가능합니다.',
                  },
                })}
              />
              <label>닉네임</label>
              <span>{errors?.username?.message}</span>
            </article>

            <article>
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password', {
                  required: '필수 정보입니다.',
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-z0-9!@#$%^&*()_+]{8,16}$/,
                    message: '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
                  },
                })}
              />
              <label>비밀번호</label>
              <div className="toggleShowPw">
                {showPassword ? (
                  <img src="/icon/showPassword.svg" onClick={toggleShowPassword}></img>
                ) : (
                  <img src="/icon/hidePassword.svg" onClick={toggleShowPassword}></img>
                )}
              </div>
              <span>{errors?.password?.message}</span>
            </article>

            <article>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword', {
                  required: '필수 정보입니다.',
                  validate: (value) =>
                    value === watch('password') || '비밀번호가 일치하지 않습니다.',
                })}
              />
              <label>비밀번호 확인</label>
              <div className="toggleShowPw">
                {showConfirmPassword ? (
                  <img src="/icon/showPassword.svg" onClick={toggleShowConfirmPassword}></img>
                ) : (
                  <img src="/icon/hidePassword.svg" onClick={toggleShowConfirmPassword}></img>
                )}
              </div>
              <span>{errors?.confirmPassword?.message}</span>
            </article>
          </div>

          <button type="submit">가입하기</button>
        </form>
      </div>
    </S.Container>
  );
}
