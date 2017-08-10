import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'

import Book from './Book';

class BookSearch extends Component {

  state = {
    results: []
  }

  updateQuery = (query) => {

    query.trim()

    const {books} = this.props;

    BooksAPI.search(query).then(searchResults => {

      if (searchResults instanceof Array) {

        let results = []

        for (let result of searchResults) {
          const book = books.filter(b => b.id === result.id)
          if (book[0]) {
            results.push(book[0])
          } else {
            results.push(result)
          }
        }
        this.setState((state) => ({
          results
        }))
      }
    })
  }

  render() {

    const {results} = this.state;
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
            {results.map(book => (
              <Book key={book.id} book={book} moveBook={moveBook} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
