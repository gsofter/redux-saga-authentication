import React from "react";
import { logoutRequest } from "../reducers";
import { useDispatch } from "react-redux";
const MainPage = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutRequest());
  };
  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={logout}> LOGOUT</button>
    </div>
  );
};

export default MainPage;
