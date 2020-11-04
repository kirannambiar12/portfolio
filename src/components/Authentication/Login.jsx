import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { useToasts } from "react-toast-notifications";

const Wrapper = styled.section`
  .form-input {
    width: 100%;
    max-width: 400px;
  }

  .login-form-section {
    margin-top: 150px;
  }

  .login-heading {
    font-family: "Archivo Black", sans-serif;
    color: red;
    letter-spacing: 2px;
  }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["auth-token"]);
  const { addToast } = useToasts();

  const loginClicked = () => {
    const data = { username, password };
    fetch("https://portfolio-django-backend.herokuapp.com/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(function(res) {
      if (res.status === 200) {
        setToken("auth-token", res);
        window.location.href = "/inbox";
        return res.json();
      } else {
        addToast(
          "Authentication Failed. Please check your username and password.",
          { appearance: "error", autoDismiss: true }
        );
        return res.json();
      }
    });
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="row flex-column justify-center login-form-section">
          <h1 className="d-block mx-auto login-heading mt-5">LOGIN</h1>
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
            <button className="mx-auto mt-5" onClick={loginClicked}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
