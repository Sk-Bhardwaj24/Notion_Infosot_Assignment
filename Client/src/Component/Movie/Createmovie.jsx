import React from "react";
import Button from "../../Container/Button/Button";
import { useForm } from "../../CoustomHooks/Form";
import styled from "styled-components";
const Form = styled.form`
  background-color: lightgreen;
  width: 500px;
  height: 500px;
  box-sizing: border-box;
  padding: 40px;
  margin: auto;

  margin-top: 50px;
  border-radius: 25px;
  input {
    width: 400px;
    height: 40px;
    font-weight: bold;
    color: black;
  }
`;
function Createmovie() {
  const { loading, formData, handleInputChange, handleSubmit } = useForm({
    movie_Name: "",
    movie_Title: "",
    movie_Rating: "",
    movie_Category: "",
    movie_Price: "",
  });

  const { movie_Name, movie_Title, movie_Rating, movie_Category, movie_Price } =
    formData;

  return (
    <div style={{ marginTop: "150px" }}>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="movie_Name"
          value={movie_Name}
          onChange={handleInputChange}
          placeholder="Movie Name"
        />
        <br />
        <br />
        <input
          type="text"
          name="movie_Title"
          value={movie_Title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <br />
        <br />
        <input
          type="string"
          name="movie_Rating"
          value={movie_Rating}
          onChange={handleInputChange}
          placeholder="Rating"
        />
        <br />
        <br />
        <input
          type="text"
          name="movie_Category"
          value={movie_Category}
          onChange={handleInputChange}
          placeholder="Category"
        />
        <br />
        <br />
        <input
          type="text"
          name="movie_Price"
          value={movie_Price}
          onChange={handleInputChange}
          placeholder="Price"
        />

        <br />
        <br />

        <Button type="submit"> Submit</Button>
      </Form>
      {loading ? <h1>Loading....</h1> : null}
    </div>
  );
}

export default Createmovie;
