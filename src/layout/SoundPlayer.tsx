import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import styled from 'styled-components';
import playbutton from '/images/play-circle.png';
import stopbutton from '/images/stop-circle.png';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';
import { useAllListenQuery } from '@/api/useApi';

function SoundPlayer(this: any) {
  const [sound, setSound] = useState('');
  const player: React.MutableRefObject<any> = useRef();

  // const { data: allSound } = useAllListenQuery(id);
  // const [audioUrl, setAudioUrl] = useState({
  //   audioFileUrl: '',
  // });
  // useEffect(() => {
  //   if (allSound) setAudioUrl(allSound);
  // }, [allSound]);
  // function Listen(id) {
  //   console.log('play');
  // }

  const [isPlay, setIsplay] = useState(false);
  function audiofunction() {
    isPlay ? player.current.audio.current.play() : player.current.audio.current.load();
  }

  return (
    <PlayerContainer>
      <PlayButton
        onClick={() => {
          setIsplay(true);
          audiofunction();
        }}
      />
      <StopButton
        onClick={() => {
          setIsplay(false);
          audiofunction();
        }}
      />
      <AudioPlayer
        src="https://jenapark.s3.ap-northeast-2.amazonaws.com/audio/sample/kor_w_1.wav"
        autoPlay={false}
        layout="horizontal-reverse"
        // onPlay={Listen}
        hasDefaultKeyBindings={false}
        ref={(elem) => (player.current = elem)}
        customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
        customControlsSection={[]}
      />
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

export default SoundPlayer;
