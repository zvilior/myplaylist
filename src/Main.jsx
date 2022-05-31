import React, { createContext, useState } from "react";
import Login from "./pages/Login";
import List from "./pages/List";
import Search from "./pages/Search";

export const User = createContext();

function Main() {
  const [user, setUser] = useState("");
  console.log(user);
  return (
    <div>
      <User.Provider value={[user, setUser]}>
        <Login />
        <List />
      </User.Provider>
      <Search />
    </div>
  );
}

export default Main;
