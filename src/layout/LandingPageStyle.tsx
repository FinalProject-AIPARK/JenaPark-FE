import React from 'react';
import YouTube from 'react-youtube';

function LandingPageStyle() {
  return (
    <>
      <YouTube
        videoId="hUgGblPDVxI"
        opts={{
          width: '600',
          height: '374',
          playerVars: {
            autoplay: 1,
            rel: 0,
            modestbranding: 1,
            loop: 1,
            playlist: 'hUgGblPDVxI',
            controls: 0,
            end: 20,
            fs: 1,
            disablekb: 1,
            mute: 1,
          },
        }}
      />
    </>
  );
}

export default LandingPageStyle;
