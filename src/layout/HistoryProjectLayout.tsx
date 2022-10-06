import React from 'react';
import styled from 'styled-components';
import accProject from '/addProject-icon.png';
import projectIcon from '/project-icon.png';

function HistoryProjectLayout({ projectList }: HistoryProjectLayoutProps) {
  const dummy = [
    {
      projectId: 23,
      title: '테스트 프로젝트',
      thumbnail: null,
      createDate: '2022-09-28',
      modifiedDate: '2022-09-30T14:01:27',
    },
    {
      projectId: 23,
      title: '테스트 프로젝트',
      thumbnail: null,
      createDate: '2022-09-28',
      modifiedDate: '2022-09-30T14:01:27',
    },
    {
      projectId: 23,
      title: '테스트 프로젝트',
      thumbnail: null,
      createDate: '2022-09-28',
      modifiedDate: '2022-09-30T14:01:27',
    },
    {
      projectId: 23,
      title: '테스트 프로젝트',
      thumbnail: null,
      createDate: '2022-09-28',
      modifiedDate: '2022-09-30T14:01:27',
    },
    {
      projectId: 23,
      title: '테스트 프로젝트',
      thumbnail: null,
      createDate: '2022-09-28',
      modifiedDate: '2022-09-30T14:01:27',
    },
  ];
  return (
    <Container>
      <TitleBox>
        <TextStyle size="1.5rem" weight="700" color="#fff">
          프로젝트 히스토리
        </TextStyle>
        <Button backColor="#fff" width="12.44rem" height="2.5rem" radius="0.31rem">
          <TextStyle lineH="1rem" marginRight="0.25rem">
            새 프로젝트 생성하기
          </TextStyle>
          <img src={accProject} alt="프로젝트 생성 아이콘" style={{ width: '1.5rem' }} />
        </Button>
      </TitleBox>
      <ProjectListBox>
        <ListBox>
          {projectList.map((item) => (
            <ProjectCard>
              <img
                src={projectIcon}
                alt="생성한 프로젝트 아이콘"
                style={{ width: '3rem', height: '3rem' }}
              />
              <TextStyle
                size="1.5rem"
                weight="700"
                color="#80A4FF"
                marginTop="1.5rem"
                display="-webkit-inline-box"
              >
                {item.title}
              </TextStyle>
              <TextStyle color="#828282" marginTop="1.5rem">
                {item.modifiedDate.split('T')[0]}
              </TextStyle>
              <TextStyle color="#828282" marginTop="0.7rem">
                {item.modifiedDate.split(':')[1] + '시 ' + item.modifiedDate.split(':')[2] + '분'}
              </TextStyle>
            </ProjectCard>
          ))}
        </ListBox>
        <BackgroundBox></BackgroundBox>
      </ProjectListBox>
    </Container>
  );
}

interface HistoryProjectLayoutProps {
  projectList: {
    projectId: number;
    title: string;
    thumbnail: null;
    createDate: string;
    modifiedDate: string;
  }[];
}
interface TextStyleProps {
  size?: string;
  weight?: string;
  color?: string;
  lineH?: string;
  marginTop?: string;
  marginRight?: string;
  display?: string;
}
interface ButtonProps {
  backColor: string;
  width: string;
  height: string;
  radius: string;
}

const Container = styled.div`
  width: 78rem;
  margin-top: 2.93rem;
`;
const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.62rem;
`;
const TextStyle = styled.span<TextStyleProps>`
  display: ${({ display }) => (display ? display : 'inline-block')};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0')};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : '0')};
  font-size: ${({ size }) => (size ? size : '1rem')};
  font-weight: ${({ weight }) => (weight ? weight : '400')};
  color: ${({ color }) => (color ? color : '#000')};
  line-height: ${({ lineH }) => (lineH ? lineH : 'inherit')};
  white-space: nowrap;
`;
const Button = styled.button<ButtonProps>`
  background-color: ${({ backColor }) => backColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ radius }) => radius};
`;
const ProjectListBox = styled.div`
  width: 100%;
  height: 18.75rem;
  position: relative;
`;
const ListBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  padding: 1rem;
`;
const ProjectCard = styled.div`
  background-color: #fff;
  width: 9.64rem;
  height: 10.69rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.5rem;
  padding: 3.03rem 2.18rem;
  border-radius: 0.63rem;
  :last-child {
    margin-right: 0;
  }
`;
const BackgroundBox = styled.div`
  background-color: #fff;
  width: 100%;
  height: 18.75rem;
  position: absolute;
  left: 0;
  border-radius: 0.63rem;
  opacity: 0.6;
  z-index: -999;
`;
export default HistoryProjectLayout;
