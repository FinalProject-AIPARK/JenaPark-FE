import React from 'react';
import styled from 'styled-components';

function ProjectInputText() {
  return (
    <Container>
      <div>
        <div>
          <span>텍스트 입력</span>
          <img src="" alt="" />
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-right: 1.5rem;
`;

export default ProjectInputText;
