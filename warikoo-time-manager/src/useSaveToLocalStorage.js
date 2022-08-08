import {useEffect} from 'react'
import {useDebounce} from 'use-debounce'
import {LowSync, LocalStorage} from 'lowdb'

// Data on localstorage is stored on change of state with a delay of 1 second by default
export const useSaveToLocalStorage = (db, data, delay = 1_000) => {
	const [debouncedData] = useDebounce(data, delay)

	useEffect(() => {
		// console.log('Saving to localstorage:', debouncedData)
		db.data = debouncedData
		db.write()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedData])
}

export const createDb = (name, initial) => {
	const adapter = new LocalStorage(name)
	const db = new LowSync(adapter)
	// Read form local storage
	db.read()
	// Set initial data if no data found in localstorage
	db.data ||= initial
	db.write()

	return db
}
