import React, { Component } from "react";
import { history } from "../../components/BrowserRouter";
import AuthorForm from "../../components/Forms/authorForm";
import editAuthor from "../../api/editAuthor";
import getAuthor from "../../api/getAuthor";

export class EditAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bio: "",
      jobTitle: "",
      authorID: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  componentDidMount() {
    const authorID = this.getAuthorID();
    this.setState({ authorID }, this.getAuthorDetails);
  }

  getAuthorID() {
    const firstPart = window.location.pathname.replace("/author/", "");
    return firstPart.replace("/edit", "");
  }

  getAuthorDetails() {
    getAuthor(this.state.authorID)
      .then(response => {
        const authorDetails = response.data;
        this.setState({
          name: authorDetails.name,
          bio: authorDetails.bio,
          jobTitle: authorDetails.jobTitle
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange(title, value) {
    this.setState({ [title]: value });
  }

  submitData(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      bio: this.state.bio,
      jobTitle: this.state.jobTitle
    };
    editAuthor(data, this.state.authorID)
      .then(response => {
        history.push(`/author/${this.state.authorID}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2 className="text-left h4 mb-4">
          Edit Author: &nbsp; {this.state.name}
        </h2>
        <AuthorForm
          action="edit"
          state={this.state}
          history={history}
          onChange={this.onChange}
          onSubmit={this.submitData}
        />
      </div>
    );
  }
}

export default EditAuthor;
