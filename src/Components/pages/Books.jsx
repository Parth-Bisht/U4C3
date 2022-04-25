import React from "react";
import { useEffect, useState } from "react";
// import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
    display: grid;
    width: 50%;
    grid-template-columns: repeat(2,1fr);
    gap: 20px;
    margin: auto;
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    fetch(`http://localhost:8080/books`)
    .then((res)=>res.json())
    .then((d)=>setData(d))
    .catch((err)=>console.log(err))
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          {data.map((items)=>{
            return <BookCard key={items.id} {...items}/>
          })}
      </Grid>
    </>
  );
};
export default Books;
