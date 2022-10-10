import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import left from '../../images/maskLeft-icon.png';
import right from '../../images/maskRight-icon.png';
import plus from '../../images/plus-icon.png';

function AvatarOptionLayout({
  avatarBackgroundList,
  setBackgroundId,
  backgroundId,
  backgroundEvent,
  backgroundImgUpload,
  backgroundImg,
  setBackgroundImgFile
}: AvatarBackgroundType) {

  return (
    <Avatar>
      <AvatarTitle>배경을 선택해주세요</AvatarTitle>

      <div>
        <BgText>배경업로드</BgText>
        <Test2>
          <div>
            <MaskIcon
              src={left}
            />
          </div>
          <FlexBox
            className="products"
            width="85%"
            justifyContent={'flex-start'}
            alignItems={'center'}
          >
            <form onSubmit={(event) => backgroundImgUpload(event)}>
              <BackgrounddBox
              onClick={()=> setBackgroundImgFile([])}
              >
                <PlusIcon src={plus} />
                <ImgUploadInput onChange={backgroundImg} />
              </BackgrounddBox>
            </form>
            <div
              style={{
                width: '100%',
                overflow: 'hidden',
              }}
            >
              <TestTransForm>
              </TestTransForm>
            </div>
          </FlexBox>
          <div>
            <MaskIcon
              src={right}
            />
          </div>
        </Test2>
      </div>

      <Line></Line>

      <>
        <BgText>배경선택</BgText>
        <Flex>
          <FlexBox
            justifyContent="flex-start"
            height="20.688rem"
            flexWrap="wrap"
            overflowY="scroll"
            paddingLeft="22px"
            width="90%"
          >
            {
              avatarBackgroundList?.data.backgroundDefaults &&
                avatarBackgroundList?.data.backgroundDefaults.map((list : any) => {
                  return (
                    <BackgrounddBox
                    onClick={() => setBackgroundId(list.bgId)}
                    key={list.bgId}>
                    <ImgthumbNail
                      src={list.bgUrl}
                      alt="아바타 이미지"
                    />
                  </BackgrounddBox>
                  )
                })}
          </FlexBox>
        </Flex>
      </>

      <SubButtonContainer>
        <SubButton onClick={backgroundEvent}>배경 선택하기</SubButton>
      </SubButtonContainer>
    </Avatar>
  );
}

// 타입 지정

interface InputImg {
  ref: any;
}

interface style {
  sliderWidth: number;
  marginBotton: number;
  paddingLeft: number;
  height: number;
  width: number;
  justifyContent?: string;
  alignItems?: string;
  flexWrap: string;
  overflowY: string;
  overflow: string;
  whiteSpace: string;
}

interface AvatarBackgroundType {
  avatarBackgroundList: {
    data : {
      backgroundDefaults: 
        { 
          bgId: number,
          bgName: string,
          bgUrl: string
        }[]
      backgroundUploads: []
    }
  }[]
  backgroundChoose: {
    data: string,
    bgId: number
  }
  backgroundEvent: {
    projectId: number
    backgroundId: number
  }
  backgroundImgUpload: (event: React.FormEvent<HTMLFormElement>) => void;
  backgroundImg: (event: ChangeEvent<HTMLInputElement>) => void;
  setBackgroundImgFile :  React.Dispatch<React.SetStateAction<File[]>>;
  backgroundId: number
  setBackgroundId: React.Dispatch<React.SetStateAction<number>>;
}

// 테스트 코드

const TestTransForm = styled.div`
  display: flex;
  gap: 10px;
  width: 9999px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Test2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 스타일 관련

const ImgthumbNail = styled.img`
  width: 7.5rem;
`;

const ImgInput = styled.img`
  width: 100%;
  height: 100%;
`;

const ImgUploadInput: any = styled.input.attrs((props) => ({
  type: 'file',
  accept: 'image/jpg, image/jpeg, image/png',
}))<InputImg>`
  display: none;
`;

// const ImgUploadInput = styled.input`

// `

const Avatar = styled.div`
  width: 32.5em;
`;

const AvatarTitle = styled.h1`
  font-size: 1rem;
  margin: 1.2778rem 0 2rem 1.3333rem;
  color: #fff;
  font-weight: 400;
`;

const FlexBox: any = styled.div<style>`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-bottom: ${(props) => props.marginBotton};
  height: ${(props) => props.height};
  flex-wrap: ${(props) => props.flexWrap};
  overflow-y: ${(props) => props.overflowY};
  padding-left: ${(props) => props.paddingLeft};
  overflow: ${(props) => props.overflow};
  white-space: ${(props) => props.whiteSpace};
  gap: 10px;

  ::-webkit-scrollbar {
    width: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.5);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
`;

const BackgrounddBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 6.25rem;
  height: 7.5rem;
  margin-bottom: 10px;
  border: 1px solid #001334;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  cursor: pointer;
`;

const BgText = styled.p`
  margin: 10px 0 9.5px 40px;
  color: #fff;
  font-weight: 700;
`;

const Line = styled.div`
  border: 1px solid #bdbdbd;
  width: 31rem;
  margin: 2rem auto;
`;

const MaskIcon = styled.img`
  height: 100%;
  padding: 15px;
`;

const PlusIcon = styled.img`
  box-sizing: border-box;
  width: 33px;
  height: 33px;
  border: 1px solid;
  border-radius: 50%;
`;
const SubButtonContainer = styled.div`
  width: 32.5rem;
  height: 4.7222rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #091547;
`;

const SubButton = styled.button`
  width: 30rem;
  height: 2.5rem;
  background-color: #fff;
  font-weight: 700;
  font-size: 18px;
  border-radius: 5px;
`;
export default AvatarOptionLayout;
