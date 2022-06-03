import {useState, useEffect} from 'react'
import {marked} from 'marked'
// import {useQuery} from 'react-query'
import axios from 'axios'

const PREFIX = 'https://raw.githubusercontent.com/sahilrajput03/sahilrajput03/master/'
const getMarkdownFn = (f) => {
	return axios.get(PREFIX + (f || 'README.md')).then((res) => res.data)
}

function App() {
	console.log('path...>>', window.location.pathname)
	const [slug, setSlug] = useState('README.md')
	const [md, setMd] = useState('')

	useEffect(() => {
		console.log('App component mounted..')
		// window.location.pathname // E.g. -  /a
		getMarkdownFn(window.location.pathname.slice(1)).then((md) => setMd(md))
	}, [])

	// console.log('CURRENT SLUG:', slug)
	const __html = marked(md ?? '')

	return (
		<div className='App'>
			<div dangerouslySetInnerHTML={{__html}} />
		</div>
	)
}

export default App

// Debugging:
// <pre>{html}</pre>

// todo: add target="_blank" for all external links.
//
//
// regex testing data stage 1:
// <a href="acroynms.md">Click here</a>
// <a href="https://acroynms.md">Click here</a>
// <a href="http://acroynms.md">Click here</a>
// <a href="httaca">Click here</a>
// href="#"><img alt="Discord" src="

// const markdown = query.data ?? ''
// const __html = marked(markdown).replaceAll(regExp, replaceFn)

// regext testing @ https://regex101.com/
// inspiration: https://stackoverflow.com/a/977294/10012446
// const regExp = /href="(?:(?!http).)+"/g		// STAGE1
// const regExp = /href="(?:(?!http).)+/g		//STAGE2
const regExp = /href="(?:(?!http|."><img).)+"/g

const replaceFn = (found) => {
	// console.log(found)
	// found is like:
	// href="courses-list.md"
	// href="enlightenment.md"
	// href="learn-hindi.md"

	const setSlugGlobal = () => {} // get this fn somehow..

	const k = found.split('"')
	const url = k[0] + PREFIX + k[1] + k[2] + `onclick="() => ${setSlugGlobal()}"`

	return url
}
