import React from 'react'
import './App.css'
import 'h8k-components'
import {useState} from 'react'

import Articles from './components/Articles'

const title = 'Sorting Articles'

function App({articles}) {
  const [sortedArticles, setSortedArticles] = useState(() => articles.sort((a, b) => b.upvotes - a.upvotes))
  console.log({articles})
  return (
    <div className='App'>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='layout-row align-items-center justify-content-center my-20 navigation'>
        <label className='form-hint mb-0 text-uppercase font-weight-light'>Sort By</label>
        <button
          onClick={() => {
            setSortedArticles((articles) => {
              articles.sort((a, b) => b.upvotes - a.upvotes)
              return [...articles]
            })
          }}
          data-testid='most-upvoted-link'
          className='small'>
          Most Upvoted
        </button>
        <button
          onClick={() => {
            setSortedArticles((articles) => {
              articles.sort((a, b) => {
                const aDate = new Date(a.date)
                const bDate = new Date(b.date)
                if (aDate > bDate) {
                  return -1
                }
                if (aDate < bDate) {
                  return 1
                }
                return 0
              })
              return [...articles]
            })
          }}
          data-testid='most-recent-link'
          className='small'>
          Most Recent
        </button>
      </div>
      <Articles articles={sortedArticles} />
    </div>
  )
}

export default App
