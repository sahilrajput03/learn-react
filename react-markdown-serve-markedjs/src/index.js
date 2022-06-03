import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
// import {QueryClient, QueryClientProvider} from 'react-query'

// <Quer</Quer>yClientProvider client={queryClient}>
// </QueryClientProvider>
// const queryClient = new QueryClient()
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
