# Learn redux-toolkit

Source of this project: [Quick Start Guide](https://redux-toolkit.js.org/tutorials/quick-start) @ `redux-toolkit` docs and [`createReducer()`](https://redux-toolkit.js.org/api/createReducer).

[@Github](https://github.com/reduxjs/redux-toolkit)

Api:

- [`createReducer()`](https://redux-toolkit.js.org/api/createReducer)

Source: Above link.

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
