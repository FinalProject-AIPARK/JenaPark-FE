import React, { useEffect } from 'react';
import LandingPageStyle from '@/layout/LandingPageStyle';
import Header from '../Header';
import Footer from '@/layout/LendingFooter';
import { removeToken } from '@/store/Auth';
import { useLogOutMutation } from '@/api/useApi';
import { Cookies } from 'react-cookie';
import LandingFooter from '../Footer/LandingFooter';

function LandingPage() {
  const cookies = new Cookies();
  const url = new URL(window.location.href);
  const urlParams = url.searchParams;
  useEffect(() => {
    if (urlParams) {
      cookies.set('accessToken', urlParams.get('accessToken'));
      cookies.set('refreshToken', urlParams.get('refreshToken'));
    }
  }, [urlParams]);
  console.log(urlParams.get('accessToken'));
  return (
    <>
      <Header />
      <LandingPageStyle />
      <LandingFooter />
    </>
  );
}

export default LandingPage;
