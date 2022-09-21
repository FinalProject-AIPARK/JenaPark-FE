import { useContext, useEffect, useRef } from 'react';
import { FormContext } from '../../pages/SignUp';

const USERNAME_REGEX = new RegExp('^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$');
const PW_REGEX = new RegExp(
  '^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()._-]{8,16}$',
);

const ERROR_MSG: any = {
  required: '필수 정보입니다.',
  invalidUsername:
    '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
  invalidPw: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
  invalidConfirmPw: '비밀번호가 일치하지 않습니다.',
};

const SignUpFormInput = ({
  id,
  label,
  inputProps,
  errorData,
  setErrorData,
}: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { formData, setFormData }: any = useContext(FormContext);

  const checkRegex = (inputId: any) => {
    let result: any;
    const value = formData[inputId];
    if (value.length === 0) {
      result = 'required';
    } else {
      switch (inputId) {
        case 'username':
          result = USERNAME_REGEX.test(value) ? true : 'invalidUsername';
          break;
        case 'pw':
          result = PW_REGEX.test(value) ? true : 'invalidPw';
          break;
        case 'confirmPw':
          result = value === formData['pw'] ? true : 'invalidConfirmPw';
          break;
        default:
          return;
      }
    }
    setErrorData((prev: any) => ({ ...prev, [inputId]: result }));
  };

  useEffect(() => {
    if (id === 'email') {
      inputRef.current?.focus();
    }
  }, []);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        ref={inputRef}
        value={formData[id]}
        onChange={(e) =>
          setFormData((prev: any) => ({ ...prev, [id]: e.target.value }))
        }
        onBlur={() => checkRegex(id)}
        {...inputProps}
      />
      {/* <div> {errorData[id] !== true ? ERROR_MSG[errorData[id]] : ''}</div> */}
    </div>
  );
};

export default SignUpFormInput;
