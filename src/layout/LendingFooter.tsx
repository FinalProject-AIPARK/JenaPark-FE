import React from 'react';
import styled from 'styled-components';
import Square from '/images/Vector.png';

function LendingFooter() {
  return (
    <>
      <FooterContainer>
        <ContentContainer>
          <AdressSquare>
            © 0000. AIPARK. ALL RIGHTS RESERVED <br />
            서울특별시 마포구 월드컵북로 396, 누리꿈스퀘어 연구개발타워 1012-2호 <br />
            R&D Tower 1012-2, Worldcup Buk-ro 396, Sangam-dong, Mapo-gu, Seoul
          </AdressSquare>
          <PrivacySquare>개인정보처리방침</PrivacySquare>
          <ServiceSquare>서비스약관</ServiceSquare>
        </ContentContainer>

        <LinkContainer>
          <LinkImage />
          <LinkImage />
          <LinkImage />
        </LinkContainer>
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const AdressSquare = styled.div`
  color: #fff;
  font-size: 0.75rem;
  margin-right: 3.4rem;
`;

const PrivacySquare = styled.div`
  color: #fff;
  font-size: 0.75rem;
  margin-right: 3.4rem;
  padding-top: 0.75rem;
`;

const ServiceSquare = styled.div`
  color: #fff;
  font-size: 0.75rem;
  padding-top: 0.75rem;
`;

const LinkContainer = styled.div`
  display: flex;
  margin-right: -1.5rem;
`;

const LinkImage = styled.img.attrs({
  src: `${Square}`,
})`
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 1.875rem;
  padding-top: 0.5rem;

  &:last-child {
    margin-right: 0.2;
  }
`;

export default LendingFooter;
