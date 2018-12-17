import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const currentData = new Date();
const currentYear = currentData.getFullYear();

const BookForm = props => (
  <Form className="text-left" onSubmit={props.onSubmit}>
    <FormGroup>
      <Label for="bookTitle">Title</Label>
      <Input
        required
        type="text"
        name="title"
        value={props.state.title}
        id="bookTitle"
        placeholder="Enter book title"
        onChange={event => props.onChange("title", event.target.value)}
      />
    </FormGroup>
    <Row form className="text-left">
      <Col md={6}>
        <FormGroup>
          <Label for="categories">Category</Label>
          <Input
            required
            type="select"
            name="category"
            value={props.state.category}
            id="categories"
            onChange={event => props.onChange("category", event.target.value)}
          >
            {props.categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Input>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="authors">Author</Label>
          <Input
            required
            type="select"
            name="author"
            value={props.state.author}
            id="authors"
            onChange={event => props.onChange("author", event.target.value)}
          >
            {props.authors.map(author => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </Input>
        </FormGroup>
      </Col>
    </Row>
    <FormGroup>
      <Label for="description">Description</Label>
      <Input
        required
        type="textarea"
        name="text"
        rows={8}
        value={props.state.description}
        id="description"
        placeholder="Add book Description"
        onChange={event => props.onChange("description", event.target.value)}
      />
    </FormGroup>
    <FormGroup>
      <Label for="isbn">ISBN</Label>
      <Input
        required
        type="text"
        name="isbn"
        value={props.state.isbn}
        id="isbn"
        placeholder="Enter book ISBN"
        onChange={event => props.onChange("isbn", event.target.value)}
      />
    </FormGroup>
    <Row form className="text-left">
      <Col md={6}>
        <FormGroup>
          <Label for="pages">No. of pages</Label>
          <Input
            required
            type="number"
            name="pages"
            value={props.state.pagesNumber}
            id="pages"
            onChange={event =>
              props.onChange("pagesNumber", event.target.value)
            }
          />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="year">Year</Label>
          <Input
            required
            type="number"
            step={1}
            min={1900}
            max={currentYear + 5}
            name="year"
            value={props.state.publishYear}
            id="year"
            onChange={event =>
              props.onChange("publishYear", event.target.value)
            }
          />
        </FormGroup>
      </Col>
    </Row>
    <FormGroup>
      <Label for="pages">Image URL</Label>
      <Input
        required
        type="url"
        name="url"
        value={props.state.image}
        id="url"
        onChange={event => props.onChange("image", event.target.value)}
      />
    </FormGroup>
    <Row>
      <Col md={4} className="d-flex flex-row">
        <Button className="mr-2" color="info">
          {props.action === "add" ? "Save" : "Save Changes"}
        </Button>
        <Button color="secondary" onClick={() => props.history.goBack()}>
          Cancel
        </Button>
      </Col>
    </Row>
  </Form>
);

export default BookForm;
