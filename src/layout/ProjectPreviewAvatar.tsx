import React from 'react';
import styled from 'styled-components';

function ProjectPreviewAvatar() {
  return (
    <Container>
      <div>
        <div>
          <span>아바타 미리보기</span>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #001334;
  width: 18.75rem;
  height: 25.75rem;
  padding: 1.5rem;
  border-radius: 0.63rem;
`;

export default ProjectPreviewAvatar;
