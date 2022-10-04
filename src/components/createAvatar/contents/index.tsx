import ProjectInputText from '@/layout/ProjectInputText';
import React from 'react';
import styled from 'styled-components';

function Contents() {
  return (
    <Container>
      <ProjectInputText />
    </Container>
  );
}

const Container = styled.div`
  width: 29.88rem;
  height: calc(100% - 3.12rem);
  position: absolute;
  left: 5rem;
  padding: 1rem 3.75rem 0;
`;

export default Contents;
