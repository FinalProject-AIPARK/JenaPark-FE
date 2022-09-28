import VoiceOptionDetailLayout from '@/layout/Voice/VoiceOptionDetailLayout';
import VoiceOptionTitleLayout from '@/layout/Voice/VoiceOptionTitleLayout';
import React from 'react';
import styled from 'styled-components';

function VoiceOption() {
  return (
    <Container>
      <VoiceOptionTitleLayout />
      <VoiceOptionDetailLayout />
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 4.6rem);
  display: flex;
  flex-direction: column;
  margin-top: 1.56rem;
`;

export default VoiceOption;
