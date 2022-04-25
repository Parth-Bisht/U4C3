// import react from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import Books from "../pages/Books";
import { EditBookData } from "../pages/EditBookData";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Navbar } from "../pages/Navbar";
import { SingleBook } from "../pages/SingleBook";
import { RequiredAuth } from "./RequiredAuth";

const Mainroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route
          path="/books"
          element={
            <RequiredAuth>
              <Books />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/books/:id" element={<SingleBook/>}></Route>
        <Route path="/books/:id/edit" element={<EditBookData/>}></Route>

        {/* keep all the routes here  */}
        {/* /books/* route need to be protected */}
      </Routes>
    </>
  );
};
export default Mainroutes;
