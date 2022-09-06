import {configureStore} from '@reduxjs/toolkit'
import {createAction, createReducer} from '@reduxjs/toolkit'

interface BankState {
	value: number
}

export const incrementBank = createAction('bank/increment')
export const decrementBank = createAction('bank/decrement')
export const incrementByAmountBank = createAction<number>('bank/incrementByAmount')

const initialState = {value: 0} as BankState

export default createReducer(initialState, (builder) => {
	builder
		.addCase(incrementBank, (state, action) => {
			state.value++
		})
		.addCase(decrementBank, (state, action) => {
			state.value--
		})
		.addCase(incrementByAmountBank, (state, action) => {
			state.value += action.payload
		})
})
