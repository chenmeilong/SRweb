import React from 'react'
import {Home} from './components/Home'
import {BookList} from './components/BookList'
import {TopBook} from './components/TopBook'
import {UsersRating} from './components/UsersRating'

export default function App(){
	return (
	  <div>
		<Home />
		<BookList />
		<TopBook />
		<UsersRating />
	  </div>
	)
  }  