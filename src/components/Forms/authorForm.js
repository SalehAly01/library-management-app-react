import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const AuthorForm = props => (
  <Form className="text-left" onSubmit={props.onSubmit}>
    <FormGroup>
      <Label for="authorName">Name</Label>
      <Input
        required
        type="text"
        name="name"
        value={props.state.name}
        id="authorName"
        placeholder="Enter author name"
        onChange={event => props.onChange("name", event.target.value)}
      />
    </FormGroup>
    <FormGroup>
      <Label for="authorJobTitle">Job title</Label>
      <Input
        required
        type="text"
        name="jobTitle"
        value={props.state.jobTitle}
        id="authorJobTitle"
        placeholder="Enter author job title"
        onChange={event => props.onChange("jobTitle", event.target.value)}
      />
    </FormGroup>
    <FormGroup>
      <Label for="bio">Bio</Label>
      <Input
        required
        type="textarea"
        name="text"
        value={props.state.bio}
        id="bio"
        rows={8}
        placeholder="Add author's biography"
        onChange={event => props.onChange("bio", event.target.value)}
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

export default AuthorForm;
