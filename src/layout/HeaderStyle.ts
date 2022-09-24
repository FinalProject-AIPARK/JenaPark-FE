import styled from 'styled-components';
import voiceimage from '/images/music.png';
import videoimage from '/images/video.png';
import playbutton from '/images/play-circle.png';
import stopbutton from '/images/stop-circle.png';

export const CProjectButton = styled.button`
  width: 7.75rem;
  height: 2.44rem;
  font-size: 1rem;
  font-weight: 400;
  background-color: #80a4ff;
  color: #000;
  border: 0;
  outline: 0;
  border-radius: 0.3125rem;
  cursor: pointer;
  margin-right: 1.06rem;
`;

export const SignButton = styled.button`
  width: 7.75rem;
  height: 2.44rem;
  font-size: 1rem;
  font-weight: 400;
  background-color: #fff;
  color: #000;
  border: 0;
  outline: 0;
  border-radius: 0.3125rem;
  cursor: pointer;
`;

export const VideoImage = styled.img.attrs({
  src: `${videoimage}`,
})`
  display: inline;
  width: 1.5rem;
  height: 1.5rem;
`;

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
