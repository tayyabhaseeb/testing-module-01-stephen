```
Testing Notes
```

```
Procedure for testing
```

````
.getByRole() ==> RTL Query System
 Role ==> refers to ARIA Role

ARIA ROLES

heading ====> h1 , h2 ,h3 ,......
list ===> ul , li
button ====> button
link ====> a
textbox ======> input, type='text'

 Assertion is provided by  JEST

 expect() ====> assertion
 .toHaveLength() ====> matcher

```Not the best Solution

test("Checking the addUser function is called", () => {
  // Not the best practice
  const argList = [];

  const callBack = (...args) => {
    argList.push(args);
  };

  // Try to render the component
  render(<UserForm addUser={callBack} />);
  // Find the two inputs
  const [name, email] = screen.getAllByRole("textbox");
  // Simulate typing in name
  userEvent.click(name);
  userEvent.keyboard("tayyab");
  //  Simulate typing in email
  userEvent.click(email);
  userEvent.keyboard("tayyabhaseeb5@gmail.com");
  // Find the button
  const button = screen.getByRole("button");
  // Simulate Clicking the button
  userEvent.click(button);
  // Assertion to make sure addUser function is called
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({
    name: "tayyab",
    email: "tayyabhaseeb5@gmail.com",
  });
});

````
