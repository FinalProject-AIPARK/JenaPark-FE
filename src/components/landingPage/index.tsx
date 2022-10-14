import { memo, useEffect } from 'react';
import LandingPageStyle from '@/layout/landingPage/LandingPageStyle';
import { Cookies } from 'react-cookie';
import LandingFooter from '../footer/landingFooter';
import LandingHeader from '../header/landingHeader';

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
      <LandingHeader />
      <LandingPageStyle />
      <LandingFooter />
    </>
  );
});

export default LandingPage;
