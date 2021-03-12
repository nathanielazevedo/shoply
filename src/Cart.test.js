/** @format */

import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "./Cart";
import rootReducer from "./rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

const store = createStore(rootReducer);

test("renders learn react link", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <Cart />
      </Provider>
    </MemoryRouter>
  );
});
