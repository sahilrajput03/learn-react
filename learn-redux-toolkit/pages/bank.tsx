import React from 'react'
import type {RootState} from '../app/store'
import {useSelector, useDispatch} from 'react-redux'
import {incrementBank, decrementBank, incrementByAmountBank} from '../app/bankReducer'

export default function Counter() {
	const count = useSelector((state: RootState) => state.bank.value) // `state.bank` bcoz we used `bank` as the state key in the `configureStore` > `reducer` object in `store.ts` file.
	const dispatch = useDispatch()

	return (
		<div>
			<div>
				<button aria-label='Increment value' onClick={() => dispatch(incrementBank())}>
					Increment
				</button>
				<span>{count}</span>
				<button aria-label='Decrement value' onClick={() => dispatch(decrementBank())}>
					Decrement
				</button>
				<button aria-label='Increment by 5' onClick={() => dispatch(incrementByAmountBank(5))}>
					Increment by Amount (5)
				</button>
			</div>
		</div>
	)
}
