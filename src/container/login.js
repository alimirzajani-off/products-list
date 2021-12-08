import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Login = (props) => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  let navigate = useNavigate();
  let token = "WFT9KbF8mCoP6cKFWCmfqvs/pU9TUR8IRLOqMgOFpNE=";

  const handleSubmmit = (e) => {
    e.preventDefault();
    localStorage.setItem("token", `${token}`);
    navigate("/product");
  };

  const LOGIN = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    height: 20rem;
    width: 25rem;
    position: absolute;
    top: 30%;
    left: 43rem;
    input {
      border: 0;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    .userName,
    .password {
      margin: 0.5rem;
    }
  `;

  return (
    <LOGIN onSubmit={(e) => handleSubmmit(e)}>
      <div className="userName">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="password">
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={(e) => handleSubmmit(e)} className="btn btn-primary">
        Login
      </button>
    </LOGIN>
  );
};

export default Login;
