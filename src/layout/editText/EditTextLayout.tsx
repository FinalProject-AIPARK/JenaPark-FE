import React from 'react'
import styled from 'styled-components'

function EditTextLayout() {
  return (
    <div>
      <Container>
        <div style={{ height: '100%'}}>
          <Title>
            <h1 style={{ color: '#fff' }}>텍스트 수정</h1>
            <button>음성 합성하기</button>
            <button>!!</button>
            <button>삭제</button>
          </Title>
          <Test style={{ height: '100%'}}>
            <TextInput>
            </TextInput>
          </Test>
        </div>
      </Container>
    </div>
  )
}

const Container = styled.div `
  background-color: #001334;
  width: 67rem;
  height: 18.6rem;
  padding: 1.5rem;
  margin-top: 16px;
  border-radius: 0.63rem;
`

const Title = styled.div `
  display: flex;
`

const Test = styled.div `
  

`

const TextInput = styled.textarea`
  width: 96%;
  height: 93%;
  margin: 1rem;
  font-size: 1.1rem;
  line-height: 1.8rem;
  word-spacing: -0.2rem;
  border: none;
  resize: none;
`

export default EditTextLayout