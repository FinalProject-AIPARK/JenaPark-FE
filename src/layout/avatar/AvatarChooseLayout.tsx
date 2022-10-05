import { Dispatch, SetStateAction, useEffect } from 'react';
import styled from 'styled-components';
import left from '../../../public/icon/maskLeft-icon.png';
import right from '../../../public/icon/maskRight-icon.png';

function AvatarChooseStyle({
    avatarList,
    setAvatarId,
    avatarId,
    avatarListDress,
    avatarModelSelect,
    avatarModelReset,
    createAvatar,
    avartarDress,
    // createAvatars
  } : Test) {

  return (
    <>
      <Avatar>
        <AvatarTitle>음성이랑 합성할 버추얼 아바타를 선택해주세요.</AvatarTitle>
        <div>
          <VirtualAvatarText>버추얼 아바타</VirtualAvatarText>
          <VirtualAvatarContainer>
            <MaskIcon src={left} />
              <FlexBox>
                {avatarList?.data &&
                  avatarList?.data.map((list : any) => {
                    return (
                      <Box
                      borderColor={true ? '2px solid #fff' : '2px solid #000'}
                      key={list.id}
                      onClick={() => {
                        avatarModelReset(list.id);
                        setAvatarId(list.id);
                      }}

                      >
                        <ImgthumbNail 
                        src={list.thumbNail} 
                        alt="아바타 이미지"
                         />
                      </Box>
                    )
                  })
                }
              </FlexBox>
            <MaskIcon src={right} />
          </VirtualAvatarContainer>
        </div>
        <Line />
        <Scroolbar>
          <div>
            <VirtualAvatarText>의상1</VirtualAvatarText>
            <VirtualAvatarContainer>
              <MaskIcon src={left} />
              <FlexBox>
              {avatarListDress?.data.accUrl &&
                  avatarListDress?.data.accUrl.map((list : any) => {
                    return (
                        <Box 
                        borderColor={true ? '2px solid #fff' : '2px solid #000'}
                        onClick={() => avatarModelSelect(list.id, 'accessoryId')}
                        key={list.id}>
                          <ImgthumbNail src={list.accessoryUrl} alt="아바타 이미지"/>
                        </Box>
                    )
                  })
                }
              </FlexBox>
              <MaskIcon src={right} />
            </VirtualAvatarContainer>
          </div>
          <div>
            <VirtualAvatarText>의상2</VirtualAvatarText>
            <VirtualAvatarContainer>
              <MaskIcon src={left} />
              <FlexBox>
              {avatarListDress?.data.attitudeUrl &&
                  avatarListDress?.data.attitudeUrl.map((list : any) => {
                    return (
                      <Box 
                      borderColor={true ? '2px solid #fff' : '2px solid #000'}
                      onClick={() => avatarModelSelect(list.id, 'hatId')}
                      key={list.id}>
                        <ImgthumbNail src={list.hatUrl} alt="아바타 이미지"/>
                      </Box>
                    )
                  })
              }
              </FlexBox>
              <MaskIcon src={right} />
            </VirtualAvatarContainer>
          </div>
          <div>
            <VirtualAvatarText>의상3</VirtualAvatarText>
            <VirtualAvatarContainer>
              <MaskIcon src={left} />
              <FlexBox>
              {avatarListDress?.data.clothesUrl &&
                  avatarListDress?.data.clothesUrl.map((list : any) => {
                    return (
                      <Box 
                      borderColor={true ? '2px solid #fff' : '2px solid #000'}
                      onClick={() => avatarModelSelect(list.id, 'clothesId')}
                      key={list.id}
                      >
                        <ImgthumbNail 
                        src={list.clothesUrl} 
                        alt="아바타 이미지"
                         />
                      </Box>
                    )
                  })
                }
              </FlexBox>
              <MaskIcon src={right} />
            </VirtualAvatarContainer>
          </div>
        </Scroolbar>
        <SubButtonContainer>
          <SubButton onClick={() => createAvatar(avartarDress)}>아바타 선택하기</SubButton>
        </SubButtonContainer>
      </Avatar>
    </>
  );
}

// 타입 지정
interface Test {
  avatarList: {
    data: {
      id: number,
      name: string,
      thumbNail: string,
    }
  }[] | any
  avatarListDress: {
    data: {
      accUrl: [
        {
          id : number;
          accessoryUrl: string;
        }
      ],
      clothesUrl: [
        {
          id : number;
          clothesUrl: string;
        }
      ],
      attitudeUrl: [
        {
          id : number;
          hatUrl: string;
        }
      ]
    }
  }[] | any;
  createAvatar: {
    accessoryId: number,
    attitudeId: number,
    avatarId: number,
    clothesId: number,
    projectId: number,
  } | any

  avartarDress: {
    data:string
  } | any
  avatarId: number;
  setAvatarId: React.Dispatch<React.SetStateAction<number>>;
  avatarModelSelect: (id: number, kind: string) => void;
  avatarModelReset: (id: number) => void;
}

interface borderColors {
  borderColor: string | number
}

// 스타일 관련

const Scroolbar = styled.div`
  height: 24.563rem;
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

const MaskIcon = styled.img`
  height: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 86%;
  gap: 10px;
`;

const Box = styled.div<borderColors>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.25rem;
  height: 7.5rem;
  border: ${({borderColor}) => borderColor};
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  cursor: pointer;
`;

const ImgthumbNail = styled.img `
  width: 7.5rem;
`

const AvatarTitle = styled.div`
  font-size: 18px;
  margin: 23px 0 22px 24px;
  color: #fff;
  font-weight: 400;
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

const Avatar = styled.div`
  width: 32.5em;
`;

export default AvatarChooseStyle;