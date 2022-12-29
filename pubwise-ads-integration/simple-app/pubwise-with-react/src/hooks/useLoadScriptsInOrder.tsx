import { useEffect, useState } from "react";

const useLoadScriptsInOrder = (URLs: string[]) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function main() {
      try {
        // Sequential Loading of scripts
        for (const url of URLs) {
          await new Promise((resolve) => {
            const tag = document.createElement("script");
            // tag.async = true;
            tag.src = url;
            const body = document.getElementsByTagName("body")[0];
            body.appendChild(tag);

            tag.addEventListener("load", resolve);
          });
        }
        setIsLoaded(true);
      } catch (error: any) {
        console.error("MY-COMPANY LOG: (failed to load PubWise scipts):", {
          name: error.name,
          message: error.message,
          stack: error.stack,
        });
      }
    }

    main();
  }, []);

  return isLoaded;
};

export default useLoadScriptsInOrder;
