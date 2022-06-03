# Readme

**Quick Tip**: Use `nrd` to start the dev server as its alias for `npm run dev` on my system.

## React Suspense - uncensored

Finally I think I understood how Suspense works underneath: https://codesandbox.io/s/uncensored-suspense-kvyr0

Even more clearer: https://codesandbox.io/s/uncensored-suspense-2-hot-forked-hdwk6?file=/src/index.js:511-518

Inspiration:https://codesandbox.io/s/frosty-hermann-bztrp , [Docs for Suspense for Data fetching](https://reactjs.org/docs/concurrent-mode-suspense.html).

**What version of react do i need to use Suspense ?**

Ans: **Suspense** was first shipped in v16.6 as mentioned [here](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html) and they said it is good for code splitting and it still isn't recommended to do data fetching but IMO it works fantastic. The basic idea behind thid methodology is to keep the fetching of data outside the component on initial load!! It simply rocks in my opinion!!
