import React from 'react';
import styled from 'styled-components';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

function HistoryErrorLayout({ error }: HistoryErrorProps) {
  // if (error.data) alert(error.data.message);

  console.log(error);
  // window.location.href = '/';
  return (
    <LoadingContain>
      <button style={{ zIndex: '3' }} onClick={() => console.log(error)}>
        aswegsdgas
      </button>
      <Background />
    </LoadingContain>
  );
}

interface SerializedError {
  name?: string;
  message?: string;
  stack?: string;
  code?: string;
}
interface HistoryErrorProps {
  error: FetchBaseQueryError | SerializedError;
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

export default HistoryErrorLayout;
