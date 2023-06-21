# Readme

**Quick Links:**
- React Challenges: [Click here](./react-challenges.md)
- KCD's Calls: [Click here](https://kentcdodds.com/calls)

**Quick Links My Resources:**
- cssDesignTrail: [Click here](https://github.com/sahilrajput03/cssDesignTrail)
- Learn Bootstrap: [Click here](https://github.com/sahilrajput03/cssDesignTrail/blob/master/learn-bootstrap.md)
- Learn Styled Components: [Click here](https://github.com/sahilrajput03/cssDesignTrail/blob/master/learn-styled-components.md)

**React Projects Deployed:**
- Device Width (screen width): [Click here](https://github.com/sahilrajput03/device-width-react)

**TODO:**
- Make a codesandbox example for making use of nested route system (refer slasher project for it)
- Five Clever Hacks for React-Query and SWR: [Click here](https://youtu.be/JaM2rExmmqs) **by Jack Herrington**

## Using abort controller with react!

[Source@timestamped](https://youtu.be/95B8mnhzoCM?t=188)

![image](https://user-images.githubusercontent.com/31458531/170984688-c52de1b8-04cb-48bf-9d69-c3a303d3921b.png)

## Using builtin abort controller in react-query

![image](https://user-images.githubusercontent.com/31458531/170984979-03863e13-2f25-4452-96b9-73e4dc729dfd.png)

## Lazy loading images in react

[Clickh here- Youtube video](https://www.youtube.com/watch?v=0-Ze5dEgVFk) - Simple with library `react-lazy-load-image-component` - [npm package](https://www.npmjs.com/package/react-lazy-load-image-component)

## Third parater of `addEventListener`

[Click here](https://stackoverflow.com/a/17564340)

## Learning amazing apis of browser realted to `history` and `state` in browser

- pushState: [Click here](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) (MDN)
- When popstate is sent: [Click here](https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event#when_popstate_is_sent) (MDN)

## Handling spa with github pages

Source: [Stackoverflow Answer](https://stackoverflow.com/a/46060999/10012446), also from github - [Github 404 Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)

Demo: https://spa-github-pages.rafgraph.dev/, Github: https://github.com/rafgraph/spa-github-pages

**tldr;** `404.htm` file: [Click here](https://github.com/rafgraph/spa-github-pages/blob/gh-pages/404.html).

And script to be added in `index.html` file

Source: [here](https://github.com/rafgraph/spa-github-pages/blob/gh-pages/index.html#L21-L42)

```html
<head>
...
...
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      // This script checks to see if a redirect is present in the query string,
      // converts it back into the correct url and adds it to the
      // browser's history using window.history.replaceState(...),
      // which won't cause the browser to attempt to load the new url.
      // When the single page app is loaded further down in this file,
      // the correct url will be waiting in the browser's history for
      // the single page app to route accordingly.
      (function(l) {
        if (l.search[1] === '/' ) {
          var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
          }).join('?');
          window.history.replaceState(null, null,
              l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      }(window.location))
    </script>
	
</head>
```

## useEffect(() => {}, []) runs twice in development server why?

[Click here](https://blog.bitsrc.io/react-v18-0-useeffect-bug-why-do-effects-run-twice-39babecede93)

## We can see `useState` hook names in react-dev-tools too - AWESOME

![image](https://user-images.githubusercontent.com/31458531/234232722-4c35d5e0-4c6c-4c92-a7c0-cea6686f01d8.png)

## We can check whenever `navigate('/my-page')` funnction is called when we're already on the same page i.e., `/my-page`

FYI: You can prevent the calling of the effect on component mount by saving preKey using `useRef()` and avoid calling code in useEffect when `location.key === lastPathRef.current`.

```ts
const navigate = useNavigate()

useEffect(() => {
// 1. Code here will only be called whenever `navigate('/my-page')` is called from anywhere of the project
// 2. Also: It will be triggered when a user click a <Link to={'/my-page'} /> link component. 
}, [navigate.key])
```

## We can pass state to another component via `location.state` like that

```ts
const myFun = () => {
     navigate(`/app/movies/${id}/reviews`, { state: { movieId: popoverClickProps.id } });
}

// in target component which is rendered at the target path we can use:
const location = useLocation();
console.log('location.state?', location.state); // we get same value
```

**Way 1:**

![image](https://user-images.githubusercontent.com/31458531/233847953-3d508067-67f7-4fec-8381-84f2efe420ac.png)

**Way 2:**

![image](https://user-images.githubusercontent.com/31458531/233848349-49d99384-a04e-497a-8975-f981abb8d992.png)

## Calling `setState` after component mount is always safe

- PR merge on Aug 19, 2021 by Dan Abrmov: [Click here](https://github.com/facebook/react/pull/22114)
- Found about the PR from this article: [React: Stop checking if your component is mounted](https://medium.com/doctolib/react-stop-checking-if-your-component-is-mounted-3bb2568a4934)
- Codesandbox Example - Source: [Click here](https://codesandbox.io/s/calling-setstate-is-safe-after-unmount-oo42zc?file=/src/App.js)

## Set state on component mount

My Codesandbox Example: [Click here](https://codesandbox.io/s/set-state-on-component-mount-37zjw8?file=/src/App.js)

```js
import "./styles.css";
import { useState, useEffect } from "react";

const mockApi = () =>
  new Promise((res) => {
    setTimeout(() => {
      console.log("returning api response!");
      res(25);
    }, 500);
  });

// Example inspired from: https://react.dev/learn/you-might-not-need-an-effect#fetching-data

// Note in this example, we're calling api twice in real but only calling `setState` once.
export default function App() {
  const [state, setState] = useState(5);
  useEffect(() => {
    let ignore = false;
    console.log("calling api!");
    mockApi().then((data) => {
      if (!ignore) {
        console.log("setting state!");
        setState(data);
      }
    });

    return () => {
      console.log("CLEANUP!");
      ignore = true;
    };
  }, [setState]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>state: {state}</h2>
    </div>
  );
}
```

## Fix `FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory` react-server error

Source: [Click here](https://stackoverflow.com/a/59983758/10012446)

## Fix enter key to (submit form/page refresh) in `react-bootstrap`

Complete List of `key` values @ MDN: [Click here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)

![image](https://user-images.githubusercontent.com/31458531/224758915-210bc1c0-ebec-4b42-b64a-df2d5d4a6f07.png)

## Dynamically adding `meta` and `canonical <link>` tags in `create-react-app` project for SEO purpose

![image](https://user-images.githubusercontent.com/31458531/224196376-23b8a0ad-9ff8-4dbb-a753-24094f4fcfc4.png)

Query: how would google know that a certain page with url like below exists?
http://slasher.tv/app/news/partner/6036639a657a566248b973f7

- Possible way: We can generate a static build with multiple html files generated for each route which then be easily crawled by search engines.

![image](https://user-images.githubusercontent.com/31458531/224196068-b57e9618-080d-4b28-b304-fba6fee6ab9f.png)

Source:

- Article - Canonical URLs: A Beginner’s Guide to Canonical Tags: [Click here](https://www.semrush.com/blog/canonical-url-guide/)
- Related stackoverflow question: [Click here](https://stackoverflow.com/questions/22588705/when-does-googlebot-execute-javascript)
- Article (from above 2nd answer of above stackoverflow question) - [Tested How Googlebot Crawls Javascript](https://searchengineland.com/tested-googlebot-crawls-javascript-heres-learned-220157)
- [`react-helmet`](https://www.npmjs.com/package/react-helmet). [`react-snap`](https://github.com/stereobooster/react-snap)
- Sample SEO react PROJECT with `react-helmet` and `react-snap`: [Click here](https://github.com/frankly034/react-seo-demo)
- React Snap buils static pages for different routes after `npm run build` command is finished when we have this `"postbuild": "react-snap"` script in our package.json project file.
- Article1 on developers.google.com - Updating our technical Webmaster Guidelines: [Click here](https://developers.google.com/search/blog/2014/10/updating-our-technical-webmaster)
- Article2 on developers.google.com - Build and submit a sitemap: [Click here](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- Article3 on developers.google.com - Google Search Essential: [Click here](https://developers.google.com/search/docs/essentials)
- Article4 on developers.google.com - Link best practices for Google: [Click here](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- NOTE: Make your links crawlable so that Google can find other pages on your site via the links on your page. Refer linked article4.
- NOTE: `react-snap` produces static site pages for each route.
- NOTE: Google Crawler runs javascript just like regular browsers do!. (Source of below image is Article1)
	![image](https://user-images.githubusercontent.com/31458531/224191170-8851cdd9-b26d-43b1-ac68-b7da4e3a86a3.png)
- Google crawls pages mentioned in the sitemap submitted for the site. (Source of below image is Article2)
	![image](https://user-images.githubusercontent.com/31458531/224189694-9c9c0ac9-a078-455c-a8c0-0bd5ddebc3a3.png)
- Google Search Console: [Click here](https://search.google.com/search-console)
- We might be able to check/test the crawled data for pages by "Google Search Console" (same linke as above).
	![image](https://user-images.githubusercontent.com/31458531/224193450-1e6869d9-104c-4aff-b75d-6f7511aa032d.png)


## Generate this beautiful dependencies graph

Npm: `source-map-explorer`

Source: [Click here](https://www.npmjs.com/package/source-map-explorer)

![image](https://user-images.githubusercontent.com/31458531/223871677-549330bb-9a1e-45d0-8b7d-55efa1fc1f64.png)


## You can use this amazing feature of react-dev-tools to log the props of a component in an awesome way

![image](https://user-images.githubusercontent.com/31458531/223815989-82a6e43c-ebbd-4870-bcab-67d32bdf8c6d.png)

## Seo in react

Source: [Article - SEO in React — Two simple step implementation](https://medium.com/@franklynugege/seo-in-react-two-simple-step-implementation-7d9382381718)

## Define type for `setState` function in typescript

Source: [Click here](https://stackoverflow.com/a/65824149/10012446)

```ts
import React from 'react';
setValue : React.Dispatch<React.SetStateAction<string>>
```

![image](https://user-images.githubusercontent.com/31458531/221410489-4b20b1ca-0924-49fc-95de-bd2a89e15c22.png)


## ❤️ Its always good to view component's props data in react-dev-tools view

You can search for a component name and see its values

![image](https://user-images.githubusercontent.com/31458531/221407144-e6efe1da-1986-41ef-b153-a6f16391da5c.png)

## `defaultProps` in react components

Source: [Click here](https://codesandbox.io/s/ecstatic-surf-u2hojk?file=/src/App.js)

```tsx
export default function App() {
  return (
    <div className="App">
      <Greeting />
    </div>
  );
}

// Learning: The default value given to b is not assigned becoz the whole object i.e, `defaultProps` is assigned to first argument of the component.
const Greeting = ({ a, b = "bar" }) => {
  return (
    <h1>
      hello,
      {a} {b}
    </h1>
  );
};
Greeting.defaultProps = {
  a: "firstName",
  b: "lastName"
};
```

## Error `Type 'MutableRefObject<HTMLInputElement | undefined>' is not assignable to type 'LegacyRef<HTMLInputElement> | undefined'`

Source: [Click here](https://stackoverflow.com/a/74297048/10012446)

```ts
const ref = React.useRef<HTMLInputElement>(null)
```

## `react-router-dom` docs links
- Migrating from v5 to v6 in react-router-dom: [Click here](https://reactrouter.com/en/main/upgrading/v5)

## Using dangerous set html in react

Example CodeSandbox: [Click here](https://codesandbox.io/s/using-dangerouslysetinnerhtml-5jhbkk)

```jsx
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div dangerouslySetInnerHTML={{
        __html: "<b>hello</b>"
      }}/>
    </div>
  );
}

```

## Returning `component` from your custom hook

Inspiration:

- **React Design Patterns: Return Component From Hooks:** [Click here](https://blog.bitsrc.io/new-react-design-pattern-return-component-from-hooks-79215c3eac00)

```tsx
  // usage of `useCustomProgressButtonStatus` hook
  const [ProgressButton1, setProgressButtonStatus1] = useProgressButton();
  const updateYourPost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // setProgressButtonStatus('loading');
    // setProgressButtonStatus('success');
    // setProgressButtonStatus('failure');
  }
  
  // in jsx
  return <ProgressButton1 label="Update your post" className="text-primary" onClick={updatePostHandler} />
```

File: `useProgressButton` (react custom hook):

```tsx
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import RoundButton from './RoundButton';

type ProgressButtonStatus = 'default' | 'loading' | 'success' | 'failure';

type ProgressButtonComponentType = ({ label, className, onClick }: Props) => ReactElement<any>;

type Props = {
  label: string,
  className: string,
  onClick: Function,
};

type SetProgressFunction = (status: ProgressButtonStatus) => void;

const useProgressButton = (): [ProgressButtonComponentType, SetProgressFunction] => {
  const [progress, setProgress] = useState<ProgressButtonStatus>('default');

  useEffect(() => {
    if (progress === 'loading' || progress === 'default') return () => {};

    const restoreDefaultStatusTimeout = setTimeout(() => {
      setProgress('default');
    }, 1_500);
    return () => clearTimeout(restoreDefaultStatusTimeout);
  }, [progress, setProgress]);

  const ProgessButtonComponent = React.useMemo(() => {
    function ProgessButton({
      label, className = '', onClick = () => { },
    }: Props) {
      const disabled = progress === 'loading';
      return (
        <RoundButton disabled={disabled} type="submit" className={className} onClick={onClick}>
          {progress === 'default' && label}
          {progress === 'loading' && <Spinner size="sm" animation="border" role="status" />}
          {progress === 'success' && <FontAwesomeIcon icon={solid('check')} size="1x" style={{ paddingTop: 3 }} />}
          {progress === 'failure' && <FontAwesomeIcon icon={solid('x')} size="1x" style={{ paddingTop: 3 }} />}
        </RoundButton>
      );
    }
    return ProgessButton;
  }, [progress]);
  return [ProgessButtonComponent, setProgress];
};

export default useProgressButton;
```

## Remove all proerties of a button

Source: [Click here](https://stackoverflow.com/a/54101412/10012446)

![image](https://user-images.githubusercontent.com/31458531/216450979-4209dc96-e605-4d73-8b74-510545177353.png)

## `copy-to-cliboard` library

- Github: [Click here](https://github.com/sudodoki/copy-to-clipboard)
- npm: [Click here](https://www.npmjs.com/package/copy-to-clipboard)


## Defining a sub-render function in render vs. a React component

Stackoverflow Question: [Click here](https://stackoverflow.com/questions/61280400/defining-a-sub-render-function-in-render-vs-a-react-component)

## Defining css varibles in react

- Source: [Click here](https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript)
- Source: [Click here](https://www.joshwcomeau.com/css/css-variables-for-react-devs/)
- Absolute vanilla way to get css variable in javascript
	```js
	const successColorBootstrap = getComputedStyle(document.body).getPropertyValue('--bs-success');
	console.log(successColorBootstrap) // #00ff0a
	```

- **My notes @ css design trail about css variables accessing/setting via javascript?:** [Click here](https://github.com/sahilrajput03/cssDesignTrail/blob/master/README.md#updateaccess-css-variables-via-javascript)

## React 18: useEffect Double Call; Mistake or Awesome? ~Jack Herrington

Source: [Click here](https://www.youtube.com/watch?v=j8s01ThR7bQ&t=123s)

## Thats how we can use css varibles in react

(see above section as well: `Defining css varibles in react`)

![image](https://user-images.githubusercontent.com/31458531/209655258-f4a457a4-6575-4767-9c93-22f17052dc56.png)

## `window.matchMedia` to help you do media query checking in javascript

*Inspired by Abhishek's Codebase*

- [W3schools](https://www.w3schools.com/jsref/met_win_matchmedia.asp), [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)


```js
import { useState, useEffect } from "react";

export const useMatchMedia = (mediaQuery, initialValue) => {
  
  const [isMatching, setIsMatching] = useState(initialValue);

  useEffect(() => {
    const watcher = window.matchMedia(mediaQuery);
    setIsMatching(watcher.matches);
    const listener = (matches) => {
      setIsMatching(matches.matches);
    };
    if (watcher.addEventListener) {
      watcher.addEventListener("change", listener);
    } else {
      watcher.addListener(listener);
    }
    return () => {
      if (watcher.removeEventListener) {
        return watcher.removeEventListener("change", listener);
      } else {
        return watcher.removeListener(listener);
      }
    };
  }, [mediaQuery]);

  return isMatching;
};
```

## What does flushSync() do in React?

Source: [Click here](https://stackoverflow.com/a/72694185)

FYI: I also answered this answer [here](https://stackoverflow.com/questions/62725935/what-does-flushsync-do-in-react/74945559#74945559) in same above question.

## microfrontends?

By Jack Herrington: [Click here](https://www.youtube.com/watch?v=w58aZjACETQ)

## set brand new search params

- Source: @MDN # API/URLSearchParams [Click here](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- Source: useSearchParams: [Click here](https://reactrouter.com/en/main/hooks/use-search-params)

```js
let newSearcParams = {}
for (const [k,v] of searchParams) { // here `searchParams` is the value we get from `useSearchParams` hook of react-router@v6
  newSearcParams[k] = v
  // here we put some condition and change any particular key/value pari as per our need
}
setSearchParams(newSearcParams) // react-router@v6 hook to set new search params
```


## multiple search params?

***All searchParams methods @ MDN: Beautiful: [Click here](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)***

Docs@ MDN: [Click here](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/getAll)

![image](https://user-images.githubusercontent.com/31458531/206477818-7b8ea454-9052-47b7-afa5-e99a22dffbbb.png)

![image](https://user-images.githubusercontent.com/31458531/206477603-c4c22991-82d0-4bdd-b484-5126cd2d7a6f.png)


## `react-router-dom@6` useSearchParams

Video: [Click here](https://www.youtube.com/watch?v=NIeViuGJpMQ), Docs: [Click here](https://reactrouter.com/en/main/hooks/use-search-params)

## Mastering React Batch Updating

Source: **[Mastering React Batch Updating ~ Jack herrington](https://www.youtube.com/watch?v=MlDTHzK1vKI)**

## What does render function call does actually in react?

**Source: [Mastering React Memo ~ Jack Herrington](https://www.youtube.com/watch?v=DEPwA3mv_R8)**

Its running the render() function on each render to change the values in virtualDom and changes from virtualDom to realDom is only done intelligent way (reconciliation) only when necessary(not change values on every render).
- Directly from react conciliation docs: [Click here](https://reactjs.org/docs/reconciliation.html)
	> React then needs to figure out how to efficiently update the UI to match the most recent tree.

![image](https://user-images.githubusercontent.com/31458531/206142881-7da36e58-5587-4230-8ca9-4473deea2eec.png)

**Also changes are written to real dom when there is delta b/w virtual and real dom like that:**


![image](https://user-images.githubusercontent.com/31458531/206143651-a24271ad-18a7-43b8-8cd7-392295774863.png)

~Jack Herrington: If you are jumping to React.memo() becoz you put a console.log in your component and you see like wooooahhh this is getting called all the time, DON'T worry about it becoz at the end of the day if it doesn't make a dom change then then the price isn't all that high of calling that function over and over again.

**5 things wrapped up:**
- React memo is not memoization in traditional sense
- Train your mind that memo as "render if props have chagned".
- useCallback and useMemo are for referential integrity and inparticular: referential integrity of array, objects, and functions.
- Use useMemo when you're the calcuation you're doing is compuatationally expensive.
- Re-rendering in react is not a terrible thing, react was build to manage that. As reconciliation is magic that checks for the diff of vdom and dom and make changes to dom as required.


## Memoization

Source: [Mastering React Memo ~ Jack Herrington](https://www.youtube.com/watch?v=DEPwA3mv_R8)

Learn:
- Memoization in react is about prevProps and currentProps comparing when the parent component is re-rendered, whereas the general definition of memoize (from wikipedia) it functions like below i.e, it stores key->value pairs according to the params passed to the memoed version of the function.
- So summing up: React.memo is not actually memoization but actualy React.render() if the props have changed.

![image](https://user-images.githubusercontent.com/31458531/206140714-b36232c3-6b08-41cc-b4c4-03d37701ca7a.png)


## Async code-splitting with react - Jack Herrington

**Source: [Code Splitting Made Simple ~ Jack Herrington](https://www.youtube.com/watch?v=7kNLXE0hixM)**

- Load data, functions (both as default named exports)
- Learned how to name your chunks (this helps in caching so that when app wants to load the component again the browser just loads it from cache and not fetch from server again)
- All above with three different ways: 1. manually, 2. Suspense+React.lazy() {this is not workable with react server side}, 3. Loadable components (works good with server side as well)
- Learned to load compoents asynchronously from default and named exports
- Learned module federation functionality to share code between applications

## Myth breaking ~Sahil

Changing the `count` state does **not** unmount the `About` component. *Tested by using the useEffect's return function.*

```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <About count={count} />
    </div>
    )
}
```

## `react-router-dom` v5, what does `replace=true` prop does?

Source: [Docs @ MDN](https://developer.mozilla.org/en-US/docs/Web/API/History_API), [react-router-dom v5 Docs](https://v5.reactrouter.com/web/api/Link/replace-bool)

It replaces the current page in history to desired page so it will provide experience like: Page1 > Page2 (using replace=true to navigate to page3) > Page3. Now if you press back button in browser then you get back to Page1 instead of Page2 becoz you replaced history object.

![image](https://user-images.githubusercontent.com/31458531/205686222-803a20e2-b71d-41ba-b543-be093dbd85d4.png)


## Learn Nested Routing, react-router-dom v6

1. `index.tsx`

```jsx
<BrowserRouter>
	<App />
</BrowserRouter>
```

2. `app.tsx`

```jsx
const topLevelRedirectPath = '/home'; // TODO: Base this on whether or not user is signed in

<Routes>
	{/* Top level redirect */}
	<Route path="/" element={<Navigate to={topLevelRedirectPath} replace />} />

	{/* Unauthenticated routes */}
	<Route path="/sign-in" element={<SignIn />} />
	<Route path="/onboarding/*" element={<Onboarding />} />
	
	{/* Authenticated routes */}
	<Route path="/home" element={<Home />} />
	<Route path="/dating/*" element={<Dating />} />
</Routes>
```

3. `Dating.tsx` (Last Route of "Authenticated routes")

**Point:**
	- <UnauthenticatedPageWrapper /> component provides a layout to the content of page <NotFound/> component in last Route.

```jsx
<Routes>
	<Route path="/" element={<Navigate to="setup" replace />} />
	<Route path="/welcome" element={<DatingWelcome />} />
	<Route path="/setup/*" element={<DatingSetup />} />
	<Route path="*" element={<UnauthenticatedPageWrapper><NotFound /></UnauthenticatedPageWrapper>} />
</Routes>
```


## react-router-dom v6

<Route /> Component has no `component` and `render` as we had in `react-router-dom@5` as you can see the type Route object type here: [Click here](https://reactrouter.com/en/main/route/route#type-declaration).

## Learn `render` vs. `component` props in `<Route />` component `react-router-dom`

**My awesome codesandbox Link: [Click here](https://codesandbox.io/p/sandbox/vigorous-artem-ce7zhk?utm_source=dotnew&file=%2Fsrc%2FApp.tsx&selection=%5B%7B%22endColumn%22%3A64%2C%22endLineNumber%22%3A5%2C%22startColumn%22%3A64%2C%22startLineNumber%22%3A5%7D%5D)**

**tldr:**

Snippet from above codesandbox link, **the component `Users` is not going to unmount when we are changing the `count` state (using `render`) but `About` component does unmount on each `count` state change thus creating unnecessary unmouns (using `component`).** ALSO: Both `render` and `component` way of using pass updated props successfully to them on count `state` change.

```jsx
<Switch>
        <Route path="/about" component={() => <About count={count} />} />
        <Route
          path="/users"
          render={(routeProps) => <Users {...routeProps} count={count} />}
        />
</Switch>
```

## Tanstack router amazing

[Click here](https://youtu.be/LVzG3nncE4M)

## Make useContext fast

Source: [Click here](https://www.youtube.com/watch?v=ZKlXqrcBx88) @ youtube **by Jack Herrington**

Github Repo: [Click here](https://github.com/jherr/fast-react-context), It also forked in my repos as well for longetivity.

Interesting thing by a commentor on above video: ![image](https://user-images.githubusercontent.com/31458531/200572888-35b06841-0060-4d71-8b35-9bd8dffb9233.png)



## `use` hook in react `experimental` version

[Click here](https://www.youtube.com/watch?v=ytXM05PVcFU)

## Amazing html attributes you would never know oterwise

https://twitter.com/Prathkum/status/1588943218707779584

## Learn about cnd cache headers

https://twitter.com/BHolmesDev/status/1588168499507216384

## How `Object.defineProperty` works?

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

```js
let c = {}
// assigns `c.a = 2`
Object.defineProperty(c, 'a', {value: 2})
```

## This is the best debugging technique to debug values of react components on earth

![image](https://user-images.githubusercontent.com/31458531/196185318-3cc804ea-c763-4884-8149-896a425f7b61.png)

or attach anyother function/object to window:

![image](https://user-images.githubusercontent.com/31458531/195896948-17564f04-9958-4edd-b6fc-5410d256b695.png)

## css intellisence in vscode for all attached files

Source: https://stackoverflow.com/a/49167878/10012446

## Can we give `name` attribute to all html elements and get the property vaulue via `e.target.name`?

No, `name` attribute only applies to a list of elements i.e, button, fieldset, form, iframe, input, map, meta, object, output, param, select, textarea. So you can see `div` and `span` are **not** in this list. Source: [Click here](https://www.w3schools.com/tags/att_name.asp).

Why the question is important? Sometimes in react components people use name property to set input values and other values to store in state via a generic dynamic `name` based properties for respecitve values from the user and I THINK ITS NOT OPTIMAL TO USE THAT INSTEAD I SUGGEST TO USE some functin generator like passing to `onChange={() => setField('filedIdentifierName')}` as prop. THAT ROCSK EVERYWHERE AND QUITE READABLE TO EVERYONE.

## Using context with typescript

**UPDATE:** Using immer tip `appData.trades.splice(0)` to delete all items from the array. Source: [Click here](https://immerjs.github.io/immer/update-patterns/) to know more array mutations with immerjs.

You may find its implementations in following project codes:
- `totel-latest` project in `reference-projects` repository.
- `decentralized-exchange` client app as well(nextjs-typescript).

```tsx
import {createContext, useContext, useEffect, useState, ReactNode} from 'react'
import produce from 'immer'
const AppDataContext = createContext<any>({loading: true})

export const useAppData = () => useContext(AppDataContext)

interface Props {
	children?: ReactNode
	// any props that come into the component
}
type AppData = any

type cbT = (appData: AppData) => void

export function AppDataProvider({children}: Props) {
	const _state = useState<AppData>({})
	const [appData, setAppData] = _state
	const setAppDataImmer = (cb: cbT) => setAppData((data: any) => produce(data, cb))

	useEffect(() => {
		async function onPageLoad() {}
		onPageLoad()
	}, [])

	// NOTE: you *might* need to memoize this value
	// Learn more in http://kcd.im/optimize-context
	return <AppDataContext.Provider value={[appData, setAppDataImmer]}> {children} </AppDataContext.Provider>
}
```

## TODO: Make your own IDE in your website

Amazing articel: https://www.joshwcomeau.com/react/next-level-playground/

## should I use memo() ?

You should try moving the code up in the tree first and that can solve issues where you need to fix using `memo()`.

## Amazing Explanation of react-router v6.4

Best explanation of this router(**beats the official docs video as well**): [Click here](https://www.youtube.com/watch?v=L2kzUg6IzxM)

## useAxios - a very lovely hook

- Inspiration: https://github.com/axios/axios/blob/main/ECOSYSTEM.md
- Usage Example: [`with-msw-and-useAxios`](./with-msw-and-useAxios)


## msw

- Github: [msw](https://github.com/mswjs/examples)
- Usage Example: [`with-msw-and-useAxios`](./with-msw-and-useAxios)
- Official Examples: [Click here](https://github.com/mswjs/examples)

![image](https://user-images.githubusercontent.com/31458531/190871378-704c97d0-4e5e-4b2b-8766-6c0509f9cd34.png)


## Animate things easily:

- [Autoanimate](https://auto-animate.formkit.com/), [@Github](https://github.com/formkit/auto-animate) 5.2k* - Source: t3: https://youtu.be/V8-z891_DN4
- https://github.com/framer/motion - Also has a web tool for building awesome prototypes, for example [visit here](https://github.com/framer/motion).

## mdx with react

Source: [Amzing react conf video](https://youtu.be/zL8cz2W0z34?list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa)

![image](https://user-images.githubusercontent.com/31458531/189496294-d6c6930e-86e7-481a-a7ad-8e26aa8bbccf.png)

![image](https://user-images.githubusercontent.com/31458531/189496300-0975cf84-47db-45bd-9343-da16b4410f78.png)


## Online IDE's for react

![image](https://user-images.githubusercontent.com/31458531/189416199-6e35e585-d10f-4496-8d38-f578c554c162.png)


## Render static html on server using `createElement` api

```js
const ReactDOMServer = require("react-dom/server");
const react = require("react");

const A = react.createElement(
  "div",
  {
    car: "merces",
  },
  null
);

const MyElement = react.createElement(
  "div",
  {
    foo: "bar",
  },
  A
);

const data = ReactDOMServer.renderToStaticMarkup(MyElement);

console.log("my generated html:", data);
```

## Create popups with `Popper` in react (vanilla pop up)

Source: [w3schools](https://www.w3schools.com/howto/howto_js_popup_form.asp)

```jsx
import {useState} from 'react'
export default function Test() {
	const [isOpen, setIsOpen] = useState(false)
	const togglePopup = () => setIsOpen(!isOpen)
	return (
		<div>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum doloribus, saepe distinctio modi explicabo magni veritatis dignissimos itaque ex at aperiam facere reprehenderit obcaecati aut soluta earum laudantium ullam! Voluptatem doloremque quia animi tempora dolor cum quisquam quod. Quibusdam soluta fugit, delectus laudantium eveniet tenetur a reprehenderit rerum ex dolorem reiciendis ad ipsam aperiam neque accusantium omnis labore nulla cumque totam dolor minus ipsa sequi nisi necessitatibus. Eaque provident perspiciatis debitis rem hic quo unde ut beatae officiis? Cumque impedit velit doloremque cum necessitatibus, ipsam at sunt ipsa et quidem! Quam quibusdam error facere autem est blanditiis, laudantium delectus accusantium aliquam rem quos accusamus, quo fugiat? Reprehenderit quisquam illum ratione? Ea exercitationem perspiciatis debitis doloribus similique a illo tempore officiis soluta, et totam laborum excepturi ipsam nostrum ducimus quibusdam esse tenetur dolorum
			temporibus architecto ex animi aliquid eos. Eius, reprehenderit! Reprehenderit dolorem dolore repellat similique quisquam quia natus exercitationem, eaque iure consectetur incidunt enim cupiditate beatae sit! Voluptatem vel ipsam error harum. Expedita quod molestias, sapiente delectus saepe reprehenderit dicta quaerat iusto accusantium laboriosam sit quisquam animi impedit natus recusandae aut assumenda vel adipisci illo eum deserunt labore. Fuga quia fugiat nulla voluptas rerum unde dolorem, repellendus voluptatum velit facere omnis consequatur cum saepe debitis reiciendis ex adipisci cupiditate recusandae blanditiis ipsa. Optio, atque sunt recusandae, libero pariatur dolores repellat et laboriosam vel aliquam excepturi. Fuga sint modi commodi ipsum aut. Dolorum, debitis delectus consectetur, tempore ad necessitatibus iure hic aut tempora, voluptatum fugiat ratione rem deserunt. Velit ipsam unde quod expedita, non vel voluptate voluptatem sint quas libero laudantium maiores eum
			impedit facilis? Mollitia dolores a eum, fuga corrupti minus quae numquam qui provident animi vero sapiente veritatis placeat! Quidem magni voluptatibus reiciendis fugiat? Blanditiis nulla odit neque animi eligendi ipsum fugit illo quam nisi dolores, debitis impedit iure?
			{/* <Login /> */}
			<button className='btn' onClick={togglePopup}>
				{isOpen ? 'Close Popup' : 'Open Popup'}
			</button>
			<Popper isOpen={isOpen} >
				<Popup1 controls={[isOpen, setIsOpen]} />
			</Popper>
		</div>
	)
}
export const Popup1 = ({controls}) => {
	const [isOpen, setIsOpen] = controls
	const closePopup = () => setIsOpen(false)
	return (
		<>
			<div className='heading'>Los Angles</div>
			<div>This is popup</div>
			<div>This is popup</div>
			<div>This is popup</div>
			<div>This is popup</div>
			<br />
			<button className='btn' onClick={closePopup}>
				Close popup
			</button>
		</>
	)
}
export const Popper = ({children, isOpen}) => {
	return (
		<div className='popper__default'>
			<div className={`popup__container ${isOpen ? 'show' : ''}`}>
				<div className={`popup__contents `}>{children}</div>
			</div>
		</div>
	)
}
```

```scss
// scss
.popper__default {
	.popup__container {
		border: 2px solid green;
		display: none;
		position: fixed;
		inset: 0;
		// change the end % to change the transparency of the background drop shadow
		background: rgb(128 128 128 / 51%);

		.popup__contents {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;

			box-shadow: 0 0px 30px 2px grey;
			border-radius: 20px;
			max-width: 500px;
			min-height: 600px;
			padding: 20px 50px;
			margin: auto;
			margin-top: 100px;
			background: white;

			.heading {
				font-size: 3rem;
			}
		}
		&.show {
			display: block;
		}
	}
}
.btn {
	padding: 20px;
	color: white;
	background: deepskyblue;
	outline: none;
	border-radius: 15px;
}
```

Output:

![image](https://user-images.githubusercontent.com/31458531/187991294-5523ba63-4b25-495c-b613-74f0b0bef557.png)


## YO! We can run multiple debugger i.e,. frontend and backend

FYI: With `nextjs` the only nodejs debugger debugs both frontend and backed breakpoints well, yo.

![image](https://user-images.githubusercontent.com/31458531/185749877-762ee0e5-583b-4993-9acf-95c02ea3f3cc.png)


## react-query is companies standard now

Date: 20 Aug, 2022, Souce: https://npmtrends.com/react-query

![image](https://user-images.githubusercontent.com/31458531/185748459-b5d07422-df5b-4254-9aad-0c3e893c542b.png)


## Use vscode debugger to get the return value of a component

FYI: This should be done under parental advice only coz it produces no use at all. :LOL:

![image](https://user-images.githubusercontent.com/31458531/185740538-92dd74a7-6582-406a-960d-eab52ce4e5d5.png)


## Use npm trends for comparing npm packages

https://npmtrends.com/react-async-vs-react-query-vs-zustand

## TODO: Try immer or jotai for next project

https://github.com/pmndrs/zustand

https://github.com/pmndrs/jotai

## immer with existing setState hooks (run with existing code base with existing setState api)

```js
import produce from 'immer'

// source: https://github.com/sahilrajput03/learn-react/blob/main/warikoo-time-manager/src/App.js
const [_, setData] = useData()
const setDataImmer = (cb) => {
	setData((data) => produce(data, cb))
}
const onClickUrgent = () => {
	setDataImmer((data) => void (data.todos[idx].urgent = !data.todos[idx].urgent))
}
```

## React tracked with immer (prefer jotai though, its much popular and devleoped on github right now)

**Directly using useImmer hook? Refer this reply from Daishi: [Click here](https://github.com/dai-shi/react-tracked/issues/135#issuecomment-1016978979)**

https://react-tracked.js.org/docs/tutorial-03/

Linked codesandbox of final project @ https://codesandbox.io/s/infallible-firefly-yzwxc

## An amazing way to make single handler for all the event handlers in your component

[Source](https://www.youtube.com/watch?v=b0IZo2Aho9Y&t=29s) You may use switch:case in handler to make it easy for you:

![image](https://user-images.githubusercontent.com/31458531/183349804-825d51ad-197a-4184-b65c-1e44a567b8c4.png)

## Exported components to their own folders and now its hard to code in files with tab names as index.js in vscode

[Source](https://www.youtube.com/watch?v=b0IZo2Aho9Y&t=29s) So, do that and do all exports from inside the `NavBar.js` file only:

![image](https://user-images.githubusercontent.com/31458531/183349204-b6eec074-2760-4823-986f-e477c4abbf37.png)


## Starting debugger in existing chrome window (rather than opening new bulky chrome window on start of each debugging session) 

[Source1](https://stackoverflow.com/a/68065752/10012446), [Source2](https://www.freecodecamp.org/news/how-to-set-up-the-debugger-for-chrome-extension-in-visual-studio-code-c0b3e5937c01/)

We need to have a chrome running with debugging on i.e, we can do it via: (*use your alias i.e., `chrome-debug`*) `google-chrome-stable --remote-debugging-port=9222` and we can create a `Chrome:Attach` debugger configuration via:

![image](https://user-images.githubusercontent.com/31458531/183285633-76eb38f7-6b7f-4bdc-9fb2-dfd6222fe118.png)

![image](https://user-images.githubusercontent.com/31458531/183285649-29eea803-7c07-4ae7-8aa4-0f476c6326de.png)

![image](https://user-images.githubusercontent.com/31458531/183285668-03ef7717-92f3-474f-99b3-1f2a6c172c64.png)

## For reference to fullstack solutions: Please refer @ https://github.com/sahilrajput03/fullstackopen

Merged repos:

- `absolute-path-cra`
- react-app as `template-js-vite` directory
- `simple_service_worker`
- `react-markdown-serve-markedjs`
- `react-vite` as `my-react-vite-app` directory
- `react-sass-love`
- `react-fast-refresh-boilerplate`
- `react-naked` as `react-via-cdn`
- `snowpack-react-boilerplate/`
- `deno-aleph-react-framework`
- `GistsFetchingFromGithubRandom_react-router-dom`
- `hackerrank-sorting-react-test`
- React-query: [Gist](https://gist.github.com/sahilrajput03/c870bee7bbc40cf303abc72cc245d14e)

## Other react articles

- Read how to work with react-routerv6: [Ultimate React Router v6 Guide ~ Kyle](https://blog.webdevsimplified.com/2022-07/react-router/)
- Food ordering App - [Click here](https://dev.to/myogeshchavan97/build-a-complete-food-ordering-app-using-react-redux-along-with-stripe-payment-integration-1k61) and [Other Articles and projects](https://dev.to/myogeshchavan97)
- Hide project soure code in browser - [Click here](https://dev.to/myogeshchavan97/how-to-hide-your-react-source-code-from-getting-displayed-in-chrome-dev-tools-when-deployed-to-production-41j7)

## Usefult react libraries

- ***From [sahilrajput03/decode-buildonscenes.com](https://github.com/sahilrajput03/decode-buildonscenes.com)**(60lpa dev):*  **
  - swiper: [swiper](https://www.npmjs.com/package/swiper), [Docs](https://swiperjs.com/) - 35k* (also used in slasher project)
  - emojipicker (emoji-picker-react): https://github.com/ealush/emoji-picker-react
  - shifty (animation library): https://github.com/jeremyckahn/shifty
  - jsfiledownloader: https://github.com/AleeeKoi/js-file-downloader		LEARN: (helpful to download files in browser with progress indication as well)
  - redux-saga:(22.2k*) https://github.com/redux-saga/redux-saga, getting-started: https://redux-saga.js.org/docs/introduction/GettingStarted
  - redux-persist(12.2k*): https://github.com/rt2zz/redux-persist
  - react-paginate(2.3k*): https://github.com/AdeleD/react-paginate
  - react-toastify(9.3k*): https://github.com/fkhadra/react-toastify, playground: https://fkhadra.github.io/react-toastify/introduction/
  - react-initial(5*): https://github.com/brunocarvalhodearaujo/react-initial, playground: https://brunocarvalhodearaujo.github.io/react-initial/
  - redux-thunk(17.2k*)<direct-from-Dan-Abramov>: https://github.com/reduxjs/redux-thunk
  - @headlessui/react(15.6k*) : https://github.com/tailwindlabs/headlessui, 
- About
    - @headlessui/react (https://headlessui.com) : Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.
- over-the-head:
  - flatted: https://github.com/WebReflection/flatted
  - [react-google-recaptcha](https://github.com/dozoisch/react-google-recaptcha), [recpatcha-google-v2](https://developers.google.com/recaptcha/docs/display) (used in slasher)

```js
// src: https://github.com/WebReflection/flatted
const {parse, stringify, toJSON, fromJSON} = require('flatted');
let log = console.log

const a = [{}];
log('1', a) // 1 [ {} ]

a[0].a = a;
log('2', a) // 2 <ref *1> [ { a: [Circular *1] } ]

a.push(a);
log('3', a) // 3 <ref *1> [ { a: [Circular *1] }, [Circular *1] ]

// log('natural stringify:', JSON.stringify(a)), throws error i.e., TypeError: Converting circular structure to JSON

log('4', stringify(a)); // [["1","0"],{"a":"0"}]
//~sahil: 4 [["1","0"],{"a":"0"}]
```

## more....

#### - Developing multiple react projects in single react project:

![image](https://user-images.githubusercontent.com/31458531/177572784-5f50ed9e-0d43-4105-8e9c-894b456072ab.png)

#### - Implementing immer with a reducer is so easy [for codesandbox link -> click here](https://codesandbox.io/s/reducer-made-amazing-immerjs-b3tgy?file=/src/SingleCounterImmer/context.js:34-95):

![image](https://user-images.githubusercontent.com/31458531/177575494-8bc579a7-8247-4619-8887-827a250e5bb8.png)
  
#### - Use native browser history api instead of react-routed-dom api everytime

```jsx
const history = (path) => window.history.pushState('', '', path)

const jsx = () => {
	return (
		<div>
			<button
				onClick={() => {
					history('/boom')
				}}
			>
				Click me to go to /boom
			</button>

			<button
				onClick={() => {
					history('/bamm')
				}}
			>
				Click me to go to /bamm
			</button>
		</div>
	)
}
```

#### - React eslint + prettier settings

1. Ensure that `package.json` file has below content:

```json
{
	"eslintConfig": {
		"extends": ["react-app", "react-app/jest"]
	}
}
```

2. Use below commands to install some dependencies, add `.eslintrc.js`, `.prettierrc.js` and `.prettierignore` in a CRA project's root directory:

```bash
npm i -D eslint-config-prettier eslint-plugin-prettier
curl -O https://raw.githubusercontent.com/sahilrajput03/my_bin/master/files/eslint-config-react/.eslintrc.js
curl -O https://raw.githubusercontent.com/sahilrajput03/my_bin/master/files/.prettierrc.js
curl -O https://raw.githubusercontent.com/sahilrajput03/my_bin/master/files/.prettierignore
npm set-script prettier-write "prettier --write ."
npm run prettier-write
```

Thats all it takes and don't forget to restart your react server.

#### - Debugging made easy in vscode itself (src: CRA documentation

Source: https://create-react-app.dev/docs/setting-up-your-editor/#visual-studio-code

#### Simple way to define way of `onMount` functions in react components

![image](https://user-images.githubusercontent.com/31458531/183052708-216bc575-f02a-4af9-a2b1-e1baeab36457.png)

