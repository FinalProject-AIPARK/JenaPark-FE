import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

function ErrorBigLayout({ errorData }: HistoryErrorProps) {
  // 타입 에러..해결이 안됨 추후에 수정할 예정
  switch (errorData.status) {
    case 500:
      alert('해당 회원을 찾을 수 없습니다.');
      window.location.href = '/';
      break;
    case 400:
      alert(errorData.data.message);
      window.location.href = '/history';
    default:
      alert(errorData.data.error);
  }
  return (
    <LoadingContain>
      <Background />
    </LoadingContain>
  );
}

interface SerializedError {
  name?: string;
  message?: string;
  stack?: string;
  code?: string;
  data?: { error: string };
  status?: number;
}
interface HistoryErrorProps {
  errorData: FetchBaseQueryError | SerializedError;
}

const LoadingContain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
const Background = styled.div`
  background-color: #000;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
  z-index: 2;
`;

export default ErrorBigLayout;
