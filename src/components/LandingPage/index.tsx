import React from 'react';
import LandingPageStyle from '@/layout/LandingPageStyle';
import Header from '../Header';
import Footer from '@/layout/LendingFooter';
import { removeToken } from '@/store/Auth';
import { useLogOutMutation } from '@/api/useApi';
import { Cookies } from 'react-cookie';

function LandingPage() {
  return (
    <>
      <Header />
      <LandingPageStyle />
      <Footer />
    </>
  );
}

export default LandingPage;
