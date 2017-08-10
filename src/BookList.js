import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css'

import BookShelf from './BookShelf';

class BooksList extends Component {

  render() {

    const {books, moveBook} = this.props;

    const currentlyReading = books.filter(book => book.shelf === "currentlyReading")
    const wantsToRead = books.filter(book => book.shelf === "wantToRead")
    const read = books.filter(book => book.shelf === "read")

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf title="Currently Reading" books={currentlyReading} moveBook={moveBook} />
          <BookShelf title="Want to Read" books={wantsToRead} moveBook={moveBook} />
          <BookShelf title="Read" books={read} moveBook={moveBook} />
        </div>
        <div className="open-search">
          <Link to="/search">Open</Link>
        </div>
      </div>
    )
  }
}

export default BooksList
