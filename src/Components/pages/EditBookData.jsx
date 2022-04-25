// import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";

// add style for form
export const Form = styled.form`
`;
// add style for text area
export const Textarea = styled.textarea`
      padding: 13px;
    width: 403px;
    font-size: 19px;
    margin: 10px;
    border: none;
    background: #9bbabd;
`;

export const EditBookData = () => {
  const [imgurl,setImgurl] = useState("");
  const [desc,setDesc] = useState("");
  const navigate = useNavigate();
  const {id} = useParams() ;
  const handleUpdate = (e) => {
    e.preventDefault();
    let obj = {
      thumbnailUrl:imgurl,
      longDescription:desc
    }
    console.log(obj);
    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    // on successfull request navigate to previous page
    fetch(`http://localhost:8080/books/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(obj)
    })
    .then((res)=>{
      if(res.status=="200"){
        navigate(`/books/${id}`)
      }
    })
  };

  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input
        value={imgurl}
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
          onChange={(e) =>setImgurl(e.target.value)}
        />
        <Textarea
        value={desc}
          data-testid="update-form-description"
          placeholder="Update long Description"
          onChange={(e) =>setDesc(e.target.value)}
        />
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  );
};
