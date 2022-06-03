// Usage -
//import {useFetch} from "./useFetch.js";
//const url = "https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json";
//const {data, loading} = useFetch(url);
// --
//Defining hook inside useFetch.js file.
import { useEffect, useState, useRef } from "react";

export const useFetch = (url, contentType) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  // Below useEffect hook sets isMounted.current to false, when our component is no longer exits, i.e., unomunted state.
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => {
        if (contentType === "text") return x.text();
        return x.json();
      })
      /* Change x.json() to x.text() if you want to get data as text. */
      .then((data) => {
        /* This isMounted.current flag check is important coz `React` would throw error if try to attempt state update on unmounted component(*unmounted* => which doesn't exists in dom at the moment). */
        if (isMounted.current) {
          setState({ data, loading: false });
        }
      });
  }, [url, setState]);
  /* Just need to return the state from this customHook now. */
  return state;
};
//Source: ben awad's useEffect's video + PERSONAL COMMENTS.
