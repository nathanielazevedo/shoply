/** @format */

import { render, screen, fireEvent } from "@testing-library/react";
import Items from "./Items";
import rootReducer from "./rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

const store = createStore(rootReducer);

test("renders learn react link", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Items />
        </Provider>
      </MemoryRouter>
    );
 
});
 
// it("clicking login from intro page", function () {
//   const { getByText, getByPlaceholderText } = render(
//     <UserProvider>
//       <Items />
//     </UserProvider>
//   );
//   const login = getByText("Login");
//   fireEvent.click(login);

//   expect(getByPlaceholderText("Username")).toBeInTheDocument();
// });

// it("clicking signup from intro page", function () {
//   const { getByText, getByPlaceholderText } = render(
//     <UserProvider>
//       <Items />
//     </UserProvider>
//   );
//   const signup = getByText("Signup");
//   fireEvent.click(signup);

//   expect(getByPlaceholderText("Username")).toBeInTheDocument();
// });
