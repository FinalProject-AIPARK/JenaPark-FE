import styled from 'styled-components';
import AvatarChooseStyle from './AvatarChooseStyle';
import AvatarOptionStyle from './AvatarOptionStyle';

function AvatarComponent({ toggle, setToggle }: ToggleType) {
  return (
    <>
    <Header></Header>
      <Main>
        <SelectionButton>
          <AvatarButton activation={toggle} onClick={()=>setToggle()}>버추얼 아바타 선택</AvatarButton>
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
  height: calc(100vh - 5.1em);
  position: absolute;
  left: 1315px;
  top: 80px;
  border: 1px solid;
`

const SelectionButton = styled.div `
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`

const AvatarButton = styled.button<ButtonType>`
  width: 230px;
  height: 50px;
  border-radius: 10px;
  border-color: ${(props) => (props.activation ? '#001334': '#bdbdbd')};
  color: ${(props) => (props.activation ? '#001334': '#bdbdbd')};
`

export default AvatarComponent