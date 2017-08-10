import React, {Component} from 'react';

class Book extends Component {

  state = {
    shelf: 'none'
  }

  componentDidMount() {

    const {book} = this.props;
    const {shelf} = book;

    if (shelf) {
      this.setState({shelf})
    }

  }

  handleChange = (e) => {
    const {book, moveBook} = this.props;
    const shelf = e.target.value

    book.shelf = shelf

    moveBook(book, shelf)
  }

  render() {

    const {book} = this.props;
    const {shelf} = this.state;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${book.imageLinks.thumbnail})`
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
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.author}</div>
        </div>
      </li>
    )

  }
}

export default Book
