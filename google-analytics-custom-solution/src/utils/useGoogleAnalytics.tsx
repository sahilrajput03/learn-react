import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useScript from './useScript';

declare global {
  interface Window {
    dataLayer: any;
  }
}

const useGoogleAnalytics = (analyticsId: string) => {
  const location = useLocation();
  const isLoaded = useScript(`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`);

  const { pathname, search, hash } = location;

  useEffect(() => {
    if (!isLoaded) return;

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any): any;
    function gtag(): any {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date()); // necessary
    gtag('config', analyticsId); // necessary

    // LEARN: Please check file `indexVanilla.html` file to know how amazing and flexible this API is. Thanks.
    gtag('event', 'page_view', {
      page_location: pathname + search + hash,
      page_title: document.title,
    });
  }, [location, isLoaded]);
};

export default useGoogleAnalytics;
