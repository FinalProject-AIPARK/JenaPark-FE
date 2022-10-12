import React, { ChangeEvent } from "react";
import styled from "styled-components";
import left from "../../images/maskLeft-icon.png";
import right from "../../images/maskRight-icon.png";
import plus from "../../images/plus-icon.png";

function AvatarOptionLayout({
  avatarBackgroundList,
  setBackgroundId,
  backgroundEvent,
  backgroundImgUpload,
  setackgroundFile,
  inputFileRef,
  submitRef,
  onInputFile,
  bgSlideIndex,
  moveBgSlide,
}: AvatarBackgroundType) {
  return (
    <Avatar>
      <AvatarTitle>배경을 선택해주세요</AvatarTitle>

      <>
        <BgText>배경업로드</BgText>
        <Container bgSlideIndex={bgSlideIndex}>
          <>
            <MaskIcon
              src={left}
              onClick={() =>
                moveBgSlide(
                  "left",
                  avatarBackgroundList?.data.backgroundUploads.length - 1
                )
              }
            />
          </>
          <FlexBox
            className="products"
            width="85%"
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <form
              name="background"
              encType="multipart/form-data"
              ref={submitRef}
              onSubmit={(event) => {
                event.preventDefault(), 
                backgroundImgUpload(event);
              }}
            >
              <BackgrounddBox
                onClick={() => {
                  setackgroundFile([]);
                  inputFileRef.current?.click();
                }}
              >
                <PlusIcon src={plus} />
              </BackgrounddBox>
              <input
                type="file"
                name="background"
                onChange={(event) => { 
                  onInputFile(event)
                  // backgroundImgUpload()
                }}
                ref={inputFileRef}
                accept="image/jpg, image/jpeg, image/png"
                />
                {/* <input type="submit" ref={submitRef} /> */}
            </form>
            <div className="upload-bg__container">
              <ul className="upload-bg__wrap">
                {avatarBackgroundList?.data.backgroundUploads &&
                  avatarBackgroundList?.data.backgroundUploads.map(
                    (list: any) => {
                      return (
                        <li
                          onClick={() => setBackgroundId(list.bgId)}
                          key={list.bgId}
                        >
                          <img src={list.bgUrl} alt="업로드 배경 이미지" />
                        </li>
                      );
                    }
                  )}
              </ul>
            </div>
          </FlexBox>
          <>
            <MaskIcon
              src={right}
              onClick={() =>
                moveBgSlide(
                  "right",
                  avatarBackgroundList?.data.backgroundUploads.length - 1
                )
              }
            />
          </>
        </Container>
      </>

      <Line></Line>

      <>
        <BgText>배경선택</BgText>
        <Flex>
          <FlexBox
            justifyContent="flex-start"
            flexWrap="wrap"
            overflowY="scroll"
            paddingLeft="22px"
            width="90%"
          >
            {avatarBackgroundList?.data.backgroundDefaults &&
              avatarBackgroundList?.data.backgroundDefaults.map((list: any) => {
                return (
                  <BackgrounddBox
                    onClick={() => setBackgroundId(list.bgId)}
                    key={list.bgId}
                  >
                    <ImgthumbNail src={list.bgUrl} alt="아바타 이미지" />
                  </BackgrounddBox>
                );
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
  avatarBackgroundList:
    | {
        data: {
          backgroundDefaults: {
            bgId: number;
            bgName: string;
            bgUrl: string;
          }[];
          backgroundUploads: [];
        };
      }[]
    | any;
  backgroundEvent:
    | {
        projectId: number;
        backgroundId: number;
      }
    | any;
  backgroundImgUpload: (event: React.FormEvent<HTMLFormElement>) => void;
  setackgroundFile: React.Dispatch<React.SetStateAction<File[]>>;
  setBackgroundId: React.Dispatch<React.SetStateAction<number>>;
  backgroundFiles: any;
  inputFileRef: React.MutableRefObject<HTMLInputElement>;
  onInputFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitRef: React.MutableRefObject<HTMLFormElement>;
  bgSlideIndex: number;
  moveBgSlide: (leftRight: string, maxLength: number) => void;
}

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 39vh;
`;

const Container = styled.div<{ bgSlideIndex: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  input[type="file"] {
    display: none;
  }
  input[type="submit"] {
    display: none;
  }

  .upload-bg {
    &__container {
      width: 20.625rem;
      overflow: hidden;
    }
    &__wrap {
      display: flex;
      flex-wrap: wrap;
      width: 9999px;
      gap: 10px;
      transition: all 0.5s;
      transform: ${(props) => `translateX(${props.bgSlideIndex * 7}rem)`};
      li {
        width: 6.25rem;
        height: 7.5rem;
        border: 1px solid #001334;
        border-radius: 10px;
        overflow: hidden;
        img {
          height: 100%;
        }
      }
    }
  }
`;

// 스타일 관련

const ImgthumbNail = styled.img`
  width: 7.5rem;
`;

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
  margin: 10px 0 14.5px 40px;
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
  cursor: pointer;
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
