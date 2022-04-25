// import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

// style for Flex
const Flex = styled.div`
  display:flex;
  width:60%;
  margin:auto;
      margin-bottom: 20px;
`;

// add style for button
export const Button = styled.button`
 
      padding: 10px;
    font-size: 24px;
    width: 20%;
    border-radius: 10px;
    cursor: pointer;
`;
export const SingleBook = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [data,setdata] = useState({})
  // console.log(params);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books/${id}`
    // use useParams to get the id
    fetch(`http://localhost:8080/books/${id}`)
    .then((res)=>res.json())
    .then((d)=>setdata(d))
  }, []);

  const gotoEdit = ()=>{
    navigate("/edit")
  }

  return (
    <>
      {/* added basic data you can add more and make a good UI around it */}
      {!!data && (
        <>
          <Flex>
            <img
              width="50%"
              data-testid="book-image-url"
              src={data.thumbnailUrl}
              alt={data.title}
            />
            <div style={{width:"50%"}}>
              <h2 data-testid="book-title">{data.title}</h2>
              <h3 data-testid="book-isbn">{data.isbn}</h3>
              <p data-testid="book-longdesc">{data.longDescription}</p>
            </div>
          </Flex>
          <Link to={`/books/${data.id}/edit`}>
            <Button onClick={gotoEdit}>Edit</Button>
          </Link>
        </>
      )}
    </>
  );
};
