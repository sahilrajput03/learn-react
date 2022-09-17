import {useEffect} from 'react'
import './App.css'
import {axiosInstance, paths, useServer} from './server'

function App() {
	const [{data: dataLogin, loading: loadingLogin, error: errorLogin}, login] = useServer({url: paths.login, method: 'POST'}, {manual: true})

	useEffect(() => {
		axiosInstance.defaults.headers.common['Authorization'] = dataLogin?.authToken
	}, [dataLogin?.authToken])

	// if (loadingLogin) return <p>Logging in...</p> // this is bad way to show loading.. coz it causes the child component to unmount unnecessarily! 100 taka baat!!
	if (errorLogin) return <p>Error in login!</p>

	const loginHandle = () => {
		login({
			data: {
				username: 'sahil',
				password: 'cool',
			},
		})
	}

	return (
		<div className='App'>
			<pre>{JSON.stringify(dataLogin, null, 2)}</pre>
			<br />
			<button onClick={loginHandle}>{loadingLogin ? 'LOADING' : 'Login'}</button>
			<Client1 />
		</div>
	)
}

const Client1 = () => {
	const [{data: dataClient1, loading: loadingClient1, error: errorClient1}, refetch] = useServer({url: paths.clientId + '1'}, {manual: true})

	useEffect(() => {
		return () => {
			alert('unmount..') // idk why this component gets unmounted? and how is this even possible that a component can unmount itself?
		}
	}, [])

	// if (loadingClient1) return <p>Loading client...</p>
	if (errorClient1) return <p>Error client!</p>

	return (
		<div>
			<pre>{JSON.stringify(dataClient1, null, 2)}</pre>
			<button onClick={refetch as any}>{loadingClient1 ? 'LOADING' : 'fetch client'}</button>
		</div>
	)
}

export default App
