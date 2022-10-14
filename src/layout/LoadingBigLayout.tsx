import { memo } from 'react';
import styled from 'styled-components';
import LoadingAnimation from './BigLoadingAnimation';

const LoadingBigLayout = memo(() => {
  return (
    <LoadingContain>
      <LoadingBox>
        <LoadingAnimation />
      </LoadingBox>
      <Background />
    </LoadingContain>
  );
});

const LoadingContain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
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
