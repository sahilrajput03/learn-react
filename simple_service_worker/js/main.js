// Make sure sw are supported
let log = (...input) => console.log('%c debug ', 'background: #222; color: #bada55', ...input)

if ('serviceWorker' in navigator) {
	log('Service Worker supported!')
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('../sw_cached_pages.js')
			// ? or use cache whole site via below sw
			// .register('../sw_cached_whole_site.js')
			.then((reg) => {
				return log('Service Worker: Registered (Pages)')
			})
			.catch((err) => {
				alert('sw registration failed..')
				return log(`Service Worker: Error: ${err}`)
			})
	})
} else {
	alert('sw not supported in browser!')
}
