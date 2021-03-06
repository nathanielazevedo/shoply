 
/** @format */

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import rootReducer from "./rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

const store = createStore(rootReducer);

test("renders learn react link", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
 
}); 