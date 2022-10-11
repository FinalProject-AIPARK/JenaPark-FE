import React from 'react'
import styled from 'styled-components'
import caution from '../../../public/images/caution-icon.png'
import trashcan from '../../../public/images/trashcan-icon.png'
import etc from '../../../public/etc-icon.png'
import sound from '../../../public/sound-icon.png'
import ton from '../../../public/ton-icon.png'
import voice from '../../../public/voice-icon.png'
import playButtonBlue from '../../../public/voiceModelPlay-icon.png'
import StopButtonBlue from '../../../public/voiceModelStop-icon.png'

function EditTextLayout({
  audioText
  } : Edittest) {
  return (
    <div>
      <Container>
        <TextContainer>
          <Title>
            <span style={{ color: '#fff' }}>텍스트 수정</span>
            <ButtonContainer>
              <VoiceButton>음성 합성하기</VoiceButton>
              <DeleteButton>
                <Icon src={caution}/>
                <span style ={{ color: '#fff', fontSize: '16px', marginLeft: '9px'}}>1</span>
              </DeleteButton>
              <ErrorButton>
                <Icon src={trashcan} />
              </ErrorButton>
            </ButtonContainer>
          </Title>

          <TextBox>
            <ScrollBox>
              <EditTextContainer>
          {
            audioText &&
            audioText.map((list : any) => {
              return (
                      <EditText>
                        <AvatarNameContainer>
                          <input type="checkbox" style={{ marginRight: '10px'}} />
                          <AvatarName>
                            <h2 style={{ color: '#fff'}}>최우식</h2>
                          </AvatarName>
                        </AvatarNameContainer>
                        <Line/>
                        <Text>
                          <span>{list.splitText}</span>
                        </Text>
                        <Line/>
                        <PlayContainer>
                          <img src={playButtonBlue} alt="재생 이미지" style={{height: '2rem', width: '2rem'}}/>
                          <img src={StopButtonBlue} alt="스탑 이미지" style={{height: '2rem', width: '2rem'}}/>
                        </PlayContainer>
                        <Line/>
                        <ControlContainer >
                          <img src={sound} alt="소리 이미지" />
                          <img src={voice} alt="마이크 이미지" />
                          <img src={ton} alt="그래프 이미지" />
                          <img src={etc} alt="점점점 이미지" />
                        </ControlContainer>
                      </EditText>
              )
            })
          }
              </EditTextContainer>
            </ScrollBox>
          </TextBox>

        </TextContainer>
      </Container>
    </div>
  )
}
// 타입지정

interface Edittest {
  audioText : {
    pitch : number
    speed : number
    splitText: string
    durationSilence: number
  }[] | any
  text : string
}


// 스타일 지정

const EditTextContainer = styled.div `
  width: 65rem;
  height: 100%;
`

const AvatarNameContainer = styled.div `
  width: 7.5;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ControlContainer = styled.div `
  width: 9.375rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const PlayContainer = styled.div `
  width: 6.25rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const Text = styled.div `
  display: flex;
  align-items: center;
  width: 40.625rem;
  padding: 0 20px 0 8px;
`

const AvatarName = styled.div`
  background-color: #0049FF;
  width: 5.1rem;
  height: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 10px;

`
const Line = styled.div `
  width: 1px;
  height: 100%;
  background-color: #000;
`

const Icon = styled.img `
  height: 60%;
`

const Container = styled.div `
  background-color: #001334;
  width: 55.9vw;
  height: 41.9vh;
  padding: 1.5rem;
  margin-top: 16px;
  border-radius: 0.63rem;
`

const TextContainer = styled.div `
  width: 100%;
  height: 100%;
`

const Title = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TextBox = styled.div `
  height: 92%;
  width: 100%;
`
const EditText = styled.div`
  display: flex;
  width: 65rem;
  height: 3.125rem;
  margin: 10px 0;
  background-color: #fff;
  box-shadow: 0px 0px 6px rgba(0,0,0, 0.25);
  border-radius: 5px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 16.625rem;
  margin-right: 10px;
`

const ScrollBox = styled.div`
    background-color: #fff;
    width: 96.8%;
    height: 93%;
    font-size: 1.1rem;
    margin-top: 1rem;
    line-height: 1.8rem;
    word-spacing: -0.2rem;
    border: none;
    resize: none;
    border-radius: 5px;
    padding: 8px 24px 8px 8px;
    overflow: scroll;
    overflow-x: hidden;
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
`

const VoiceButton = styled.button `
  width: 6.75rem;
  height: 2rem;
  border-radius:5px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DeleteButton = styled.button `
  width: 3.813rem;
  height: 2rem;
  background-color: rgba(255, 0, 0, 0.7);
  border-radius:5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorButton = styled.button `
  width: 2.75rem;
  height: 2rem;
  border-radius:5px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #DBDBDB;
`

export default EditTextLayout