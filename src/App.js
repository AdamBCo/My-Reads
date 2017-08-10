import React from 'react'
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'

import BookSearch from './BookSearch';
import BookList from './BookList';

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  moveBook = (book, shelf) => {

    let {books} = this.state;
    books = books.filter(b => b.id !== book.id)

    if (shelf !== "none") {
      books = books.concat([book])
    }

    BooksAPI.update(book, shelf).then((results) => {

      this.setState((state) => ({
        books
      }))
    })
  }

  render() {

    const {books} = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <BookList
              books={books}
              moveBook={this.moveBook} />)}/>
        <Route exact path="/search" render={({history}) => (
            <BookSearch
              books={books}
              moveBook={(book, section) => {
              this.moveBook(book, section)
            }} />)} />
      </div>
    )

  }
}

export default BooksApp
