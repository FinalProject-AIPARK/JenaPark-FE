import { createContext, useState } from 'react';
import SignUpForm from '../../components/signUp/Form';

const initialFormData = {
  email: '',
  username: '',
  pw: '',
  confirmPw: '',
};

export const FormContext = createContext({
  formData: initialFormData as typeof initialFormData,
  setFormData: (formData: typeof initialFormData) => {},
});

const SignUp = () => {
  const [formData, setFormData] = useState(initialFormData);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <h1>서비스를 이용하기 위해 회원가입을 진행해주세요.</h1>
      <SignUpForm />
    </FormContext.Provider>
  );
};

export default SignUp;
