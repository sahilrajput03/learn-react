# Readme

## Important links
- Migrating from v5 to v6 in react-router-dom: [Click here](https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory)

Merged repos:
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

## Others

- Developing multiple react projects in single react project:

![image](https://user-images.githubusercontent.com/31458531/177572784-5f50ed9e-0d43-4105-8e9c-894b456072ab.png)

- Implementing immer with a reducer is so easy [for codesandbox link -> click here](https://codesandbox.io/s/reducer-made-amazing-immerjs-b3tgy?file=/src/SingleCounterImmer/context.js:34-95):

![image](https://user-images.githubusercontent.com/31458531/177575494-8bc579a7-8247-4619-8887-827a250e5bb8.png)
