import React, { useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function SoundPlayer() {
  return (
    <AudioPlayer
      src="https://t1.daumcdn.net/cfile/tistory/27510D425854D91F34?original"
      autoPlay={false}
      layout="horizontal-reverse"
      onPlay={(e) => console.log('onPlay')}
      hasDefaultKeyBindings={false}
    />
  );
}

export default SoundPlayer;
