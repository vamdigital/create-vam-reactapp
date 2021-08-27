import React from "react";
import { fetchUsers, logout } from "../../features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const Users = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users.users);
  const status = useAppSelector((state) => state.users.status);

  const login = () => dispatch(fetchUsers());
  const logOut = () => dispatch(logout());

  return (
    <div>
      <h2>Users Page</h2>
      {!Object.entries(user).length && <button onClick={login}>Login</button>}
      {status === "loading" && <p>Loading user....</p>}
      {status === "success" && <pre>{JSON.stringify(user, null, 2)}</pre>}
      {Object.entries(user).length > 0 && (
        <button onClick={logOut}>Logout</button>
      )}
    </div>
  );
};
