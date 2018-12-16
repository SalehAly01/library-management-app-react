import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import getCategories from "./api/getCategories";
import "./App.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
import getAuthors from "./api/getAuthors";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      categories: [],
      authors: []
    };
    this.toggleEditStatus = this.toggleEditStatus.bind(this);
  }

  componentDidMount() {
    this.getCategoriesData();
    this.getAuthorsData();
  }

  toggleEditStatus() {
    this.setState({ editMode: !this.state.editMode });
  }

  getCategoriesData() {
    getCategories()
      .then(response => {
        const categories = response.data;
        this.setState({ categories });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getAuthorsData() {
    getAuthors()
      .then(response => {
        const authors = response.data;
        this.setState({ authors });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: "#CCC" }}>
        <Header
          editMode={this.state.editMode}
          toggleEditStatus={this.toggleEditStatus}
        />
        <Container className="bg-light pt-4">
          <Row>
            <Col lg="4" md="4" sm="4">
              <Aside
                data={this.state.categories}
                title="Categories"
                type="category"
              />
              <Aside data={this.state.authors} title="Authors" type="author" />
            </Col>
            <Col lg="8" md="8" sm="4">
              <Main editMode={this.state.editMode} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
