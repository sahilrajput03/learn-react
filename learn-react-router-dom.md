# Learn react-router-dom

- Read how to work with react-routerv6: [Ultimate React Router v6 Guide ~ Kyle](https://blog.webdevsimplified.com/2022-07/react-router/)

## We can assign type for `useParams`

```ts
type Tab = {
  value: 'episodes' | 'posts' | 'edit',
  label: string,
};
type ParamsType = { podcastId: string, tabKey: Tab['value'] };
const { podcastId, tabKey } = useParams<ParamsType>(); // NOTE: We assigned type here
```

## You can not defined types for `useSearchParams` and `searchParams.get`

```ts
// INCORRECT WAY: Because types not allowed for `useSearchParams` and `searchParams.get` at all:
const [searchParams] = useSearchParams<anyTypeHere1>(); // NOTE: anyTypeHere1 will throw typescript error i.e, `expected 0 argument but got 1`
const view = searchParams.get<anyTypeHere2>('view') as ViewSearchParam; // NOTE: anyTypeHere2 will throw typescript error i.e, `expected 0 argument but got 1`

// CORRECT WAY TO SET TYPES FOR `searchParams`:
type ViewSearchParam = 'self' | 'edit' | null;
const [searchParams] = useSearchParams();
const view = searchParams.get<anyTypeHere2>('view') as ViewSearchParam; // NOTE: We assigned type here
```


## `react-router-dom` docs links
- Migrating from v5 to v6 in react-router-dom: [Click here](https://reactrouter.com/en/main/upgrading/v5)

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

## `react-router-dom@6` useSearchParams

Video: [Click here](https://www.youtube.com/watch?v=NIeViuGJpMQ), Docs: [Click here](https://reactrouter.com/en/main/hooks/use-search-params)

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

## Amazing Explanation of react-router v6.4

Best explanation of this router(**beats the official docs video as well**): [Click here](https://www.youtube.com/watch?v=L2kzUg6IzxM)
