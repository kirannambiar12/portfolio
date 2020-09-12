import React from "react";
import styled from "styled-components";
import about from "../../assets/images/about.jpg";
import scroll from "../../assets/images/scroll.png";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  @media (max-width: 768px) { 
  height: unset;
  }

  @keyframes blinkingText {
    0% {
      color: red;
    }
    5% {
        color: black;
    }
    10% {
        color: red;
    }
    15% {
        color: black;
    }
    20% {
      color: red;
    }
    25% {
      color: black;
    }
    30% {
      color: red;
    }
    100% {
      color: red;
    }
  }
  .head-row {
    padding-top: 5%;
  }

  .aboutus-img {
    width: 400px;
    float: right;
    object-fit: cover;
    @media (max-width: 768px) { 
      float: unset;
      display: block;
      margin: 50px auto;
     }
  }

  .left-content {
    display: block;
    max-width: 500px;
  }

  h1 {
    font-family: "Archivo Black", sans-serif;
    font-size: 88px;
    -webkit-text-stroke: 2px red;
    animation: blinkingText 10s infinite;
    @media (max-width: 768px) { 
      margin: auto;
    }
  }

  p {
    color: white;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
  }

  .scroll- {
    width: 30%;
    height: auto;
    display: block;
    margin: 20px auto;
    cursor: pointer;
    object-fit: contain;
  }

  .scroll-row {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }

  a {
      margin: auto;
      display: block;
  }
`;

const AboutIntro = () => {
  return (
    <Wrapper>
      <div className="container">
      <div className="row head-row">
      <h1>ABOUT</h1>
      </div>
        <div className="row">
          <div className="col-12 col-md-6 order-sm-2 order-md-1">
            <div className="left-content">
              <p className="mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 right-col order-sm-1 order-md-2">
            <img className="aboutus-img img-fluid" src={about} alt="" />
          </div>
        </div>
        <div className="row scroll-row">
         <a href="#developer"> <img className="scroll- d-none d-lg-block" src={scroll} alt="" /> </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutIntro;
