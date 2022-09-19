import React from 'react';
import styled from 'styled-components';

function VoiceModelLayout() {
  return (
    <div>
      <div>
        <button></button>
        <button></button>
      </div>
      <div>
        <strong></strong>
        <input type="file" />
      </div>
      <div>
        <img src="" alt="" />
        <input type="text" />
      </div>
      <div>
        <div>
          <button></button>
          <button></button>
        </div>
        <div>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
      {/* 음성모델 리스트 */}
    </div>
  );
}

const container = styled.div`
  position: absolute;
`;
export default VoiceModelLayout;
