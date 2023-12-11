import { render } from "@testing-library/react";
import React from "react";

const UserList = ({ userData }) => {
  const renderedUsers = userData.map((obj) => {
    return (
      <tr key={obj.name}>
        <td>{obj.name}</td>
        <td>{obj.email}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid="users">{renderedUsers}</tbody>
    </table>
  );
};

export default UserList;
