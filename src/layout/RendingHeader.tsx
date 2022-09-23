import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './HeaderStyle';

function RendingHeader() {
  return (
    <>
      <S.RendingHeader>
        <Link to="/rendingpage">
          <S.LogoImage />
        </Link>
        <div>
          <Link to="/project">
            <S.CProjectButton>프로젝트 생성</S.CProjectButton>
          </Link>
          <Link to="/Signin">
            <S.SignButton>로그인 / 회원가입</S.SignButton>
          </Link>
        </div>
      </S.RendingHeader>
    </>
  );
}

export default RendingHeader;
