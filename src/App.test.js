/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("can receive a new user and show it on the list", () => {
  act(() => {
    render(<App />);
  });

  const nameInput = screen.getByLabelText("Name");
  const emailInput = screen.getByLabelText("Email");

  act(() => {
    userEvent.click(nameInput);
    userEvent.type(nameInput, "tayyab");
  });

  act(() => {
    userEvent.click(emailInput);
    userEvent.type(emailInput, "tayyabhaseeb5@gmail.com");
  });

  const button = screen.getByRole("button");

  act(() => {
    userEvent.click(button);
  });

  // Use getAllByRole instead of getByRole
  const nameRows = screen.getByRole("cell", { name: "tayyab" });
  const emailRows = screen.getByRole("cell", {
    name: "tayyabhaseeb5@gmail.com",
  });

  // Make assertions based on the length of the arrays
  expect(nameRows).toBeInTheDocument();
  expect(emailRows).toBeInTheDocument();
});

// test run ==> node
// fake browser is created and html is rendered on it ==> screen.
