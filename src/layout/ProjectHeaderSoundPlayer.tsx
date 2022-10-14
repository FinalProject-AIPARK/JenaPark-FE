import React, { useEffect, useState, useRef, memo } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styled from 'styled-components';
import playbutton from '/images/play-circle.png';
import stopbutton from '/images/stop-circle.png';
import { useAllListenQuery } from '@/api/useApi';
import { useAppSelector } from '@/store/store';

const ProjectHeaderSoundPlayer = memo(() => {
  const { projectId } = useAppSelector((state) => state.projectControl.projectData);
  const player: React.MutableRefObject<any> = useRef();
  const { data: allSound } = useAllListenQuery(Number(projectId));
  const [audioUrl, setaudioUrl] = useState('');
  useEffect(() => {
    if (allSound) setaudioUrl(allSound.data);
  }, [allSound]);
  function audiofunction(isPlay: boolean) {
    isPlay ? player.current.audio.current.play() : player.current.audio.current.load();
  }
  return (
    <PlayerContainer>
      <PlayButton
        onClick={() => {
          audiofunction(true);
        }}
      />
      <StopButton
        onClick={() => {
          audiofunction(false);
        }}
      />
      <AudioPlayer
        src={audioUrl}
        layout="horizontal-reverse"
        hasDefaultKeyBindings={false}
        ref={(elem) => (player.current = elem)}
        customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
        customControlsSection={[]}
      />
    </PlayerContainer>
  );
});

const PlayButton = styled.img.attrs({
  src: `${playbutton}`,
})`
  display: inline;
  width: 1.7rem;
  height: 1.7rem;
`;
const StopButton = styled.img.attrs({
  src: `${stopbutton}`,
})`
  display: inline;
  width: 1.7rem;
  height: 1.7rem;
`;
const PlayerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;

  .rhap_controls-section {
    display: none;
  }

  .rhap_container {
    background-color: transparent;
    box-shadow: none;

    .rhap_progress-indicator {
      background-color: #fff;
    }
  }
`;

export default ProjectHeaderSoundPlayer;
