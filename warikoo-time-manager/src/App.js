/* eslint-disable no-unused-vars */
import './App.css'
import produce from 'immer'
import {useData} from './context.js'
// For dev
// import {createDb, useSaveToLocalStorage} from './useSaveToLocalStorage'
import {createDb, useSaveToLocalStorage} from 'usesavetolocalstorage'
import React from 'react'

// const initial = {
// 	current: {},
// 	todos: [
// 		{
// 			text: 't1',
// 			asking: 'urgent',
// 			imp: true,
// 			urgent: false,
// 			long: true,
// 		},
// 		{
// 			text: 't2',
// 			asking: 'urgent',
// 			imp: false,
// 			urgent: true,
// 			long: false,
// 		},
// 	],
// }

// ##### DATA SETTER #####
// setData((data) =>
// 	produce(data, (data) => {
//		data.?
// 	})
// )

// Using setup for storing on localstorage
const initial = {current: {}, todos: []}
const db = createDb('db', initial)

export default function App() {
	const [data, setData] = useData(db.data)
	useSaveToLocalStorage(db, data)

	const addTask = () => {
		setData((state) =>
			produce(state, (state) => {
				state.todos.push({})
			})
		)
	}

	return (
		<div>
			<h1>Tasks</h1>
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
			{data.todos?.map((todo, idx) => (
				<Todo key={idx} todo={todo} idx={idx} />
			))}
			<button className='btn-addtask' onClick={addTask}>
				Add new task
			</button>
			{/* {isDefined(data.action) || }
			{data.action === 'add' && <AddTodo action={'Add'} />} */}
		</div>
	)
}

function Todo({todo, idx}) {
	const [_, setData] = useData()
	const setDataImmer = (cb) => {
		setData((data) => produce(data, cb))
	}

	const style = {
		urgent: {background: todo.urgent ? 'orangered' : colorInactive},
		imp: {background: todo.imp ? 'blue' : colorInactive},
		long: {background: todo.long ? 'green' : colorInactive},
	}

	const onClickUrgent = () => {
		setDataImmer((data) => void (data.todos[idx].urgent = !data.todos[idx].urgent))
	}
	const onClickImp = () => {
		setDataImmer((data) => void (data.todos[idx].imp = !data.todos[idx].imp))
	}
	const onClickLong = () => {
		setDataImmer((data) => void (data.todos[idx].long = !data.todos[idx].long))
	}
	const onChange = (e) => {
		setDataImmer((data) => void (data.todos[idx].text = e.target.value))
	}
	const deleteButton = () => {
		setDataImmer((data) => void (data.todos = data.todos.filter((_, i) => i !== idx)))
	}

	return (
		<div className='task-row'>
			<span className='priority noselect' style={style.urgent} onClick={onClickUrgent}>
				Urgent
			</span>{' '}
			<span className='priority noselect' style={style.imp} onClick={onClickImp}>
				Important
			</span>{' '}
			<span className='priority noselect' style={style.long} onClick={onClickLong}>
				Long
			</span>
			<input type='text' onChange={onChange} value={todo.text} placeholder='task name...' />
			<button className='priority noselect color-red' onClick={deleteButton}>
				Delete
			</button>
		</div>
	)
}

const colorInactive = 'grey'
