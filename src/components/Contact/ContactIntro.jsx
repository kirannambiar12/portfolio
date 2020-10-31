import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  @keyframes zoomout {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  p {
    font-family: "Archivo Black", sans-serif;
    color: white;
    font-size: 80px;
    margin: auto auto auto 100px;
    @media (max-width: 992px) {
      margin: auto;
      text-align: center;
    }
    @media (max-width: 768px) {
      font-size: 10vw;
    }
  }

  span {
    margin-left: 200px;
    font-size: 100px;
    -webkit-text-stroke: 2px red;
    color: black;
    animation: zoomout 2s ease-in-out;
    @media (max-width: 992px) {
      margin: auto;
      text-align: center;
    }
    @media (max-width: 768px) {
      font-size: 14vw;
    }
  }
  span:hover {
    color: red;
    cursor: pointer;
  }

  .contact-me {
    height: 100vh;
  }

  a {
    text-decoration: none;
  }
`;

const ContactIntro = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row contact-me ">
          <p>
            Feel Free to <br />
            <a href="#form">
              <span className="contact"> CONTACT </span>
            </a>
            <br className="d-lg-none" /> me
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactIntro;
