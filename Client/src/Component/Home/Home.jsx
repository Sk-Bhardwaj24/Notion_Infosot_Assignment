import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "./Home.module.css";
import { Updatecontext } from "../../Contexts/Updatecontext";
const Button = styled.button`
  margin: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  font-size: large;
  font-weight: 800;
`;
const Div = styled.div`
  margin-left: 44vw;
`;
function Home() {
  const { isAuth } = useSelector((state) => state.isAuth);
  const [data, setData] = React.useState([]);
  const [loading, setIsloading] = React.useState(false);
  const [error, setIserror] = React.useState(false);
  const { handleUpdateData } = React.useContext(Updatecontext);
  React.useEffect(() => {
    setIsloading(true);
    getData();
  }, []);
  async function getData() {
    await fetch("https://infoset-backend.herokuapp.com/movie/")
      .then((res) => res.json())
      .then((res) => setData(res.movie))
      .catch((error) => setIserror(true))
      .finally(() => setIsloading(false));
  }

  const handleDelete = (_id) => {
    setIsloading(true);
    fetch(`https://infoset-backend.herokuapp.com/movie/deletemovie/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => getData())
      .catch((err) => setIserror(true))
      .finally((err) => setIsloading(false));
  };

  return loading ? (
    <Div>
      <h1 style={{ marginLeft: "auto", position: "absolute", top: "50%" }}>
        loading...
      </h1>
    </Div>
  ) : error ? (
    <h1>error... something Went wrong</h1>
  ) : (
    <div>
      <table>
        <thead>
          <tr
            style={{
              position: "sticky",
              top: "80px",
              backgroundColor: "white",
            }}
          >
            <th>sl.no</th>
            <th>Movies Name</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Category </th>
            <th>Price </th>
            {isAuth ? <th>Action</th> : null}
          </tr>
        </thead>
        <tbody>
          {data.map((each, idx) => (
            <tr key={each._id}>
              <td>{idx + 1}</td>
              <td>{each.movie_Name}</td>
              <td>{each.movie_Title}</td>
              <td>{each.movie_Rating}</td>
              <td>{each.movie_Category}</td>
              <td>{each.movie_Price}</td>
              {isAuth ? (
                <td>
                  <Button onClick={(e) => handleDelete(each._id)}>
                    {" "}
                    Delete
                  </Button>{" "}
                  <Button onClick={(e) => handleUpdateData(each)}>Edit</Button>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
//  movie name, Title, rating, Category, Price
export default Home;
