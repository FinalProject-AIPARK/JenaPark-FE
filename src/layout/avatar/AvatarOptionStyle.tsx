import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import left from '../../../public/icon/maskLeft-icon.png'
import right from '../../../public/icon/maskRight-icon.png'
import plus from '../../../public/icon/plus-icon.png'

function AvatarOptionStyle() {

  // 슬라이드 로직
  let [counter, setCounter] = useState(0)
  console.log(counter)


  // 배경 업로드 로직
  const [bgImgData, setBgImgData] = useState<any>([]);
  const photoInput = useRef<any>(null);

  const handlePhoto = (e:any) => {
    const copy:any = [...bgImgData];
    const photoToAdd = e.target.files;
    copy.push({ id: photoToAdd[0].name, file: photoToAdd[0], url: URL.createObjectURL(photoToAdd[0]) })
    setBgImgData(copy);
}


  return (
    <Avatar>
      <AvatarTitle>배경을 선택해주세요</AvatarTitle>

      <div>
        <BgText>배경업로드</BgText>
        <Test2>

            <div>
              <MaskIcon
              src={left}
              onClick={() => {setCounter(counter += 110)}}
               />
            </div>
            <FlexBox
            className = 'products' 
            width = '85%'
            justifyContent={'flex-start'} 
            alignItems={'center'} 
            >

              <div>
                <BackgrounddBox
                onClick={() => {
                  photoInput.current.click()
                }}>
                  <PlusIcon src={plus} />
                  <ImgUploadInput
                    ref = {photoInput}
                    onChange={(e : any) => handlePhoto(e)}
                  />
                </BackgrounddBox>
              </div>
              <div style = {{
                width: '100%',
                overflow: 'hidden',
              }}>
                <TestTransForm counter={counter}>
                  {bgImgData.map((list: { id: string, url: string | undefined; }) => {
                    return (
                      <BackgrounddBox key={list.id}>
                        <ImgInput src={list.url}/>
                      </BackgrounddBox>
                    );
                  })}
                </TestTransForm>
              </div>
            </FlexBox>
            <div>
              <MaskIcon 
              src={right} 
              onClick={() => {setCounter(counter -= 110)}}
               />
            </div>
        </Test2>
      </div>

      <Line></Line>

      <div>
        <BgText>배경선택</BgText>
        <Test>
          <FlexBox 
          justifyContent ="flex-start" 
          height = "321px"
          flexWrap = "wrap" 
          overflowY = "scroll"
          paddingLeft = '22px'
          width = '90%'>
            <BackgrounddBox></BackgrounddBox>   
            <BackgrounddBox></BackgrounddBox>   
            <BackgrounddBox></BackgrounddBox>   
            <BackgrounddBox></BackgrounddBox>   
            <BackgrounddBox></BackgrounddBox>   
            <BackgrounddBox></BackgrounddBox>   
            <BackgrounddBox></BackgrounddBox>   
            <BackgrounddBox></BackgrounddBox>   
            <BackgrounddBox></BackgrounddBox>   
            <BackgrounddBox></BackgrounddBox>     
          </FlexBox>
        </Test>
      </div>

      <SubButtonContainer>
        <SubButton>선택하기</SubButton>
      </SubButtonContainer>
    </Avatar>
  )
}

// 타입 지정

interface InputImg {
  ref: any
}

interface Test20 {
  counter : any
}

interface style {
  sliderWidth: number,
  marginBotton : number,
  paddingLeft : number,
  height : number,
  width : number,
  justifyContent?: string,
  alignItems?: string,
  flexWrap : string,
  overflowY : string,
  overflow : string,
  whiteSpace : string,
}

// 테스트 코드

const TestTransForm = styled.div<Test20> `
  display: flex;
  gap: 10px;
  width: 9999px;
  transform: translateX(${props => `${props.counter}px`});
`

const TestIcon = styled.div `
  position: absolute;
  left: 10px;
`

const Test = styled.div `
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Test2 = styled.div `
display: flex;
justify-content: center;
align-items: center;
`

// 스타일 관련

const ImgInput = styled.img`
  width: 100%;
  height: 100%;
`

const ImgUploadInput :any = styled.input.attrs(props => ({
    type: "file" ,
    accept:"image/jpg, image/jpeg, image/png",
  }))<InputImg> `
    display: none;
  `

const Avatar = styled.div `
  width: 32.5em;
`

const AvatarTitle = styled.h1 `
  font-size: 1rem;
  margin: 1.2778rem 0 2rem 1.3333rem;
  color: #fff;
  font-weight: 400;
`

const FlexBox: any = styled.div<style> `
  width: ${props => props.width};
  display: flex;
  align-items: center;
  justify-content: ${ props => props.justifyContent};
  align-items: ${props => props.alignItems};
  margin-bottom: ${ props => props.marginBotton};
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
    background: rgba(255,255,255,0.5);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 10px;
  }
`

const BackgrounddBox = styled.div `
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
  padding: 15px;
`

const PlusIcon = styled.img `
  box-sizing: border-box;
  width: 33px;
  height: 33px;
  border: 1px solid;
  border-radius: 50%;
`
const SubButtonContainer = styled.div`
  width: 32.5rem;
  height: 85px;
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
export default AvatarOptionStyle;
