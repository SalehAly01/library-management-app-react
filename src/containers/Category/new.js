import React, { Component } from "react";
import addNewCategory from "../../api/addNewCategory";
import { history } from "../../components/BrowserRouter";
import CategoryForm from "../../components/Forms/categoryForm";

export class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
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
      name: this.state.name
    };
    addNewCategory(data)
      .then(response => {
        const categoryID = response.data.id;
        history.push(`/category/${categoryID}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2 className="text-left h4 mb-4">Add new Category</h2>
        <CategoryForm
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

export default AddCategory;
