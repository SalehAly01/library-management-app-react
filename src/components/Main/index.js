import React from "react";
import { Switch, Route } from "react-router-dom";
import Books from "../../containers/Books";
import BookDetails from "../../containers/Books/bookDetails";
import AddBook from "../../containers/Books/new";
import EditBook from "../../containers/Books/editBook";
import Author from "../../containers/Author";
import AddAuthor from "../../containers/Author/new";
import EditAuthor from "../../containers/Author/editAuthor";
import Category from "../../containers/Category";
import AddCategory from "../../containers/Category/new";
import EditCategory from "../../containers/Category/editCategory";

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
      <Route exact path="/books/new" component={AddBook} />
      <Route exact path="/book/:id/edit" component={EditBook} />
      <Route
        exact
        path="/author/:id"
        render={() => <Author editMode={props.editMode} />}
      />
      <Route exact path="/authors/new" component={AddAuthor} />
      <Route exact path="/author/:id/edit" component={EditAuthor} />
      <Route
        exact
        path="/category/:id"
        render={() => <Category editMode={props.editMode} />}
      />
      <Route exact path="/categories/new" component={AddCategory} />
      <Route exact path="/category/:id/edit" component={EditCategory} />
    </Switch>
  </main>
);

export default Main;
