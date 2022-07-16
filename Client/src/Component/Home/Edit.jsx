import React from "react";
import Button from "../../Container/Button/Button";
import { Updatecontext } from "../../Contexts/Updatecontext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Form = styled.form`
  background-color: lightgreen;
  width: 500px;
  height: 550px;
  box-sizing: border-box;
  padding: 40px;
  margin: auto;
  margin-top: 150px;
  border-radius: 25px;
  input {
    width: 400px;
    height: 40px;
    font-weight: bold;
    color: black;
  }
`;
function Edit() {
  const { updateData } = React.useContext(Updatecontext);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    movie_Name: updateData.movie_Name,
    movie_Title: updateData.movie_Title,
    movie_Rating: updateData.movie_Category,
    movie_Category: updateData.movie_Category,
    movie_Price: updateData.movie_Price,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    updatemovie();
  };
  async function updatemovie() {
    await fetch(
      `https://infoset-backend.herokuapp.com/movie/updatemovie/${updateData._id}`,
      {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        alert("sucessful");
      })
      .catch((error) => alert("Facing Error"))
      .finally(() => navigate("/"));
  }

  const { movie_Name, movie_Title, movie_Rating, movie_Category, movie_Price } =
    formData;

  return (
    <div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {loading ? <h1>Loading....</h1> : null}
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
    </div>
  );
}

export default Edit;
