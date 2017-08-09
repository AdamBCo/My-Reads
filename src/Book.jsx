import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  handleChange = (e) => {
    const {book, moveBook} = this.props;
    const shelf = e.target.value

    book.shelf = shelf

    moveBook(book, shelf)
  }

  render() {

    const {book} = this.props;
    const {title, author, imageLinks, shelf} = book;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${imageLinks.thumbnail})`
            }}></div>
          <div className="book-shelf-changer" >
              <select onChange={this.handleChange} value={shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    )

  }
}

export default Book
