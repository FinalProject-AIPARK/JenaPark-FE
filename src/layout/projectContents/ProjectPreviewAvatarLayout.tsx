import React, { memo } from 'react';
import styled from 'styled-components';
import questionMark from '/questionMark-icon.png';

const ProjectPreviewAvatarLayout = memo(({ guide, setGuide, preview }: PreviewAvatarProps) => {
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
            onMouseEnter={() => setGuide(true)}
            onMouseLeave={() => setGuide(false)}
            style={{ width: '1.5rem', marginLeft: '0.3rem' }}
          />
          {guide ? (
            <GuideTextBox>
              <span>
                음성과 합성할 가상 아바타를 미리 확인할 수 있습니다.
                <br />
                아바타를 선택해 주세요. 기본 배경은 초록 배경입니다.
              </span>
            </GuideTextBox>
          ) : null}
        </TitleBox>
        <MoveAvatarBox>
          {preview.backgroundPreview || preview.avatarPreview ? (
            <>
              {preview.backgroundPreview ? (
                <PreviewImg
                  src={preview.backgroundPreview}
                  alt="아바타 배경 미리보기 이미지"
                  height="100%"
                />
              ) : null}
              {preview.avatarPreview ? (
                <PreviewImg
                  src={preview.avatarPreview}
                  alt="아바타 미리보기 이미지"
                  width="110%"
                  bottom="-0.5rem"
                />
              ) : null}
            </>
          ) : null}
        </MoveAvatarBox>
      </InnerBox>
    </Container>
  );
});

interface PreviewAvatarProps {
  preview: {
    backgroundPreview: string;
    avatarPreview: string;
  };
  guide: boolean;
  setGuide: React.Dispatch<React.SetStateAction<boolean>>;
}
interface TextStyleProps {
  size: string;
  weight: string;
  color: string;
  marginTop?: string;
}
interface PreviewImgProps {
  width?: string;
  height?: string;
  bottom?: string;
}

const Container = styled.div`
  background-color: #001334;
  width: 18.75rem;
  height: 22.75rem;
  position: relative;
  padding: 1.5rem;
  border-radius: 0.63rem;
`;
const InnerBox = styled.div`
  height: 20.65rem;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
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
  top: -1.6rem;
  right: -9.2rem;
  padding: 0.6rem;
  font-size: 0.81rem;
  line-height: 1.2rem;
  color: #333;
  border-radius: 0.6rem;
  box-shadow: 0 0 0.08rem #999;
  z-index: 2;
`;
const MoveAvatarBox = styled.div`
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.63rem;
  overflow: hidden;
`;
const PreviewImg = styled.img<PreviewImgProps>`
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? bottom : 0)};
`;

export default ProjectPreviewAvatarLayout;
