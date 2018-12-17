import React, { Component } from "react";
import editCategory from "../../api/editCategory";
import getCategory from "../../api/getCategory";
import { history } from "../../components/BrowserRouter";
import CategoryForm from "../../components/Forms/categoryForm";

export class EditCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      categoryID: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  componentDidMount() {
    const categoryID = this.getCategoryID();
    this.setState({ categoryID }, this.getCategoryDetails);
  }

  getCategoryID() {
    const firstPart = window.location.pathname.replace("/category/", "");
    return firstPart.replace("/edit", "");
  }

  getCategoryDetails() {
    getCategory(this.state.categoryID)
      .then(response => {
        this.setState({
          name: response.data.name
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
      name: this.state.name
    };
    editCategory(data, this.state.categoryID)
      .then(response => {
        history.push(`/category/${this.state.categoryID}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2 className="text-left h4 mb-4">
          Edit Category: &nbsp; {this.state.name}
        </h2>
        <CategoryForm
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

export default EditCategory;
