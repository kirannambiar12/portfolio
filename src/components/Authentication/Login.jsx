import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useCookies } from "react-cookie";

const Wrapper = styled.section`

  .form-input {
    width: 100%;
    max-width: 400px;
  }

  .login-form-section {
    margin-top: 150px;
  }

  .login-heading {
    font-family: "Archivo Black",sans-serif;
    color: red;
    letter-spacing: 2px;
  }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useCookies(["auth-token"]);

  useEffect(() => {
    if (token["auth-token"]) window.location.href = "/inbox";
  }, [token]);

  const loginClicked = () => {
    const data = { username, password };
    fetch("http://localhost:8000/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => setToken("auth-token", res.token))
      .catch((error) => console.log(error));
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="row mt-5">
          <h1 className="d-block mx-auto login-heading">LOGIN</h1>
        </div>
        <div className="row flex-column justify-center login-form-section">
          <div className="d-flex flex-column w-100">
            <input
              placeholder="Username"
              className="form-input mt-4 mx-auto d-flex px-3"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Password"
              className="form-input mt-4 mx-auto d-flex  px-3"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="mx-auto mt-5" onClick={loginClicked}>SUBMIT</button>
          </div>
          </div>
      </div>
    </Wrapper>
  );
};

export default Login;
