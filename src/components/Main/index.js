import React from "react";
import { Route, Switch } from "react-router-dom";
import Author from "../../containers/Author";
import EditAuthor from "../../containers/Author/editAuthor";
import AddAuthor from "../../containers/Author/new";
import Books from "../../containers/Books";
import BookDetails from "../../containers/Books/bookDetails";
import EditBook from "../../containers/Books/editBook";
import AddBook from "../../containers/Books/new";
import Category from "../../containers/Category";
import EditCategory from "../../containers/Category/editCategory";
import AddCategory from "../../containers/Category/new";

const Main = props => (
  <main>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Books editMode={props.editMode} />}
      />
      <Route
        exact
        path="/book/:id"
        render={() => <BookDetails editMode={props.editMode} />}
      />
      <Route
        exact
        path="/books/new"
        render={() => (
          <AddBook authors={props.authors} categories={props.categories} />
        )}
      />
      <Route
        exact
        path="/book/:id/edit"
        render={() => (
          <EditBook authors={props.authors} categories={props.categories} />
        )}
      />
      <Route
        exact
        path="/author/:id"
        render={() => (
          <Author
            editMode={props.editMode}
            updateAuthors={props.updateAuthors}
          />
        )}
      />
      <Route exact path="/authors/new" component={AddAuthor} />
      <Route exact path="/author/:id/edit" component={EditAuthor} />
      <Route
        exact
        path="/category/:id"
        render={() => (
          <Category
            editMode={props.editMode}
            updateCategories={props.updateCategories}
          />
        )}
      />
      <Route exact path="/categories/new" component={AddCategory} />
      <Route exact path="/category/:id/edit" component={EditCategory} />
    </Switch>
  </main>
);

export default Main;
