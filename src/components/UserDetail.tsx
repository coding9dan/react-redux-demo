import React, { useState } from "react";

interface UserInfo {
  users: any;
}

const UserDetail: React.FC<UserInfo> = ({ users }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <h3>Auto-Complete</h3>
      <div>
        <label>Search: </label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <ul>
          {users
            .filter(
              (user: any) =>
                user.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
            )
            .slice(0, 5)
            .map((user: any) => (
              <li key={user.id}>
                <span>{user.name}</span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default UserDetail;
