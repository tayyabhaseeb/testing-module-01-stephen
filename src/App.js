import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [userData, setUserData] = useState([]);

  const addUser = (user) => {
    setUserData((prev) => [...prev, user]);
  };

  return (
    <div>
      <h1>This is about React Testing </h1>
      <hr />
      <UserForm addUser={addUser} />
      <hr />
      <UserList userData={userData} />
    </div>
  );
}

export default App;
