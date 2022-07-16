import React from "react";

import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Authorization } from "../../Redux/Actions/actions";

const Ol = styled.ol`
  margin: 0px;
  display: flex;
  background-color: black;
  height: 80px;
  position: fixed;
  top: 0;
  width: 100vw;

  align-items: center;
  list-style: none;
  li {
    margin: 0px 100px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;
const StyleLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.isAuth);
  const handleLogout = () => {
    dispatch(Authorization(false));
    navigate("/");
  };
  return (
    <div>
      <Ol>
        <li>
          <StyleLink to="/">Home</StyleLink>
        </li>
        {isAuth ? null : (
          <li>
            {" "}
            <StyleLink to="/admin">Admin</StyleLink>
          </li>
        )}

        {isAuth ? (
          <>
            <li>
              <StyleLink to="/createMovie">CreateMovie</StyleLink>
            </li>
            <li>
              {" "}
              <StyleLink to="/register">Add Admin</StyleLink>
            </li>

            <li onClick={handleLogout}>Logout</li>
          </>
        ) : null}
      </Ol>
    </div>
  );
}

export default Navbar;
