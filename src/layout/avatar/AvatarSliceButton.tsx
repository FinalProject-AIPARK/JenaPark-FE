import styled from 'styled-components';

function AvatarComponent({ 
  ChooseButton,
  OptionButton,
  chooseOn,
  optionOn,
}: ToggleType) {
  return (
    <>
        <SelectionButton>
          <AvatarButton
          onClick={ChooseButton}
          backgroundColor={chooseOn ? '#fff' : 'transparent'}
          borderColor= {chooseOn ? 'none' : '1px solid #bdbdbd'}
          color = {chooseOn ? '#000' : '#bdbdbd'}
          >
            버추얼아바타 선택
          </AvatarButton>
          <AvatarButton
          onClick={OptionButton}
          backgroundColor={optionOn ? '#fff' : 'transparent'}
          borderColor= {optionOn ? 'none' : '1px solid #bdbdbd'}
          color = {optionOn ? '#000' : '#bdbdbd'}
          >
            배경선택
          </AvatarButton>
        </SelectionButton>
    </>
  )
}

interface ToggleType {
  ChooseButton: () => void;
  OptionButton: () => void;
  chooseOn: boolean;
  optionOn: boolean;
}

interface ButtonStyle {
  backgroundColor: string;
  borderColor: string;
  color: string
}

const SelectionButton = styled.div `
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`

const AvatarButton = styled.button<ButtonStyle>`
  width: 14.375rem;
  height: 2.5rem;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ borderColor }) => borderColor};
  color: ${({ color }) => color};
`

export default AvatarComponent
