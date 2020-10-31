import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useCookies } from "react-cookie";

const Wrapper = styled.section``;

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
      <div>
        <h1>LOGIN</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginClicked}>SUBMIT</button>
      </div>
    </Wrapper>
  );
};

export default Login;
