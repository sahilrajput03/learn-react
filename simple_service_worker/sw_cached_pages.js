// ~ Sahil
//? IMPORTANT: When using *live-server* the browser *_only* installs the Service_Worker (i.e., executes `sw_cached_pages.js` file) when that file is changed.
let log = (...input) => console.log('%c debug ', 'background: #222; color: #bada55', ...input)
log('FILE:sw_cached_page.js ')

const cacheName = 'v1'
const cacheAssets = ['index.html', 'about.html', '/css/style.css', '/js/main.js']

// Call Install Event
self.addEventListener('install', (e) => {
	log('Service Worker: Installed')

	e.waitUntil(
		caches
			.open(cacheName)
			.then((cache) => {
				log('Service Worker: Caching Files')
				cache.addAll(cacheAssets)
			})
			.then(() => self.skipWaiting())
	)
})

// Call Activate Event
self.addEventListener('activate', (e) => {
	log('Service Worker: Activated')
	// Remove unwanted caches
	e.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cache) => {
					if (cache !== cacheName) {
						log('Service Worker: Clearing Old Cache')
						return caches.delete(cache)
					}
				})
			)
		})
	)
})

//? Sahil: We need to be able to fetch our cache files when we are offline, we do that in `fetch` event:
//? This is where we intercept the request form the browser and we can deal with it in any way we want.
// Call Fetch Event
self.addEventListener('fetch', (e) => {
	log('Service Worker: Fetching')
	e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))
})
