import React from 'react';
import styled from 'styled-components';
import accProject from '/addProject-icon.png';
import projectIcon from '/project-icon.png';
import question from '/questionMark-icon.png';
import close from '/close-icon.png';

const HistoryProjectLayout = ({
  projectList,
  createProjectHandler,
  prevProjectHandler,
  isEdit,
  editTitleHandler,
  title,
  changeTitle,
  keyDownHandler,
  blurProjectHandler,
  guideText,
  guideHandler,
  projectEmpty,
  deleteProjectHandler,
}: HistoryProjectLayoutProps) => {
  return (
    <Container>
      <TitleBox>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextStyle size="1.5rem" weight="700" color="#fff">
            프로젝트 히스토리
          </TextStyle>
          <img
            src={question}
            alt="프로젝트 히스토리 도움말 아이콘"
            onMouseEnter={() => guideHandler(true, 0)}
            onMouseLeave={() => guideHandler(false, 0)}
            style={{ width: '1.7rem', marginLeft: '1rem' }}
          />
          {guideText ? (
            <GuideTextBox>
              <span>
                새 프로젝트를 생성하거나 이전 프로젝트 작업으로 이동합니다. <br />
                프로젝트 이름 수정이 가능합니다. 프로젝트 이름에 더블클릭을 해주세요.
              </span>
            </GuideTextBox>
          ) : null}
        </div>
        <Button
          onClick={createProjectHandler}
          backColor="#fff"
          width="12.44rem"
          height="2.5rem"
          radius="0.31rem"
        >
          <TextStyle lineH="1rem" marginRight="0.25rem">
            새 프로젝트 생성하기
          </TextStyle>
          <img src={accProject} alt="프로젝트 생성 아이콘" style={{ width: '1.5rem' }} />
        </Button>
      </TitleBox>
      <ProjectListBox>
        <ListBox>
          {projectList!.map((item, index) => (
            <ProjectCard key={index} onClick={() => prevProjectHandler(item.projectId)}>
              <DeleteButton
                onClick={(event) => {
                  event.stopPropagation();
                  deleteProjectHandler(item.projectId);
                }}
              >
                <img src={close} alt="프로젝트 삭제 아이콘" style={{ width: '1.4rem' }} />
              </DeleteButton>
              <img
                src={projectIcon}
                alt="생성한 프로젝트 아이콘"
                style={{ width: '3rem', height: '3rem' }}
              />
              {isEdit[index] ? (
                <EditInput
                  type="text"
                  maxLength={9}
                  value={title[index]}
                  onChange={(event) => changeTitle(event, index)}
                  onClick={(event) => event.stopPropagation()}
                  onKeyDown={(event) => keyDownHandler(event, index, item.projectId)}
                  onBlur={() => blurProjectHandler(index, item.projectId)}
                />
              ) : (
                <TextStyle
                  onClick={(event) => event.stopPropagation()}
                  onDoubleClick={(event) => {
                    event.stopPropagation();
                    editTitleHandler(index);
                  }}
                  size="1.5rem"
                  weight="700"
                  color="#80A4FF"
                  marginTop="1.5rem"
                  display="-webkit-inline-box"
                >
                  {item.title}
                </TextStyle>
              )}
              <TextStyle color="#828282" marginTop="1.5rem">
                {item.modifiedDate.split('T')[0]}
              </TextStyle>
              <TextStyle color="#828282" marginTop="0.7rem">
                {item.modifiedDate.slice(11, 13) + '시 ' + item.modifiedDate.slice(14, 16) + '분'}
              </TextStyle>
            </ProjectCard>
          ))}
        </ListBox>
        <EmptyContain>
          {projectEmpty.map((item) => (
            <EmptyBox key={item}></EmptyBox>
          ))}
        </EmptyContain>
        <BackgroundBox></BackgroundBox>
      </ProjectListBox>
    </Container>
  );
};

interface HistoryProjectLayoutProps {
  projectList: {
    projectId: number;
    title: string;
    createDate: string;
    modifiedDate: string;
  }[];
  isEdit: boolean[];
  title: string[];
  guideText: boolean;
  projectEmpty: number[];
  loadingProject: boolean;
  createProjectHandler: () => void;
  prevProjectHandler: (id: number) => void;
  editTitleHandler: (index: number) => void;
  changeTitle: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  keyDownHandler: (event: React.KeyboardEvent<HTMLInputElement>, index: number, id: number) => void;
  blurProjectHandler: (index: number, id: number) => void;
  guideHandler: (isOn: boolean, index: number) => void;
  deleteProjectHandler: (id: number) => void;
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
  position: relative;
  margin-bottom: 0.62rem;
`;
const GuideTextBox = styled.div`
  background-color: #fff;
  position: absolute;
  top: -2.5rem;
  left: 13.2rem;
  padding: 0.6rem;
  font-size: 0.81rem;
  font-weight: 500;
  line-height: 1.1rem;
  color: #333;
  border-radius: 0.6rem;
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
  height: 18.75rem;
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem;
`;
const ListBox = styled.div`
  display: flex;
  align-items: center;
`;
const ProjectCard = styled.div`
  background-color: #fff;
  width: 9.64rem;
  height: 10.69rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-right: 1.5rem;
  padding: 3.03rem 2.18rem;
  border-radius: 0.63rem;
  cursor: pointer;
`;
const DeleteButton = styled.button`
  background-color: transparent;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  opacity: 0.6;
`;
const EmptyContain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const EmptyBox = styled.div`
  background-color: #fff;
  width: 14rem;
  height: 16.75rem;
  border-radius: 0.63rem;
  margin-right: 1.5rem;
  opacity: 0.3;
`;
const EditInput = styled.input`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: #777;
  text-align: center;
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
