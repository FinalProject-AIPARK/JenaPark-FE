import React, { useState } from 'react';
import { onLogIn } from '../../api/useApi';
import { LogInForm } from '../../styles/user/User.components';

const LogIn = () => {
  const [{ email, password }, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await onLogIn({ email, password });

    if (response && response.error) {
      setError(response.error);
    }

    return response;
  };

  return (
    <LogInForm onSubmit={login}>
      <label htmlFor="email">이메일</label>
      <input
        placeholder="이메일"
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setCredentials({ email: e.target.value, password })}
      />

      <label htmlFor="password">비밀번호</label>
      <input
        placeholder="비밀번호"
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setCredentials({ email, password: e.target.value })}
      />

      <button type="submit">로그인</button>
      {error.length > 0 && <p>{error}</p>}
    </LogInForm>
  );
};

export default LogIn;
