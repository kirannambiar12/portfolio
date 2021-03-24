import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import pageNotFound from "../assets/images/404.gif"


const Wrapper = styled.section`
  font-family: "Roboto", sans-serif;
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

    @media (max-width: 600px) {
      width: 90%;
    }
  }

  p {
    text-align: center;
    font-size: 30px;
    color: white;
    display: inline-block;
    vertical-align: middle;
  }

  button {
    background-color: #D50000;
    border-color: #ff0000;
    color: white;
    margin: auto;
    display: block;
    width: 100%;
    max-width: 200px;
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

  .page-not-found-gif {
    width: 100%;
    max-width: 400px;
    display: block;
  }

  .not-found-text {
    position: relative;
    top: -100px;
    @media (max-width: 600px) {
      top: -50px;
    }
  }
`;

const NotFound = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="notfound">
            <img className="mx-auto page-not-found-gif" src={pageNotFound} alt=""/>
            <div className="not-found-text">
            <p className="mb-5 mx-auto d-block">The page you are looking for can't be found.</p>
            <Link to='/'>
            <button>Go Back Home</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NotFound;
