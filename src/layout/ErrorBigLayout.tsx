import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useAppSelector, useAppDispatch } from '@/store/store';
import { InputTextSynthErrorAction } from '@/store/workingProject/projectControlSlice';

function ErrorBigLayout({ errorData }: HistoryErrorProps) {
  console.log(errorData);
  const dispatch = useAppDispatch();
  // 타입 에러..해결이 안됨 추후에 수정할 예정
  if (errorData.status !== 403) {
    switch (errorData.data.message) {
      case '해당 회원을 찾을 수 없습니다.':
        alert(errorData.data.message);
        window.location.href = '/';
        break;
      case '해당 음성 모델을 찾을 수 없습니다.':
        alert(errorData.data.message);
        dispatch(
          InputTextSynthErrorAction({
            isInputTextSynthError: false,
            inputTextSynthError: {},
          }),
        );
        break;
      case '해당 프로젝트를 찾을 수 없습니다.':
        alert(errorData.data.message);
        window.location.href = '/history';
        break;
      // case '다른 곳에서 로그인 하였습니다.'
      case 401:
        alert(errorData.data.message);
        window.location.href = '/';
        break;
      default:
        alert(errorData.data.error);
        window.location.href = '/signin';
    }
  }
  switch (errorData.status) {
    case 403:
      alert('다른 곳에서 로그인 하였습니다.');
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
