import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import notfound from "../assets/images/notfound.jpg";



const Wrapper = styled.section`
  font-family: "Roboto", sans-serif;
  background-image: url(${notfound});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  .notfound {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
  }

  p {
    text-align: center;
    font-size: 50px;
    color: white;
    display: inline-block;
    vertical-align: middle;
  }

  button {
    padding: 15px;
    background-color: #D50000;
    border-color: #ff0000;
    color: white;
    margin: auto;
    display: block;
    width: 100%;
    max-width: 400px;
    outline: none;
    font-size: 20px;
    border-radius: 5px;
  }

  button:hover {
      transform: scale(0.98);
      transition: 500ms ease-in-out;
      background-color: #ff0000;
  }

  a {
      text-decoration: none;
  }
`;

const NotFound = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="notfound">
            <p>The page you are looking for can't be found.</p>
            <Link to='/'>
            <button>Go Back Home</button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NotFound;
