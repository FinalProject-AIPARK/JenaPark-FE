import styled from 'styled-components';
import leftarrow from '/images/arrow-ios-left.png';
import editpencil from '/images/edit-pencil.png';
import saveimage from '/images/save.png';
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

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.88rem;
  background: rgba(0, 19, 52, 0.5);
  box-shadow: 4px 4px 10px rgba(250, 250, 250, 0.1);
`;

export const ProjectNameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 10.25rem;
  height: 2.06rem;
`;

export const LeftArrow = styled.img.attrs({
  src: `${leftarrow}`,
})`
  width: 1.5rem;
  height: 1.5rem;
  color: #000;
  margin-right: 0.3125rem;
  filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(258deg) brightness(107%) contrast(101%);
`;

export const ProjectNameText = styled.span`
  font-weight: 700;
  font-size: 1.375rem;
  color: #fff;
`;

export const NameEditImage = styled.img.attrs({
  src: `${editpencil}`,
})`
  width: 1.5rem;
  height: 1.5rem;
  color: #000;
  margin-left: 0.3125rem;
  filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(258deg) brightness(107%) contrast(101%);
`;

export const ImageButtonContainer = styled.div`
  display: flex;
`;

export const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.5rem;
  height: 2.5rem;
  border: 0.0625rem solid #aac2ff;
  border-radius: 0.3125rem;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.3125rem;
  letter-spacing: -0.005em;
  color: #000;
  cursor: pointer;
  margin-right: 1.5rem;
`;

export const SaveImage = styled.img.attrs({
  src: `${saveimage}`,
})`
  display: inline;
  width: 1.5rem;
  height: 1.5rem;
`;

export const DownloadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9.5rem;
  height: 2.5rem;
  background: #80a4ff;
  border: 0.0625rem solid #80a4ff;
  border-radius: 0.3125rem;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.3125rem;
  letter-spacing: -0.005em;
  color: #000;
  cursor: pointer;
  margin-right: 1.5rem;

  :last-child {
    margin-right: 0;
  }
`;

export const VoiceImage = styled.img.attrs({
  src: `${voiceimage}`,
})`
  display: inline;
  width: 1.5rem;
  height: 1.5rem;
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
