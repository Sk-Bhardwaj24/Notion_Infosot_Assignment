import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../Container/Button/Button";
import { useDispatch } from "react-redux";
import { Authorization } from "../../Redux/Actions/actions";
import { useSelector } from "react-redux";

const Div = styled.div`
  display: flex;

  margin: auto;
  justify-content: center;
`;
const Form = styled.form`
  background-color: lightgreen;
  width: 500px;
  height: 500px;
  box-sizing: border-box;
  padding: 40px;
  margin-top: 50px;
  border-radius: 25px;
  input {
    width: 400px;
    height: 40px;
    font-weight: bold;
    color: black;
  }
`;

const P1 = styled.p`
  color: red;
  font-size: 18px;
  font-weight: bold;
`;

const Admin = () => {
  const [formData, setFormData] = React.useState({
    a_email: "",
    a_password: "",
  });
  const [admin, setAdmin] = React.useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.isAuth);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    login();
  };
  function login() {
    fetch("https://infoset-backend.herokuapp.com/admin/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          dispatch(Authorization(true));
        } else {
          setAdmin(false);
        }
      })
      .catch((error) => alert("Facing Error"));
  }
  React.useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);
  const { a_email, a_password } = formData;
  return (
    <div style={{ marginTop: "90px" }}>
      <Div>
        <Form onSubmit={handlesubmit}>
          {admin ? <h2>Login</h2> : <P1>Check your email and password</P1>}
          <input
            type="email"
            value={a_email}
            name="a_email"
            onChange={handleChange}
            placeholder="Enter Email"
          />
          <br />
          <br />
          <input
            type="password"
            value={a_password}
            name="a_password"
            onChange={handleChange}
            placeholder="Enter Password"
          />
          <br />
          <br />
          <Button className="btn" type="submit">
            Login
          </Button>
        </Form>
      </Div>
    </div>
  );
};

export default Admin;
