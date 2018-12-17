import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import getAuthor from "../../api/getAuthor";
import BookListItem from "../../components/BookListItem";

export class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorID: "",
      authorData: [],
      books: [],
      paginatedGroup: [],
      pagesCount: 0,
      activePage: 1
    };
  }

  componentDidMount() {
    this.setAuthorID();
    this.props.updateAuthors();
  }

  componentDidUpdate() {
    const pathName = this.getAuthorIdFromAddress();
    if (pathName !== this.state.authorID) {
      this.setAuthorID();
    }
  }

  setAuthorID() {
    this.setState(
      { authorID: this.getAuthorIdFromAddress() },
      this.getAuthorData
    );
  }

  getAuthorIdFromAddress() {
    return window.location.pathname.replace("/author/", "");
  }

  getAuthorData() {
    getAuthor(this.state.authorID)
      .then(response => {
        const authorData = response.data;
        const books = response.data.books;
        const pagesCount = Math.ceil(books.length / 6);
        this.setState({
          books,
          pagesCount,
          paginatedGroup: books.slice(0, 7)
        });

        this.setState({
          authorData
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handlePageNumberClick(num) {
    const rangeStart = (num - 1) * 6;
    const rangeEnd = rangeStart + 6;
    this.setState({
      paginatedGroup: this.state.books.slice(rangeStart, rangeEnd),
      activePage: num
    });
  }

  render() {
    const pagesArray = [];
    for (let page = 1; page <= this.state.pagesCount; page++) {
      pagesArray.push(
        <PaginationItem key={page} active={page === this.state.activePage}>
          <PaginationLink onClick={() => this.handlePageNumberClick(page)}>
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return (
      <div>
        <div className="row" style={{ marginLeft: "2px" }}>
          <h2 className="card-title h4 mr-3">{this.state.authorData.name}</h2>
          {this.props.editMode && (
            <Link to={`/author/${this.state.authorData.id}/edit`}>
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
        <h3 className="h6 text-left">
          --&nbsp;{this.state.authorData.jobTitle}
        </h3>
        <p className="text-left">{this.state.authorData.bio}</p>
        <div className="card-body" />
        <BookListItem
          data={this.state.paginatedGroup}
          editMode={this.props.editMode}
        />
        <Pagination
          aria-label="Page navigation"
          style={{ justifyContent: "center", marginTop: "5px" }}
        >
          <PaginationItem disabled={this.state.activePage === 1}>
            <PaginationLink
              previous
              onClick={() =>
                this.handlePageNumberClick(this.state.activePage - 1)
              }
            />
          </PaginationItem>
          {pagesArray}
          <PaginationItem
            disabled={this.state.activePage === this.state.pagesCount}
          >
            <PaginationLink
              next
              onClick={() =>
                this.handlePageNumberClick(this.state.activePage + 1)
              }
            />
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}

export default Author;
