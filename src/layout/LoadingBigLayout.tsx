import React from 'react';
import styled from 'styled-components';
import LoadingAnimationBlue from '@/layout/LoadingAnimationBlue';

function LoadingBigLayout() {
  return (
    <LoadingContain>
      <LoadingBox>
        <LoadingAnimationBlue ballSize="4rem" />
      </LoadingBox>
      <Background />
    </LoadingContain>
  );
}

const LoadingContain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
const LoadingBox = styled.div`
  width: 13rem;
  height: 13rem;
  z-index: 3;
`;
const Background = styled.div`
  background-color: #000;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
  z-index: 2;
`;

export default LoadingBigLayout;
