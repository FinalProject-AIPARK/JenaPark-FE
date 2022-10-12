import React from 'react';
import LandingPageStyle from '@/layout/LandingPageStyle';
import Header from '../Header';
import Footer from '@/layout/LendingFooter';
import { removeToken } from '@/store/Auth';
import { useLogOutMutation } from '@/api/useApi';
import { Cookies } from 'react-cookie';
import LandingFooter from '../Footer/LandingFooter';

function LandingPage() {
  return (
    <>
      <Header />
      <LandingPageStyle />
      <LandingFooter />
    </>
  );
}

export default LandingPage;
