import React, { useEffect } from 'react';
import LandingPageStyle from '@/layout/LandingPageStyle';
import Header from '../Header';
import { Cookies } from 'react-cookie';
import LandingFooter from '../Footer/LandingFooter';

function LandingPage() {
  const cookies = new Cookies();
  const url = new URL(window.location.href);
  const urlParams = url.searchParams;
  console.log(urlParams.keys());
  useEffect(() => {
    if (urlParams.get('accessToken')) {
      cookies.set('accessToken', urlParams.get('accessToken'));
      cookies.set('refreshToken', urlParams.get('refreshToken'));
      console.log('hi');
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
