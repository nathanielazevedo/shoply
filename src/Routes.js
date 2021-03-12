import React from "react";
import { Route, Switch } from "react-router-dom";
import Items from './Items'
import Item from './Item'
import Cart from './Cart'

//Routing with paths. 

function Routes() {
  return (
    <Switch>
      <Route exact path="/products/:id">
        <Item />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/">
        <Items />
        <Cart />
      </Route>
    </Switch>
  );
}

export default Routes;