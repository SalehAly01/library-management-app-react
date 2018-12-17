import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import getCategory from "../../api/getCategory";
import BookListItem from "../../components/BookListItem";
export class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryID: "",
      categoryData: [],
      books: [],
      paginatedGroup: [],
      pagesCount: 0,
      activePage: 1
    };
  }

  componentDidMount() {
    this.setCategoryID();
  }

  componentDidUpdate() {
    const pathName = this.getCategoryIdFromAddress();
    if (pathName !== this.state.categoryID) {
      this.setCategoryID();
    }
  }

  setCategoryID() {
    this.setState(
      { categoryID: this.getCategoryIdFromAddress() },
      this.getCategoryData
    );
  }

  getCategoryIdFromAddress() {
    return window.location.pathname.replace("/category/", "");
  }

  getCategoryData() {
    getCategory(this.state.categoryID)
      .then(response => {
        const categoryData = response.data;
        const books = response.data.books;
        const pagesCount = Math.ceil(books.length / 6);
        this.setState({
          books,
          pagesCount,
          paginatedGroup: books.slice(0, 7)
        });

        this.setState({
          categoryData
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
          <h2 className="card-title h4 mr-3">{this.state.categoryData.name}</h2>
          {this.props.editMode && (
            <Link to={`/category/${this.state.categoryData.id}/edit`}>
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

export default Category;
