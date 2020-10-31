import React from "react";
import { Cookies, useCookies } from "react-cookie";
import styled from "styled-components";


const Wrapper = styled.section`

`;

const Inbox = () => {

  const [token, setToken, deleteToken] = useCookies(["auth-token"]);

  const logout = () => {
    deleteToken(['auth-token'])
  }


  return (
    <Wrapper>
     <h1>Logged In</h1>
     <button onClick={() => logout()}>Logout</button>
    </Wrapper>
  );
};

export default Inbox;
