import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const CategoryForm = props => (
  <Form className="text-left" onSubmit={props.onSubmit}>
    <FormGroup>
      <Label for="categoryName">Name</Label>
      <Input
        required
        type="text"
        name="name"
        value={props.state.name}
        id="categoryName"
        placeholder="Enter category name"
        onChange={event => props.onChange("name", event.target.value)}
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

export default CategoryForm;
