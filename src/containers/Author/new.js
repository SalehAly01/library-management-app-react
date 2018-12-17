import React, { Component } from "react";
import addNewAuthor from "../../api/addNewAuthor";
import { history } from "../../components/BrowserRouter";
import AuthorForm from "../../components/Forms/authorForm";

export class AddAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bio: "",
      jobTitle: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitData = this.submitData.bind(this);
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
    addNewAuthor(data)
      .then(response => {
        const authorID = response.data.id;
        history.push(`/author/${authorID}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2 className="text-left h4 mb-4">Add new Author</h2>
        <AuthorForm
          action="add"
          state={this.state}
          history={history}
          onChange={this.onChange}
          onSubmit={this.submitData}
        />
      </div>
    );
  }
}

export default AddAuthor;
