# Readme

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

## Important links
- Migrating from v5 to v6 in react-router-dom: [Click here](https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory)

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

- ***From [sahilrajput03/decode-buildonscenes.com](https://github.com/sahilrajput03/decode-buildonscenes.com)**(60lpa dev):***
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

