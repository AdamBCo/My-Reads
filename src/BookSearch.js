import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'

import Book from './Book';

class BookSearch extends Component {

  state = {
    books: []
  }

  updateQuery = (query) => {

    query.trim()

    BooksAPI.search(query).then(books => {
      console.log(books);

      if (books instanceof Array) {
        this.setState((state) => ({
          books
        }))
      }
    })
  }

  render() {

    const {books} = this.state;
    const {moveBook} = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}>
            </input>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(book => (
              <Book key={book.id} book={book} moveBook={moveBook} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
