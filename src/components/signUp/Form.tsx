import { useState } from 'react';
import SignUpFormInput from './FormInput';

const initialErrorData = {
  email: '',
  username: '',
  pw: '',
  confirmPw: '',
};

const SignUpForm = (props: any) => {
  const { errorData, setErrorData }: any = useState(initialErrorData);

  return (
    <form id="form" autoComplete="off">
      <SignUpFormInput
        id={'email'}
        label={'이메일'}
        inputProps={{
          type: 'eamil',
          placeholder: '이메일을 입력해주세요.',
        }}
      />

      <SignUpFormInput
        id={'username'}
        label={'닉네임'}
        errorData={errorData}
        setErrorData={setErrorData}
        inputProps={{ type: 'text', placeholder: '닉네임을 입력해주세요.' }}
      />

      <SignUpFormInput
        id={'pw'}
        label={'비밀번호'}
        errorData={errorData}
        setErrorData={setErrorData}
        inputProps={{
          type: 'password',
          placeholder: '비밀번호를 입력해주세요.',
          autoComplete: 'off',
        }}
      />

      <SignUpFormInput
        id={'confirmPw'}
        label={'비밀번호 확인'}
        errorData={errorData}
        setErrorData={setErrorData}
        inputProps={{
          type: 'password',
          placeholder: '비밀번호를 한번 더 입력해주세요.',
          autoComplete: 'off',
        }}
      />

      <div>
        <input id="submit" type="submit" value="가입하기" />
      </div>
    </form>
  );
};

export default SignUpForm;
