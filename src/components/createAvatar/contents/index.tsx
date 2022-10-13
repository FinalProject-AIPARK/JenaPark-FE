import React from 'react';
import styled from 'styled-components';
import InputText from './inputText';
import EditText from './editText'

function Contents() {
  return (
    <Container>
      <InputText />
      <EditText />
    </Container>
  );
}

const Container = styled.div`
  width: calc(100vw - 50rem);
  height: calc(100% - 3.12rem);
  position: absolute;
  left: 5rem;
  margin: 1rem 3.75rem 0;
`;

export default Contents;
