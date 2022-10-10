import React from 'react'
import styled from 'styled-components'
import caution from '../../../public/images/caution-icon.png'
import trashcan from '../../../public/images/trashcan-icon.png'

function EditTextLayout() {
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
          <Test style={{ height: '92%', width: '100%'}}>
            <TextInput>
            </TextInput>
          </Test>
        </TextContainer>
      </Container>
    </div>
  )
}

const Icon = styled.img `
  height: 60%;
`

const Container = styled.div `
  background-color: #001334;
  width: 67rem;
  height: 18.9rem;
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

const Test = styled.div `
  

`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 265px;
  margin-right: 10px;
`

const TextInput = styled.textarea`
    width: 99.63%;
    height: 93%;
    font-size: 1.1rem;
    margin-top: 1rem;
    line-height: 1.8rem;
    word-spacing: -0.2rem;
    border: none;
    resize: none;
    border-radius: 5px;
`

const VoiceButton = styled.button `
  width: 108px;
  height: 32px;
  border-radius:5px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DeleteButton = styled.button `
  width: 61px;
  height: 32px;
  background-color: rgba(255, 0, 0, 0.7);
  border-radius:5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorButton = styled.button `
  width: 44px;
  height: 32px;
  border-radius:5px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #DBDBDB;
`

export default EditTextLayout