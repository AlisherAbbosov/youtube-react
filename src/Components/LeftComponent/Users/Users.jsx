import React from "react";
import "./Users.scss";
import { Link } from "react-router-dom";
import { Context } from "../../../Content/UsersContent";
import { Avatar } from "@mui/material";

const Users = () => {
  const { users, setUsers } = React.useContext(Context);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://reqres.in/api/users");

      const data = await res.json();
      if (data?.data?.length > 0) {
        setUsers([...data?.data]);
      }
    })();
  }, [setUsers]);

  return (
    <div className="users">
      <h2 className="users__title">Subscriptions</h2>
      <ul className="users__list">
        {users.map(user => (
          <Link
            to={"/channel/" + user.id}
            key={user.id}
            className="users__item"
          >
            <Avatar
              className="users__img"
              src={user.avatar}
              alt={`${user.name}'s img`}
              sx={{ width: 26, height: 26 }}
            />
            {`${user.first_name} ${user.last_name}`}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Users;
