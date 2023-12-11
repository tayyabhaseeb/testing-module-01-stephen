import { useState } from "react";

function UserForm({ addUser }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addUser({ name: userName, email: email });
    setUserName("");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="User name"
          onChange={(e) => setUserName(e.target.value)}
          name="userName"
          value={userName}
          id="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="User Email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
          id="email"
        />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;

//////////////

//////////////////////

// Test 2 (Not the best practice)

// test("Checking the addUser function is called", () => {
//   // Not the best practice
//   const argList = [];

//   const callBack = (...args) => {
//     argList.push(args);
//   };

//   // Try to render the component
//   render(<UserForm addUser={callBack} />);
//   // Find the two inputs
//   const [name, email] = screen.getAllByRole("textbox");
//   // Simulate typing in name
//   userEvent.click(name);
//   userEvent.keyboard("tayyab");
//   //  Simulate typing in email
//   userEvent.click(email);
//   userEvent.keyboard("tayyabhaseeb5@gmail.com");
//   // Find the button
//   const button = screen.getByRole("button");
//   // Simulate Clicking the button
//   userEvent.click(button);
//   // Assertion to make sure addUser function is called
//   expect(argList).toHaveLength(1);
//   expect(argList[0][0]).toEqual({
//     name: "tayyab",
//     email: "tayyabhaseeb5@gmail.com",
//   });
// });

// Best solution with  mock functions
// it doesn't do any thing
// keep the record of arguments and  when it is called
