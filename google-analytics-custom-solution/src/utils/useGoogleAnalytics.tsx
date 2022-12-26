import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useScript from "./useScript";

declare global {
  interface Window {
    dataLayer: any;
  }
}

const useGoogleAnalytics = (analyticsId: string) => {
  const location = useLocation();
  const isLoaded = useScript(`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`);
  const previousPathRef = useRef<string>();

  const { pathname, search, hash } = location;

  useEffect(() => {
    if (!isLoaded) return;

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any): any;
    function gtag(): any {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    }

    const path = pathname + search + hash;
    if (previousPathRef.current === path) return;
    previousPathRef.current = path;

    gtag("js", new Date()); // necessary
    gtag("config", analyticsId); // necessary

    // console.log('event sent for path?', path); // USE THIS TO TEST THE ACTUALY SENDING OF EVENT.
    gtag("event", "page_view", {
      page_location: path,
      page_title: document.title,
    });
  }, [location, isLoaded]);
};

export default useGoogleAnalytics;
