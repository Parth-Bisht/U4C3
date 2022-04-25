import { useContext } from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
  const Nav = styled.div`
 padding: 10px;
    background: pink;
    font-weight: 600;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  `;
 
  return (
    <>
      <Nav>
        {/* keep all the NavLinks here */}
       <Link style={{marginLeft:"10px",textDecoration:"none"}} to="/">Home</Link>
       <Link style={{marginLeft:"10px",textDecoration:"none"}} to="/about">About</Link>
       <Link style={{marginLeft:"10px",textDecoration:"none"}} to="/books">Books</Link>
       {token?<Link style={{marginLeft:"10px",textDecoration:"none"}} to="/logout">Logout</Link>:<Link style={{marginLeft:"10px",textDecoration:"none"}} to="/login">Login</Link>}
      </Nav>
    </>
  );
};
