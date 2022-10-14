import { memo } from 'react';
import styled from 'styled-components';

const BigLoadingAnimation = memo(() => {
  return (
    <Container>
      <Loadingio>
        <Ldio>
          <LdioONE></LdioONE>
          <LdioTWO></LdioTWO>
          <LdioTHREE></LdioTHREE>
          <LdioFOUR></LdioFOUR>
          <LdioFIVE></LdioFIVE>
          <LdioSIX></LdioSIX>
          <LdioSEVEN></LdioSEVEN>
          <LdioEIGHT></LdioEIGHT>
          <LdioNINE></LdioNINE>
          <LdioTEN></LdioTEN>
          <LdioELE></LdioELE>
          <LdioTWE></LdioTWE>
        </Ldio>
      </Loadingio>
    </Container>
  );
});

export default BigLoadingAnimation;

const Container = styled.div`
  width: 100%;
  height: 100%;
  @keyframes ldio-kphints1fnb {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
const Loadingio = styled.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
`;
const Ldio = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;
const LdioONE = styled.div`
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-kphints1fnb linear 1s infinite;
  background: #bfcfff;
  width: 12px;
  height: 24px;
  border-radius: 6px / 6.24px;
  transform-origin: 6px 52px;
  box-sizing: content-box;
  transform: rotate(0deg);
  animation-delay: -0.9166666666666666s;
`;
const LdioTWO = styled.div`
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-kphints1fnb linear 1s infinite;
  background: #bfcfff;
  width: 12px;
  height: 24px;
  border-radius: 6px / 6.24px;
  transform-origin: 6px 52px;
  box-sizing: content-box;
  transform: rotate(30deg);
  animation-delay: -0.8333333333333334s;
`;
const LdioTHREE = styled.div`
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-kphints1fnb linear 1s infinite;
  background: #bfcfff;
  width: 12px;
  height: 24px;
  border-radius: 6px / 6.24px;
  transform-origin: 6px 52px;
  box-sizing: content-box;
  transform: rotate(60deg);
  animation-delay: -0.75s;
`;
const LdioFOUR = styled.div`
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-kphints1fnb linear 1s infinite;
  background: #bfcfff;
  width: 12px;
  height: 24px;
  border-radius: 6px / 6.24px;
  transform-origin: 6px 52px;
  box-sizing: content-box;
  transform: rotate(90deg);
  animation-delay: -0.6666666666666666s;
`;
const LdioFIVE = styled.div`
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-kphints1fnb linear 1s infinite;
  background: #bfcfff;
  width: 12px;
  height: 24px;
  border-radius: 6px / 6.24px;
  transform-origin: 6px 52px;
  box-sizing: content-box;
  transform: rotate(120deg);
  animation-delay: -0.5833333333333334s;
`;
const LdioSIX = styled.div`
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-kphints1fnb linear 1s infinite;
  background: #bfcfff;
  width: 12px;
  height: 24px;
  border-radius: 6px / 6.24px;
  transform-origin: 6px 52px;
  box-sizing: content-box;
  transform: rotate(150deg);
  animation-delay: -0.5s;
`;
const LdioSEVEN = styled.div`
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-kphints1fnb linear 1s infinite;
  background: #bfcfff;
  width: 12px;
  height: 24px;
  border-radius: 6px / 6.24px;
  transform-origin: 6px 52px;
  box-sizing: content-box;
  transform: rotate(180deg);
  animation-delay: -0.4166666666666667s;
`;
const LdioEIGHT = styled.div`
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-kphints1fnb linear 1s infinite;
  background: #bfcfff;
  width: 12px;
  height: 24px;
  border-radius: 6px / 6.24px;
  transform-origin: 6px 52px;
  box-sizing: content-box;
  transform: rotate(210deg);
  animation-delay: -0.3333333333333333s;
`;
const LdioNINE = styled.div`
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-kphints1fnb linear 1s infinite;
  background: #bfcfff;
  width: 12px;
  height: 24px;
  border-radius: 6px / 6.24px;
  transform-origin: 6px 52px;
  box-sizing: content-box;
  transform: rotate(240deg);
  animation-delay: -0.25s;
`;
const LdioTEN = styled.div`
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-kphints1fnb linear 1s infinite;
  background: #bfcfff;
  width: 12px;
  height: 24px;
  border-radius: 6px / 6.24px;
  transform-origin: 6px 52px;
  box-sizing: content-box;
  transform: rotate(270deg);
  animation-delay: -0.16666666666666666s;
`;
const LdioELE = styled.div`
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-kphints1fnb linear 1s infinite;
  background: #bfcfff;
  width: 12px;
  height: 24px;
  border-radius: 6px / 6.24px;
  transform-origin: 6px 52px;
  box-sizing: content-box;
  transform: rotate(300deg);
  animation-delay: -0.08333333333333333s;
`;
const LdioTWE = styled.div`
  left: 94px;
  top: 48px;
  position: absolute;
  animation: ldio-kphints1fnb linear 1s infinite;
  background: #bfcfff;
  width: 12px;
  height: 24px;
  border-radius: 6px / 6.24px;
  transform-origin: 6px 52px;
  box-sizing: content-box;
  transform: rotate(330deg);
  animation-delay: 0s;
`;
