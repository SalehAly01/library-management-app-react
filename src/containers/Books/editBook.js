import React, { Component } from "react";
import editBook from "../../api/editBook";
import getBook from "../../api/getBook";
import { history } from "../../components/BrowserRouter";
import BookForm from "../../components/Forms/bookForm";

export class EditBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookID: "",
      title: "",
      author: "",
      description: "",
      isbn: "",
      publishYear: 2018,
      pagesNumber: 0,
      image: "",
      category: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  componentDidMount() {
    const bookID = this.getBookID();
    this.setState({ bookID }, this.getBookDetails);
  }

  getBookID() {
    const firstPart = window.location.pathname.replace("/book/", "");
    return firstPart.replace("/edit", "");
  }

  getBookDetails() {
    getBook(this.state.bookID)
      .then(response => {
        const bookDetails = response.data;
        this.setState({
          title: bookDetails.title,
          author: bookDetails.author_id,
          description: bookDetails.description,
          isbn: bookDetails.isbn,
          publishYear: bookDetails.publishYear,
          pagesNumber: bookDetails.pagesNumber,
          image: bookDetails.image,
          category: bookDetails.category_id
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange(title, value) {
    this.setState({ [title]: value });
  }

  submitData(event) {
    event.preventDefault();
    const data = {
      title: this.state.title,
      author_id: this.state.author,
      description: this.state.description,
      isbn: this.state.isbn,
      publishYear: this.state.publishYear,
      pagesNumber: this.state.pagesNumber,
      image: this.state.image,
      category_id: this.state.category
    };
    editBook(data, this.state.bookID)
      .then(response => {
        history.push(`/book/${this.state.bookID}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2 className="text-left h5 mb-4">
          Edit Book: &nbsp; {this.state.title}
        </h2>
        <BookForm
          action="edit"
          state={this.state}
          history={history}
          onChange={this.onChange}
          onSubmit={this.submitData}
          categories={this.props.categories}
          authors={this.props.authors}
        />
      </div>
    );
  }
}

export default EditBook;
