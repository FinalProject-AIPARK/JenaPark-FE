import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/images/Logo.png';

function RendingHeader() {
  return (
    <>
      <RendingHeaderContainer>
        <Link to="/rendingpage">
          <LogoImage />
        </Link>
        <div>
          <Link to="/project">
            <CProjectButton>프로젝트 생성</CProjectButton>
          </Link>
          <Link to="/Signin">
            <SignButton>로그인 / 회원가입</SignButton>
          </Link>
        </div>
      </RendingHeaderContainer>
    </>
  );
}

const RendingHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const LogoImage = styled.img.attrs({
  src: `${logo}`,
})`
  width: 6.25rem;
  height: 2.5rem;
`;

const CProjectButton = styled.button`
  width: 7.75rem;
  height: 2.44rem;
  font-size: 1rem;
  font-weight: 400;
  background-color: #80a4ff;
  color: #000;
  border: 0;
  outline: 0;
  border-radius: 0.3125rem;
  cursor: pointer;
  margin-right: 1.06rem;
`;

const SignButton = styled.button`
  width: 7.75rem;
  height: 2.44rem;
  font-size: 1rem;
  font-weight: 400;
  background-color: #fff;
  color: #000;
  border: 0;
  outline: 0;
  border-radius: 0.3125rem;
  cursor: pointer;
`;

export default RendingHeader;
