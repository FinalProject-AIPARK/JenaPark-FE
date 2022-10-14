import { url } from "inspector";
import { Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import left from "@/images/maskLeft-icon.png";
import right from "@/images/maskRight-icon.png";

const AvatarChooseStyle = ({
  avatarList,
  setAvatarId,
  avatarListDress,
  avatarModelSelect,
  avatarModelReset,
  createAvatarHandler,
  avatarSlideIndex,
  moveAvatarSlide,
}: Test) => {
  return (
    <>
      <Avatar>
        <AvatarTitle>음성이랑 합성할 버추얼 아바타를 선택해주세요.</AvatarTitle>
        <div>
          <VirtualAvatarText>AI 아바타</VirtualAvatarText>
          <VirtualAvatarContainer>
            <MaskIcon
              src={left}
              onClick={() =>
                moveAvatarSlide("left", avatarList?.data.length - 1, "avatar")
              }
            >
              <span>icon</span>
            </MaskIcon>
            <AvatarSlideContainer>
              <FlexBox avatarSlideIndex={avatarSlideIndex.avatar}>
                {avatarList?.data &&
                  avatarList?.data.map((list: any, index: number) => {
                    return (
                      <Box
                        borderColor={true ? "2px solid #fff" : "2px solid #000"}
                        key={list.id}
                        onClick={() => {
                          avatarModelReset(list.id);
                          setAvatarId(list.id);
                        }}
                        tabIndex={index}
                      >
                        <ImgthumbNail
                          src={list.thumbNail}
                          alt="아바타 이미지"
                        />
                      </Box>
                    );
                  })}
              </FlexBox>
            </AvatarSlideContainer>
            <MaskIcon
              src={right}
              onClick={() =>
                moveAvatarSlide("right", avatarList?.data.length - 1, "avatar")
              }
            >
              <span>icon</span>
            </MaskIcon>
          </VirtualAvatarContainer>
        </div>
        <Line />
        <Scroolbar>
          <div>
            <VirtualAvatarText>의상1</VirtualAvatarText>
            <VirtualAvatarContainer>
              <MaskIcon
                src={left}
                onClick={() =>
                  moveAvatarSlide(
                    "left",
                    avatarListDress?.data.accUrl.length - 1,
                    "acc"
                  )
                }
              >
                <span>icon</span>
              </MaskIcon>
              <AvatarSlideContainer>
                <FlexBox avatarSlideIndex={avatarSlideIndex.acc}>
                  {avatarListDress?.data.accUrl &&
                    avatarListDress?.data.accUrl.map((list: any, index: number) => {
                      return (
                        <Box
                          borderColor={
                            true ? "2px solid #fff" : "2px solid #000"
                          }
                          key={list.id}
                          onClick={() => {
                            avatarModelSelect(list.id, "accessoryId");
                          }}
                          tabIndex={index}
                        >
                          <ImgthumbNail
                            src={list.accessoryUrl}
                            alt={`의상1 이미지`}
                          />
                        </Box>
                      );
                    })}
                </FlexBox>
              </AvatarSlideContainer>
              <MaskIcon
                src={right}
                onClick={() =>
                  moveAvatarSlide(
                    "right",
                    avatarListDress?.data.accUrl.length - 1,
                    "acc"
                  )
                }
              >
                <span>icon</span>
              </MaskIcon>
            </VirtualAvatarContainer>
          </div>
          <div>
            <VirtualAvatarText>의상2</VirtualAvatarText>
            <VirtualAvatarContainer>
              <MaskIcon
                src={left}
                onClick={() =>
                  moveAvatarSlide(
                    "left",
                    avatarListDress?.data.attitudeUrl.length - 1,
                    "attitude"
                  )
                }
              >
                <span>icon</span>
              </MaskIcon>
              <AvatarSlideContainer>
                <FlexBox avatarSlideIndex={avatarSlideIndex.attitude}>
                  {avatarListDress?.data.attitudeUrl &&
                    avatarListDress?.data.attitudeUrl.map(
                      (list: any, index: number) => {
                        return (
                          <Box
                            borderColor={
                              true ? "2px solid #fff" : "2px solid #000"
                            }
                            key={list.id}
                            onClick={() => {
                              avatarModelSelect(list.id, "hatId");
                            }}
                            tabIndex={index}
                          >
                            <ImgthumbNail
                              src={list.hatUrl}
                              alt={`의상2 이미지`}
                            />
                          </Box>
                        );
                      }
                    )}
                </FlexBox>
              </AvatarSlideContainer>
              <MaskIcon
                src={right}
                onClick={() =>
                  moveAvatarSlide(
                    "right",
                    avatarListDress?.data.attitudeUrl.length - 1,
                    "attitude"
                  )
                }
              >
                <span>icon</span>
              </MaskIcon>
            </VirtualAvatarContainer>
          </div>
          <div>
            <VirtualAvatarText>의상3</VirtualAvatarText>
            <VirtualAvatarContainer>
              <MaskIcon
                src={left}
                onClick={() =>
                  moveAvatarSlide(
                    "left",
                    avatarListDress?.data.clothesUrl.length - 1,
                    "clothes"
                  )
                }
              >
                <span>icon</span>
              </MaskIcon>
              <AvatarSlideContainer>
                <FlexBox avatarSlideIndex={avatarSlideIndex.clothes}>
                  {avatarListDress?.data.clothesUrl &&
                    avatarListDress?.data.clothesUrl.map(
                      (list: any, index: number) => {
                        return (
                          <Box
                            borderColor={
                              true ? "2px solid #fff" : "2px solid #000"
                            }
                            key={list.id}
                            onClick={() => {
                              avatarModelSelect(list.id, "clothesId");
                            }}
                            tabIndex={index}
                          >
                            <ImgthumbNail
                              src={list.clothesUrl}
                              alt={`의상3 이미지`}
                            />
                          </Box>
                        );
                      }
                    )}
                </FlexBox>
              </AvatarSlideContainer>
              <MaskIcon
                src={right}
                onClick={() =>
                  moveAvatarSlide(
                    "right",
                    avatarListDress?.data.clothesUrl.length - 1,
                    "clothes"
                  )
                }
              >
                <span>icon</span>
              </MaskIcon>
            </VirtualAvatarContainer>
          </div>
        </Scroolbar>
        <SubButtonContainer>
          <SubButton onClick={createAvatarHandler}>아바타 선택하기</SubButton>
        </SubButtonContainer>
      </Avatar>
    </>
  );
}

// 타입 지정
interface Test {
  avatarList:
    | {
        data: {
          id: number;
          name: string;
          thumbNail: string;
        };
      }[]
    | any;
  avatarListDress:
    | {
        data: {
          accUrl: [
            {
              id: number;
              accessoryUrl: string;
            }
          ];
          clothesUrl: [
            {
              id: number;
              clothesUrl: string;
            }
          ];
          attitudeUrl: [
            {
              id: number;
              hatUrl: string;
            }
          ];
        };
      }[]
    | any;
  createAvatarHandler: () => void;
  setAvatarId: React.Dispatch<React.SetStateAction<number>>;
  avatarModelSelect: (id: number, kind: string) => void;
  avatarModelReset: (id: number) => void;
  avatarSlideIndex: {
    avatar: number;
    acc: number;
    attitude: number;
    clothes: number;
  };
  moveAvatarSlide: (leftRight: string, maxLength: number, kind: string) => void;
}

interface borderColors {
  borderColor: string | number;
}

interface MaskIconType {
  src: string;
}

interface FlexBoxType {
  avatarSlideIndex?: number;
}
// 스타일 관련

const Scroolbar = styled.div`
  height: 51vh;
  overflow-y: hidden;
  overflow-y: auto;

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

const VirtualAvatarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const VirtualAvatarText = styled.p`
  margin: 1rem 2.6rem;
  color: #fff;
`;

const Line = styled.div`
  border: 1px solid #bdbdbd;
  width: 31rem;
  margin: 1.5rem auto 0.6rem;
`;

const MaskIcon = styled.button<MaskIconType>`
  background: none;
  padding: 0;
  span {
    display: block;
    width: 10px;
    height: 60px;
    text-indent: -9999px;
    background-image: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const AvatarSlideContainer = styled.div`
  width: 28rem;
  overflow: hidden;
`;

const FlexBox = styled.ul<FlexBoxType>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 9999px;
  gap: 10px;
  transition: all 0.5s;
  transform: ${({ avatarSlideIndex }) =>
    `translateX(${avatarSlideIndex! * 7}rem)`};
`;

const Box = styled.li<borderColors>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.25rem;
  height: 7.5rem;
  border: ${({ borderColor }) => borderColor};
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  cursor: pointer;
  &:focus {
    border: 1px solid #0DFF1E;
    box-shadow: inset 0 0 0.62rem 0 #b0ffb6;;
  }
`;

const ImgthumbNail = styled.img`
  width: 7.5rem;
`;

const AvatarTitle = styled.div`
  font-size: 18px;
  margin: 23px 0 22px 24px;
  color: #fff;
  font-weight: 400;
`;

const SubButtonContainer = styled.div`
  position: absolute;
  bottom: 3px;
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

const Avatar = styled.div`
  width: 32.5em;
`;

export default AvatarChooseStyle;
