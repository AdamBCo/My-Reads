import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

class BookShelf extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    moveBook: PropTypes.func.isRequired
  }

  render() {

    const {title, books, moveBook} = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
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

export default BookShelf
