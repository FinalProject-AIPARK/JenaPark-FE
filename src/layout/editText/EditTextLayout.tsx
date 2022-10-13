import styled from 'styled-components';
import caution from '/images/caution-icon.png';
import trashcan from '/images/trashcan-icon.png';
import etc from '/etc-icon.png';
import sound from '/sound-icon.png';
import ton from '/ton-icon.png';
import voice from '/voice-icon.png';
import playButtonBlue from '/voiceModelPlay-icon.png';
import StopButtonBlue from '/voiceModelStop-icon.png';

function EditTextLayout({
  textUpLoadData,
  optionWindow,
  showOptionWindow,
  setDeleteCheckbox,
  deleteCheckBox,
  deleteComponent,
  EditTextupdataStore,
  audioInfos,
}: Edittest) {
  return (
    <>
      <Container> 
        <TextContainer>
          <Title>
            <span style={{ color: '#fff' }}>텍스트 수정</span>
            <ButtonContainer>
              <VoiceButton
                onClick={textUpLoadData}
              >음성 합성하기</VoiceButton>
              <DeleteButton>
                <Icon src={caution} />
                <span style={{ color: '#fff', fontSize: '16px', marginLeft: '9px' }}>1</span>
              </DeleteButton>
              <ErrorButton>
                <Icon
                  onClick={() => {
                    deleteComponent(deleteCheckBox);
                  }}
                  src={trashcan}
                />
              </ErrorButton>
            </ButtonContainer>
          </Title>
          <TextBox>
            <ScrollBox>
              <EditTextContainer>
                {audioInfos &&
                  audioInfos.map((list: any) => {
                    return (
                      <EditText key={list.audioId}>
                        {/* 대사창 묶음 */}
                        <StatusWrap>
                          <AvatarNameContainer>
                            <input
                              type="checkbox"
                              onClick={() => {
                                setDeleteCheckbox(list.audioId);
                                EditTextupdataStore(list.audioId, 'audioID');
                              }}
                              style={{ marginRight: '10px' }}
                            />
                            <AvatarName>
                              <h2 style={{ color: '#fff' }}>{list.audioModelName}</h2>
                            </AvatarName>
                          </AvatarNameContainer>
                          <Line />
                          <Text>
                            <input
                              onChange={(e) => EditTextupdataStore(e.target.value, 'text')}
                              defaultValue={list.splitText}
                              maxLength={150}
                              style={{ width: '100%', textOverflow: 'ellipsis' }}
                            />
                          </Text>
                          <Line />
                          <PlayContainer>
                            <>
                              <img
                                src={playButtonBlue}
                                alt="재생 이미지"
                                style={{ height: '2rem', width: '2rem' }}
                              />
                            </>
                            <img
                              src={StopButtonBlue}
                              alt="스탑 이미지"
                              style={{ height: '2rem', width: '2rem' }}
                            />
                          </PlayContainer>
                          <Line />
                          <ControlContainer>
                            <img
                              src={sound}
                              alt="소리 이미지"
                              onClick={() => {
                                showOptionWindow('VolumeSpeed');
                              }}
                            />
                            <img
                              src={voice}
                              alt="마이크 이미지"
                              onClick={() => {
                                showOptionWindow('Tone');
                              }}
                            />
                            <img
                              src={ton}
                              alt="그래프 이미지"
                              onClick={() => {
                                showOptionWindow('Breath');
                              }}/>
                              <img src={etc} alt="점점점 이미지" />
                            </ControlContainer>
                          </StatusWrap>
                          {/* 옵션창 묶음 */}
                          <OptionWrap>
                            {optionWindow.VolumeSpeed && <VolumeSpeedOptionContainer
                              speed={list.speed}
                              volume = {list.volume}
                              EditTextupdataStore={EditTextupdataStore}
                            />}
                            {optionWindow.Tone &&<ToneOptionContainer
                              pitch={list.pitch}
                              EditTextupdataStore={EditTextupdataStore}
                            />}
                            {optionWindow.Breath &&<BreathOptionContainer
                              durationSilence={list.durationSilence}
                              EditTextupdataStore={EditTextupdataStore}
                            />}
                          </OptionWrap>
                        </EditText>
                      )
                    })
                }
              </EditTextContainer>
            </ScrollBox>
          </TextBox>
        </TextContainer>
      </Container>
    </>
  );
}

function VolumeSpeedOptionContainer({speed, volume, EditTextupdataStore} : any) {
  return(
    <VolumeSpeedOptionWrap>
      <div className="container">
        <div className="control__part">
          <div className="control__wrap">
            <input 
              type="range" 
              min="0" 
              max="100" 
              step="1"
              className="volume"
              defaultValue={volume}
              onChange={(e) => EditTextupdataStore(Number(e.target.value), 'volume')}/>  
            <div className="control__guide">
              <span>음성 작게</span>
              <span>{volume}</span>
              <span>음성 크게</span>
            </div>
          </div>
          <div className="control__wrap">
            <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.1" 
            className="speed"
            defaultValue={speed}
            onChange={(e) => EditTextupdataStore(Number(e.target.value), 'speed')} />
            <div className="control__guide">
              <span>음성 느리게</span>
              <span>{speed}</span>
              <span>음성 빠르게</span>
            </div>
          </div>
        </div>
        <div className="current-service__part">
          <img src={sound} alt="소리 이미지" />
          <span>크기/속도</span>
        </div>
      </div>
    </VolumeSpeedOptionWrap>
  );
}

function ToneOptionContainer({pitch, EditTextupdataStore} : any) {
  return(
    <ToneOptionWrap>
      <div className="container">
        <div className="control__part">
          <div className="control__wrap">
            <input 
            type="range" 
            min="-0.5" 
            max="0.5" 
            step="0.1" 
            className="tone"
            defaultValue={pitch}
            onChange={(e) => EditTextupdataStore(Number(e.target.value), 'pitch')} />
            <div className="control__guide">
              <span>-0.5</span>
              <span>{pitch}</span>
              <span>0.5</span>
            </div>
          </div>
        </div>
        <div className="current-service__part">
          <img src={voice} alt="마이크 이미지" />
          <span>톤</span>
        </div>
      </div>
    </ToneOptionWrap>
  );
}

function BreathOptionContainer({durationSilence, EditTextupdataStore} : any) {
  return(
    <BreathOptionWrap>
      <div className="container">
        <div className="control__part">
          <div className="control__wrap">
            <input 
            type="text" 
            min="0.1" 
            max="9999" 
            className="breath"
            defaultValue={durationSilence}
            onChange={(e) => EditTextupdataStore(Number(e.target.value), 'durationSilence')} />
            <span className="second">초</span>
            <span className="min-value">(최소값: 0.1초)</span>
          </div>
        </div>
        <div className="current-service__part">
          <img src={ton} alt="그래프 이미지" />
          <span>호흡</span>
        </div>
      </div>
    </BreathOptionWrap>
  );
}
// 타입지정

interface Edittest {
  optionWindow: {VolumeSpeed:boolean, Tone: boolean, Breath: boolean}
  showOptionWindow: (kind: string) => void
  setDeleteCheckbox: (audioId : number) => void
  deleteCheckBox: number | undefined
  deleteComponent: any
  EditTextupdataStore: (id : number | string, kind: string) => void
  editText: string
  audioInfos: []
  textUpLoadData : any
}

// 스타일 지정
const EditTextContainer = styled.div`
  width: 65rem;
  height: 100%;
`;

const AvatarNameContainer = styled.div`
  width: 7.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ControlContainer = styled.div`
  width: 9.375rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const PlayContainer = styled.div`
  width: 6.25rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  width: 40.625rem;
  padding: 0 20px 0 8px;
`;

const AvatarName = styled.div`
  background-color: #0049ff;
  width: 5.1rem;
  height: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 10px;
`;
const Line = styled.div`
  width: 1px;
  height: 80%;
  background-color: #c3c3c3;
`;

const Icon = styled.img`
  height: 60%;
`;

const Container = styled.div`
  background-color: #001334;
  width: 55.9vw;
  height: 41.9vh;
  padding: 1.5rem;
  margin-top: 16px;
  border-radius: 0.63rem;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextBox = styled.div`
  height: 92%;
  width: 100%;
`;
const EditText = styled.div``;

const StatusWrap = styled.div`
  display: flex;
  align-items: center;
  width: 65rem;
  height: 3.125rem;
  margin: 10px 0;
  background-color: #fff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const OptionWrap = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 16.625rem;
  margin-right: 10px;
`;

const ScrollBox = styled.div`
  background-color: #fff;
  width: 96.8%;
  height: 93%;
  font-size: 1.1rem;
  margin-top: 1rem;
  line-height: 1.8rem;
  word-spacing: -0.2rem;
  border: none;
  resize: none;
  border-radius: 5px;
  padding: 8px 24px 8px 8px;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.5);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
`;

const VoiceButton = styled.button`
  width: 6.75rem;
  height: 2rem;
  border-radius: 5px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteButton = styled.button`
  width: 3.813rem;
  height: 2rem;
  background-color: rgba(255, 0, 0, 0.7);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorButton = styled.button`
  width: 2.75rem;
  height: 2rem;
  border-radius: 5px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dbdbdb;
`;

// 옵션창 스타일 지정

// 볼륨스피드조절
const VolumeSpeedOptionWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #fff;

  .container {
    display: flex;
    justify-content: flex-end;
    width: 840px;
    height: 50px;
    box-shadow: 0px 0px 6px rgb(0 0 0 / 25%);
    border-radius: 5px;
    margin: 0;
  }
  .control {
    &__part {
      display: flex;
      width: 690px;
    }
    &__wrap {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      input[type='range'] {
        appearance: none;
        height: 10px;
        background-color: #d3d3d3;
        width: 85%;
        border-radius: 10px;

        &::-webkit-slider-thumb {
          appearance: none;
          width: 15px;
          height: 15px;
          border: 1px solid #d3d3d3;
          border-radius: 50%;
          background: #fff;
          cursor: pointer;
        }
      }
    }
    &__guide {
      display: flex;
      justify-content: space-between;
      width: 85%;

      span {
        font-size: 0.9rem;
        word-spacing: 0rem;
      }
    }
  }
  .current-service {
    &__part {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 149px;
      &:before {
        content: '';
        width: 1px;
        height: 80%;
        background-color: #c3c3c3;
      }
      img {
        margin-left: 18px;
      }
      span {
        margin-left: 5px;
      }
    }
  }
`;

const ToneOptionWrap = styled(VolumeSpeedOptionWrap)`
  .container {
    width: 500px;
  }
  .control {
    &__wrap {
      width: 100%;
    }
  }
  .current-service {
    &__part {
      width: 292px;
    }
  }
`;

const BreathOptionWrap = styled(ToneOptionWrap)`
  .container {
    width: 420px;
  }
  .control {
    &__wrap {
      flex-direction: row;
      input[type='text'] {
        width: 60px;
        height: 30px;
        font-weight: 600;
        background-color: #c3c3c3;
        border-radius: 5px;
        text-align: center;
      }
      .second {
        margin-left: 5px;
        font-weight: 600;
        color: #8a8a8a;
      }
      .min-value {
        margin-left: 10px;
        font-weight: 300;
        color: #c3c3c3;
      }
    }
  }
  .current-service {
    &__part {
      width: 380px;
    }
  }
`;

export default EditTextLayout;
