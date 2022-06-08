import React, { useState, useEffect } from "react";
import UserDetail from "./UserDetail";

const UserList: React.FC = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://coding9dan.github.io/api/users.json");
      const json = await res.json();
      setUsers(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-wrap">
      {users.length > 0 && <UserDetail users={users} />}
      {!users.length && <span>No user data!</span>}
    </div>
  );
};

export default UserList;
