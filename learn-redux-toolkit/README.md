# Learn redux-toolkit

## Debugging on cocaine

```js
(window as any).rx = store;
```

![image](https://github.com/sahilrajput03/learn-react/assets/31458531/c66127bc-2d99-434e-a0d7-4a11061b2c67)

![image](https://github.com/sahilrajput03/learn-react/assets/31458531/d1c42b69-a6c4-442b-85c0-fb653bf8cef7)

![image](https://github.com/sahilrajput03/learn-react/assets/31458531/b8367fb6-423a-4505-ac52-f7eed0d238a9)

## Quick Links

- Quick Start Guide - Docs: [Click here](https://redux-toolkit.js.org/tutorials/quick-start)
- `createReducer()` - Docs: [Click here](https://redux-toolkit.js.org/api/createReducer).
- Redux Toolkit - Official Github: [Click here](https://github.com/reduxjs/redux-toolkit)

```ts
import { createAction, createReducer } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const incrementByAmount = createAction<number>('counter/incrementByAmount')

const initialState = { value: 0 } as CounterState

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++
    })
    .addCase(decrement, (state, action) => {
      state.value--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
})
```

- **Looks pretty stable:**

![image](https://user-images.githubusercontent.com/31458531/188593979-7a5b7aa8-4dba-407d-95d6-c1d5869b8cdd.png)

- [Writing Reducers with Immer](https://redux-toolkit.js.org/usage/immer-reducers)


- **Thats how things link in `redux-toolkit`:**

![image](https://user-images.githubusercontent.com/31458531/229863347-c4c889b7-62f1-4868-993c-cbe9139509fc.png)
