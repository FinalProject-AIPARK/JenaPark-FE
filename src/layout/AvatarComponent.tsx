import styled from 'styled-components';
import AvatarChooseStyle from './AvatarChooseStyle';
import AvatarOptionStyle from './AvatarOptionLayout';

function AvatarComponent({ toggle, setToggle }: ToggleType) {
  return (
    <>
      <Main>
        <SelectionButton>
          <AvatarButton activation={toggle} onClick={()=>setToggle()}>버추얼아바타 선택</AvatarButton>
          <AvatarButton activation={!toggle} onClick={()=>setToggle()}>배경선택</AvatarButton>
        </SelectionButton>
        {toggle ? <AvatarChooseStyle/> : <AvatarOptionStyle/>}
      </Main>
    </>
  )
}

interface ToggleType {
  toggle: boolean;
  setToggle: () => void;
}

interface ButtonType {
  activation: boolean;
}

const Header = styled.header `
  height: 5em;
  background-color: orange;
`

const Main = styled.main `
  height: calc(100vh - 8.5rem);
  position: absolute;
  right: 5rem;
  background-color: rgba(0, 19, 52, 0.8);
`

const SelectionButton = styled.div `
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`

const AvatarButton = styled.button<ButtonType>`
  width: 14.375rem;
  height: 2.5rem;
  border-radius: 5px;
  background-color: ${(props) => (props.activation ? '#fff' : 'rgba(0, 19 , 52, 0)')};
  border: ${(props) => (props.activation ? '1px solid #bdbdbd': '1px solid #bdbdbd')};
  color: ${(props) => (props.activation ? '#001334': '#bdbdbd')};
`

export default AvatarComponent