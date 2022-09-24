import styled from 'styled-components';
import playbutton from '/images/play-circle.png';
import stopbutton from '/images/stop-circle.png';

export const PlayButton = styled.img.attrs({
  src: `${playbutton}`,
})`
  display: inline;
  width: 1.7rem;
  height: 1.7rem;
`;

export const StopButton = styled.img.attrs({
  src: `${stopbutton}`,
})`
  display: inline;
  width: 1.7rem;
  height: 1.7rem;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .rhap_container {
    background-color: transparent;
    box-shadow: none;

    .rhap_progress-indicator {
      background-color: #fff;
    }
  }
`;
