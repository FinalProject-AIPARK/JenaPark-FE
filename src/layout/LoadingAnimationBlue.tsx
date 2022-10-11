import React from 'react';
import styled from 'styled-components';

function LoadingAnimationBlue({ ballSize }: loadingBlueProps) {
  return (
    <Container>
      <Spinner>
        <Hoiwvr>
          <LbioONE size={ballSize}></LbioONE>
          <LbioTWO size={ballSize}></LbioTWO>
          <LbioTHREE size={ballSize}></LbioTHREE>
        </Hoiwvr>
      </Spinner>
    </Container>
  );
}

interface loadingBlueProps {
  ballSize: string;
}
interface size {
  size: string;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  @keyframes ldio-hoiwvr2fbr-o {
    0% {
      opacity: 1;
      transform: translate(0 0);
    }
    49.99% {
      opacity: 1;
      transform: translate(80.39999999999999px, 0);
    }
    50% {
      opacity: 0;
      transform: translate(80.39999999999999px, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, 0);
    }
  }
  @keyframes ldio-hoiwvr2fbr {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(80.39999999999999px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
const Spinner = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  overflow: hidden;
  background: none;
`;
const Hoiwvr = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;
const LbioONE = styled.div<size>`
  position: absolute;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  top: 60.3px;
  left: 20.099999999999998px;
  background: #a7d4ec;
  animation: ldio-hoiwvr2fbr 1s linear infinite;
  animation-delay: -0.5s;
  box-sizing: content-box;
`;
const LbioTWO = styled.div<size>`
  position: absolute;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  top: 60.3px;
  left: 20.099999999999998px;
  background: #182731;
  animation: ldio-hoiwvr2fbr 1s linear infinite;
  animation-delay: 0s;
  box-sizing: content-box;
`;
const LbioTHREE = styled.div<size>`
  position: absolute;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  top: 60.3px;
  left: 20.099999999999998px;
  background: #a7d4ec;
  animation: ldio-hoiwvr2fbr-o 1s linear infinite;
  animation-delay: -0.5s;
  box-sizing: content-box;
`;

export default LoadingAnimationBlue;
