import React from 'react';
import styled from 'styled-components';
import VoiceOptionDetailLayout from '@/layout/Voice/VoiceOptionDetailLayout';
import VoiceOptionTitleLayout from '@/layout/Voice/VoiceOptionTitleLayout';
import { useAppSelector, useAppDispatch } from '../../../../store/store';

function VoiceOption() {
  const { selectedModel } = useAppSelector((state) => state.voice);
  return (
    <Container>
      <VoiceOptionTitleLayout selectedModel={selectedModel} />
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
