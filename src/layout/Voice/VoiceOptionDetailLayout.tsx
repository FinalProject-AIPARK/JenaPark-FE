import React from 'react';

function VoiceOptionDetailLayout() {
  const layoutInfo = [
    {
      imgSrc: '',
      optionName: '음성 속도',
      step: 0.1,
      default: 0,
      max: 0.5,
      min: -0.5,
      maxGuide: '빠르게',
      minGuide: '느리게',
    },
    {
      imgSrc: '',
      optionName: '톤 조절',
      step: 0.1,
      default: 0,
      max: 0.5,
      min: -0.5,
      maxGuide: '0.5',
      minGuide: '-0.5',
    },
  ];
  return (
    <div>
      {layoutInfo.map((item, index) => (
        <div>
          {/* 설정 이름 */}
          <div>
            <img src="" alt="" />
            <span></span>
          </div>
          {/* 설정 바 */}
          <div>
            <input type="text" />
          </div>
          {/* 설정 최소 최대이름 */}
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VoiceOptionDetailLayout;
