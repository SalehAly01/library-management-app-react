import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import getAuthor from "../../api/getAuthor";
import getBook from "../../api/getBook";
import getCategory from "../../api/getCategory";

export class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookID: window.location.pathname.replace("/book/", ""),
      bookDetails: [],
      authorName: "",
      categoryName: ""
    };
  }

  componentDidMount() {
    this.getBookDetails();
  }

  getBookDetails() {
    getBook(this.state.bookID)
      .then(response => {
        const bookDetails = response.data;
        this.getAuthorName(bookDetails["author_id"]);
        this.getCategoryName(bookDetails["category_id"]);
        this.setState({
          bookDetails
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getAuthorName(authorID) {
    getAuthor(authorID)
      .then(response => {
        const authorData = response.data;
        this.setState({
          authorName: authorData.name
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getCategoryName(categoryID) {
    getCategory(categoryID)
      .then(response => {
        const categoryData = response.data;
        this.setState({
          categoryName: categoryData.name
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const FieldName = props => (
      <span className="font-weight-bold"> {`${props.name}: `} </span>
    );

    return (
      <div>
        <div className=" d-flex flex-row">
          <div className="col col-lg-9 col-md-8">
            <div className="row" style={{ marginLeft: "2px" }}>
              <h2 className="card-title h5 mr-3">
                {this.state.bookDetails.title}
              </h2>
              {this.props.editMode && (
                <Link to={`/book/${this.state.bookDetails.id}/edit`}>
                  <Button
                    size="sm"
                    color="info"
                    className="rounded mb-2 text-light"
                  >
                    Edit
                  </Button>
                </Link>
              )}
            </div>
            <div className="card-body">
              <p className="text-left">
                <FieldName name="By" />
                <Link to={`/author/${this.state.bookDetails["author_id"]}`}>
                  {this.state.authorName}
                </Link>
                <br />
                <FieldName name="Number of Pages" />
                {this.state.bookDetails.pagesNumber} <br />
                <FieldName name="Publish year" />
                {this.state.bookDetails.publishYear} <br />
                <FieldName name="ISBN" />
                {this.state.bookDetails.isbn} <br />
                <FieldName name="Classification" />
                <Link to={`/category/${this.state.bookDetails["category_id"]}`}>
                  {this.state.categoryName}
                </Link>
              </p>
            </div>
          </div>
          <div className="col col-lg-3 col-md-4">
            <img
              style={{ height: "10em" }}
              src={this.state.bookDetails.image}
              alt={`${this.state.bookDetails.title}`}
            />
          </div>
        </div>
        <p className="card-text">{this.state.bookDetails.description}</p>
      </div>
    );
  }
}

export default BookDetails;
