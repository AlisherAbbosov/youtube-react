import { Avatar } from "@mui/material";
import React from "react";
import { Context } from "../../../../../Content/UsersContent";
import "./RecommChannel.scss";

const RecommChannel = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://reqres.in/api/users?page=2");

      const data = await res.json();
      if (data?.data?.length > 0) {
        setUsers([...data?.data.splice(3, 6)]);
      }
    })();
  }, []);

  return (
    <div className="recommend">
      <p className="recommend__title">Recommended channel</p>

      <ul className="recommend__list">
        {users.map(user => (
          <li key={user.id} className="recommend__item">
            <Avatar
              className="recommend__users-img"
              src={user.avatar}
              alt={`${user.name}'s img`}
              sx={{ width: 50, height: 50 }}
            />
            {`${user.first_name} ${user.last_name}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommChannel;
