import { useEffect, useCallback } from 'react';
import SignUpFormInput from '../../layout/SignUpFormInput';
import { useForm } from 'react-hook-form';
import axios from 'axios';
// import { SignButton } from '../../layout/user/User.components';

const EMAIL_REGEX = new RegExp('^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');
const USERNAME_REGEX = new RegExp('^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$');
const PW_REGEX = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()._-]{8,16}$');
const ERROR_MSG = {
  required: '필수 정보입니다.',
  invalidEmail: '올바른 이메일을 입력해주세요.',
  invalidUsername: '영문 대 소문자, 숫자와 한글만 사용가능(2~16자)',
  invalidPw: '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
  invalidConfirmPw: '비밀번호가 일치하지 않습니다.',
};

const SignUpForm = () => {
  const { register, handleSubmit, setFocus, getValues, formState, trigger } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = useCallback(() => {
    null;
  }, []);

  useEffect(() => {
    setFocus('email');
  }, []);

  const requestSignUp = async () => {};

  return (
    <>
      <form id="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <SignUpFormInput
          id={'email'}
          label={'이메일'}
          errorMsg={formState.errors['email']?.message}
          inputProps={{
            type: 'text',
            placeholder: '이메일 입력해주세요.',
            ...register('email', {
              pattern: {
                value: EMAIL_REGEX,
                message: ERROR_MSG.invalidEmail,
              },
              required: ERROR_MSG.required,
            }),
          }}
          trigger={trigger}
        />

        <SignUpFormInput
          id={'username'}
          label={'닉네임'}
          errorMsg={formState.errors['username']?.message}
          inputProps={{
            type: 'text',
            placeholder: '닉네임 입력해주세요.',
            ...register('username', {
              pattern: {
                value: USERNAME_REGEX,
                message: ERROR_MSG.invalidUsername,
              },
              required: ERROR_MSG.required,
            }),
          }}
          trigger={trigger}
        />

        <SignUpFormInput
          id={'pw'}
          label={'비밀번호'}
          errorMsg={formState.errors['pw']?.message}
          inputProps={{
            type: 'password',
            placeholder: '비밀번호를 입력해주세요',
            autoComplete: 'off',
            ...register('pw', {
              pattern: {
                value: PW_REGEX,
                message: ERROR_MSG.invalidPw,
              },
              required: ERROR_MSG.required,
              onBlur: () => trigger('confirmPw'),
            }),
          }}
        />

        <SignUpFormInput
          id={'confirmPw'}
          label={'비밀번호 확인'}
          errorMsg={formState.errors['confirmPw']?.message}
          inputProps={{
            type: 'password',
            placeholder: '비밀번호 확인을 입력해주세요.',
            autoComplete: 'off',
            ...register('confirmPw', {
              validate: {
                sameWithPw: (v) => v === getValues('pw') || ERROR_MSG.invalidConfirmPw,
              },
              required: ERROR_MSG.required,
            }),
          }}
        />
        <button>
          <input
            id="submit"
            type="submit"
            value="가입하기"
            onClick={() => {
              requestSignUp();
            }}
          />
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
