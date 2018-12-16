import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const BookListItem = props => {
  return props.data.map(book => (
    <div className="card d-flex flex-row" key={book.id}>
      <img style={{ height: "10em" }} src={book.image} alt={`${book.title}`} />
      <div className="card-body">
        <div
          className="row"
          style={{ marginLeft: "2px", justifyContent: "space-between" }}
        >
          <Link to={`/book/${book.id}`}>
            <h3
              className="card-title h5"
              style={{
                maxWidth: "525px"
              }}
            >
              {book.title}
            </h3>
          </Link>
          {props.editMode && (
            <Link to={`/book/${book.id}/edit`}>
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
        <p
          style={{
            lineHeight: "1.2em",
            height: "3.6em",
            overflow: "hidden",
            textAlign: "left"
          }}
          className="card-text"
        >
          {book.description}
        </p>
      </div>
    </div>
  ));
};

export default BookListItem;
