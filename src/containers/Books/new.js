import React, { Component } from "react";
import addNewBook from "../../api/addNewBook";
import { history } from "../../components/BrowserRouter";
import BookForm from "../../components/Forms/bookForm";

export class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (this.props.authors[0]) {
      this.setState({
        author: this.props.authors[0]["id"],
        category: this.props.categories[0]["id"]
      });
    }
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
    addNewBook(data)
      .then(response => {
        const bookID = response.data.id;
        history.push(`/book/${bookID}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2 className="text-left h4 mb-4">Add new Book</h2>
        <BookForm
          action="add"
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

export default AddBook;
