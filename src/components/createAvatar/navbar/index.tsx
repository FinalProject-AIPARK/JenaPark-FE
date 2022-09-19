import React from 'react';
import WorkingNavbar from './workingNavbar';
import UserNavbar from './userNavbar';

function Navbar() {
  return (
    <div>
      <UserNavbar />
      <WorkingNavbar />
    </div>
  );
}

export default Navbar;
