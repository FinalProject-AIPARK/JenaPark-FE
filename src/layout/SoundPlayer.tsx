import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styled from 'styled-components';
import playbutton from '/images/play-circle.png';
import stopbutton from '/images/stop-circle.png';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';

function SoundPlayer(this: any) {
  const [song, setSong] = useState('');
  const player = useRef(song);
  useEffect(() => {
    axios
      .get('http://43.200.66.173:8080/v2/api/v1/audio/sample')
      .then((res) => setSong(res.data[0].track));
  }, []);

  const audiofunction = () => {
    // player.current.audio.current.play();
    // player.current.audio.current.load();
  };

  return (
    <PlayerContainer>
      <AudioPlayer
        src="https://t1.daumcdn.net/cfile/tistory/27510D425854D91F34?original"
        autoPlay={false}
        layout="horizontal-reverse"
        onPlay={(e) => console.log('onPlay')}
        hasDefaultKeyBindings={false}
      />
      <PlayButton />
      <StopButton />
      {/* <AudioPlayer
        // ref={this.player}
        src="https://t1.daumcdn.net/cfile/tistory/27510D425854D91F34?original"
        customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
        customControlsSection={[]}
      /> */}
    </PlayerContainer>
  );
}

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

  .rhap_container {
    background-color: transparent;
    box-shadow: none;

    .rhap_progress-indicator {
      background-color: #fff;
    }
  }
`;

export default SoundPlayer;
