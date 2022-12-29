import { useEffect, useState } from 'react';

const useScript = (URL: string) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = URL;
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(tag);

    tag.addEventListener('load', () => {
      setIsLoaded(true);
    });
  }, []);

  return isLoaded;
};

export default useScript;
