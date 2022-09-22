import React from 'react';
import styled from 'styled-components';
import UserNavbarLayout from '../../../styles/UserNavbarLayout';

function Navbar() {
  return (
    <Contain>
      <UserNavbarLayout />
    </Contain>
  );
}

const Contain = styled.div`
  height: calc(100vh - 8.5rem);
`;

export default Navbar;
