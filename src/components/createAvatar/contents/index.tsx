import { memo } from 'react';
import styled from 'styled-components';
import InputText from './inputText';
import EditText from './editText';

const Contents = memo(() => {
  return (
    <Container>
      <InputText />
      <EditText />
    </Container>
  );
});

const Container = styled.div`
  width: calc(100vw - 50rem);
  height: calc(100% - 1.7vh);
  position: absolute;
  left: 5rem;
  margin: 1rem 3.75rem 0;
`;

export default Contents;
