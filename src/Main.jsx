import React, { createContext, Fragment, useState } from "react";
import Login from "./pages/Login";
import List from "./pages/List";
import Search from "./pages/Search";
import Router from "./Router";
import { Route, Routes } from "react-router-dom";
import NotFind from "./pages/NotFound";
import Header from "./Header";
export const User = createContext();

function Main() {
  const [user, setUser] = useState("");
  // console.log(user);
  return (
    <div>
      <User.Provider value={[user, setUser]}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Search" element={<Search />} />
          <Route
            path="/List"
            element={
              <Fragment>
                <Header />
                <Search /> <List />
              </Fragment>
            }
          />
          {/* <Route path="/List" element={<List />} /> */}
          <Route path="*" element={<NotFind />} />
        </Routes>
      </User.Provider>
    </div>
  );
}

export default Main;
