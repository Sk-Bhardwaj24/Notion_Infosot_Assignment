import React from "react";
import styled from "styled-components";
import Button from "../../Container/Button/Button";
const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-top: 85px;
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
    margin: 20px;
  }
`;
const Registeradmin = () => {
  const [formdata, setFormData] = React.useState({
    a_firstName: "",
    a_lastName: "",
    a_email: "",
    a_password: "",
  });
  const [data, setData] = React.useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createAdmin();
  };
  async function createAdmin() {
    await fetch("https://infoset-backend.herokuapp.com/admin/create", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => alert("Facing issue"));
  }
  const { a_firstName, a_lastName, a_email, a_password } = formdata;
  return (
    <Div>
      <div>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            value={a_firstName}
            name="a_firstName"
            placeholder="First Name"
            required={true}
            onChange={handleChange}
          />
          <input
            type="text"
            value={a_lastName}
            name="a_lastName"
            placeholder="Last Name"
            required={true}
            onChange={handleChange}
          />
          <input
            type="text"
            value={a_email}
            name="a_email"
            placeholder="Email"
            required={true}
            onChange={handleChange}
          />
          <input
            type="text"
            value={a_password}
            name="a_password"
            placeholder="Password"
            required={true}
            onChange={handleChange}
          />
          <Button type="submit">Register</Button>
        </Form>
      </div>
      <div>
        {data.status ? (
          <>
            <h1 style={{ color: "red" }}>Created</h1>
            <h4>
              {data.admin[0].a_firstName + " " + data.admin[0].a_lastName}
            </h4>
            <h4>{data.admin[0].a_email}</h4>
          </>
        ) : null}
      </div>
    </Div>
  );
};

export default Registeradmin;
