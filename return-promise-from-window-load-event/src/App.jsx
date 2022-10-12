import React, {useEffect, useState} from 'react'

function App() {
	useEffect(() => {
		async function main() {
			// WORKS GOOD
			const value = await get1()

			// FAILS: RETURN VALUE IS 'undefined' IN THE ALERT
			// const value = await get2()

			alert('Received:' + value)
		}
		main()
	}, [])

	return <div>Hello world, React.</div>
}

export default App

const get1 = () => {
	return new Promise((resolve, reject) => {
		window.addEventListener('load', async () => {
			resolve('React likes window load events.')
		})
	})
}

const get2 = () => {
	window.addEventListener('load', async () => {
		return 'React likes window load events.'
	})
}
