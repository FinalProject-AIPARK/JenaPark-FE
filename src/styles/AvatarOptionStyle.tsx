import React from 'react'
import styled from 'styled-components'
import left from '../../public/icon/maskLeft-icon.png'
import right from '../../public/icon/maskRight-icon.png'
import plus from '../../public/icon/plus-icon.png'

function AvatarOptionStyle() {
  return (
    <Avatar>
      <AvatarTitle>배경을 선택해주세요</AvatarTitle>

      <div>
        <BgText>배경업로드</BgText>
        <Test>
          <MaskIcon src={left} />
          <FlexBox jc ="space-around">
            <Box>
              <PlusIcon src={plus} />
            </Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </FlexBox>
          <MaskIcon src={right}/>
        </Test>
      </div>

      <Line></Line>

      <div>
        <BgText>배경선택</BgText>
        <Test>
          <FlexBox jc ="space-around" he = "294px" fw = "wrap" ov = "scroll">
            <Box></Box>
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>    
            <Box></Box>  
          </FlexBox>
        </Test>
      </div>

      <SubButtonContainer>
        <SubButton>선택하기</SubButton>
      </SubButtonContainer>
    </Avatar>
  )
}

const Test = styled.div `
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Avatar = styled.div `
  width: 32.5em;
`

const AvatarTitle = styled.h1 `
  font-size: 18px;
  margin: 23px 0 36px 24px;
  color: #fff;
  font-weight: 400;
`

const FlexBox: any = styled.div<a> `
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: ${ props => props.jc};
  margin-bottom: ${ props => props.mb};
  height: ${(props) => props.he};
  flex-wrap: ${(props) => props.fw};
  overflow-y: hidden;
  overflow-y: ${(props) => props.ov};

  ::-webkit-scrollbar {
    width: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.5);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 10px;
  }
`
interface a {
  wd : any,
  mb : any,
  jc : any,
  he : any,
  fw : any,
  ov : any
}

const Box = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 6.25rem;
  height: 7.5rem;
  margin-bottom: 10px;
  border: 1px solid #001334;
  border-radius: 10px;
  background-color: #fff;
`

const BgText = styled.p `
  margin: 10px 0 9.5px 40px;
  color: #fff;
  font-weight: 700;
`

const Line = styled.div `
  border: 1px solid #bdbdbd;
  width: 31rem;
  margin: 2rem auto;
`

const MaskIcon = styled.img `
  height: 100%;
`

const PlusIcon = styled.img `
  box-sizing: border-box;
  width: 33px;
  height: 33px;
  border: 1px solid;
  border-radius: 50%;
`

const SubButtonContainer = styled.div `
  width: 32.5rem;
  height: 94px;
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #091547;
`

const SubButton = styled.button `
  width: 30rem;
  height: 3rem;
  background-color: #fff;
  font-weight: 700;
  font-size: 18px;
`

export default AvatarOptionStyle