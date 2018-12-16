import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import getBooks from "../../api/getBooks";
import BookListItem from "../../components/BookListItem";

export class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      paginatedGroup: [],
      pagesCount: 0,
      activePage: 1
    };
  }

  componentDidMount() {
    this.getBooksData();
  }

  getBooksData() {
    getBooks()
      .then(response => {
        const books = response.data;
        const pagesCount = Math.ceil(books.length / 8);
        this.setState({
          books,
          pagesCount,
          paginatedGroup: books.slice(0, 9)
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handlePageNumberClick(num) {
    const rangeStart = (num - 1) * 8;
    const rangeEnd = rangeStart + 8;
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
        <BookListItem
          data={this.state.paginatedGroup}
          editMode={this.props.editMode}
        />
        <Pagination
          aria-label="Page navigation"
          style={{ justifyContent: "center", marginTop: "5px" }}
        >
          <PaginationItem disabled>
            <PaginationLink previous href="#" />
          </PaginationItem>
          {pagesArray}
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}

export default Books;
