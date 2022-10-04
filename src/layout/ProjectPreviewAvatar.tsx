import React from 'react';
import styled from 'styled-components';
import questionMark from '/questionMark-icon.png';
import previewIcon from '/previewAvatar-icon.png';

function ProjectPreviewAvatar() {
  return (
    <Container>
      <InnerBox>
        <TitleBox>
          <TextStyle size="1.13rem" weight="700" color="#fff">
            아바타 미리보기
          </TextStyle>
          <img
            src={questionMark}
            alt="텍스트입력 도움말 아이콘"
            style={{ width: '1.5rem', marginLeft: '0.3rem' }}
          />
        </TitleBox>
        <MoveAvatarBox>
          <img src={previewIcon} alt="아바타 작업 이동 아이콘" style={{ width: '3rem' }} />
          <TextStyle size="0.9rem" weight="400" color="#828282" marginTop="1.3rem">
            가상 아바타 선택으로 이동
          </TextStyle>
        </MoveAvatarBox>
      </InnerBox>
    </Container>
  );
}

interface TextStyleProps {
  size: string;
  weight: string;
  color: string;
  marginTop?: string;
}

const Container = styled.div`
  background-color: #001334;
  width: 18.75rem;
  height: 22.75rem;
  padding: 1.5rem;
  border-radius: 0.63rem;
`;
const InnerBox = styled.div`
  height: 20.65rem;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0.6rem;
`;
const TextStyle = styled.span<TextStyleProps>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0')};
`;
const GuideTextBox = styled.div`
  background-color: #fff;
  position: absolute;
  top: -4.3rem;
  left: 6.6rem;
  padding: 0.6rem;
  font-size: 0.81rem;
  line-height: 1.2rem;
  color: #333;
  border-radius: 0.6rem;
`;
const MoveAvatarBox = styled.div`
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.63rem;
`;

export default ProjectPreviewAvatar;
