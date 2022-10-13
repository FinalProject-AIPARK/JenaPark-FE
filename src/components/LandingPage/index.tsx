import { memo, useEffect } from 'react';
import LandingPageStyle from '@/layout/landingPage/LandingPageStyle';
import Header from '../Header';
import { Cookies } from 'react-cookie';
import LandingFooter from '../Footer/LandingFooter';

const LandingPage = memo(() => {
  const cookies = new Cookies();
  const url = new URL(window.location.href);
  const urlParams = url.searchParams;
  useEffect(() => {
    if (urlParams.get('accessToken')) {
      cookies.set('accessToken', urlParams.get('accessToken'));
      cookies.set('refreshToken', urlParams.get('refreshToken'));
    }
  }, [urlParams]);
  return (
    <>
      <Header />
      <LandingPageStyle />
      <LandingFooter />
    </>
  );
});

export default LandingPage;
