import { memo } from 'react';

const SignUpFormInput = ({ id, label, errorMsg, inputProps }: any) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} />
      <div>{errorMsg}</div>
    </div>
  );
};

export default memo(
  SignUpFormInput,
  (prevProps, nextProps) => prevProps.errorMsg === nextProps.errorMsg,
);
