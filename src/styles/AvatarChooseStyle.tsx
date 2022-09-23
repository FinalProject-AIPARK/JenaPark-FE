import React from 'react';
import styled from 'styled-components';
import left from '../../public/icon/maskLeft-icon.png';
import right from '../../public/icon/maskRight-icon.png';

function AvatarChooseStyle() {

  return (
    <>
      <Avatar>
          <AvatarTitle>음성이랑 합성할 아바타를 선택해주세요.</AvatarTitle>
          <Test1>
            <ManButton>
              <ManButtonText>남</ManButtonText>
            </ManButton>
            <WomanButton>
              <WomanButtonText>여</WomanButtonText>
            </WomanButton>
          </Test1>
            <VirtualAvatarContainer>
              <Text>버추얼 아바타</Text>
                <FlexBox>
                  <Image src={left} />
                  <Box>1</Box>
                  <Box>2</Box>
                  <Box>3</Box>
                  <Box>4</Box>
                  <Image src={right} />
                </FlexBox>
            </VirtualAvatarContainer>
            <Line />
          <div>
              <Text>의상1</Text>
                <FlexBox>
                  <Image src={left} />
                  <Box>1</Box>
                  <Box>2</Box>
                  <Box>3</Box>
                  <Box>4</Box>
                  <Image src={right} />
                </FlexBox>
            </div>
            <div>
              <Text>의상2</Text>
                <FlexBox>
                  <Image src={left} />
                  <Box>1</Box>
                  <Box>2</Box>
                  <Box>3</Box>
                  <Box>4</Box>
                  <Image src={right} />
                </FlexBox>
            </div>
            <div>
              <Text>의상3</Text>
                <FlexBox>
                  <Image src={left} />
                  <Box>1</Box>
                  <Box>2</Box>
                  <Box>3</Box>
                  <Box>4</Box>
                  <Image src={right} />
                </FlexBox>
            </div>
            <SubButtonContainer>
              <SubButton>선택하기</SubButton>
            </SubButtonContainer>
      </Avatar>
    </>
  )
}

const WomanButton = styled.button `
  width: 3rem;
  height: 2.3rem;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #828282;
  border-radius: 5px;
`

const WomanButtonText = styled.p `
  font-size: 16px;
  color: #fff;
`

const ManButton = styled.button `
  width: 3rem;
  height: 2.3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #001334;
  border-radius: 5px;
  margin: 0px 10px 12px 30px;
`

const ManButtonText = styled.p `
  font-size: 16px;
  color: #fff;
`

const Test1 = styled.div `
  display: flex;
`

const Text = styled.p `
  margin: 0.6rem 3rem;
  color: #fff;
`

const Line = styled.div `
  border: 1px solid gray;
  width: 31rem;
  margin: auto;
`

const VirtualAvatarContainer = styled.div `
  height: 9.5rem;
`

const Image = styled.img `
  height: 100%;
`

const FlexBox = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Box = styled.div `
  width: 5.25rem;
  height: 6.5rem;
  border: 2px solid #001334;
  border-radius: 10px;
  background-color: #fff;
`

const AvatarTitle = styled.div `
  font-size: 18px;
  margin: 20px 0 28px 30px;
  color: #fff;
`

const SubButtonContainer = styled.div `
  width: 32rem;
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SubButton = styled.button `
  width: 30rem;
  height: 3rem;
  background-color: #001334;
  color: #fff;
`

const Avatar = styled.div `
  width: 32.5em;
`

export default AvatarChooseStyle;