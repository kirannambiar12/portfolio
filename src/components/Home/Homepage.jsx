import React from "react";
import styled from "styled-components";
import home from "../../assets/images/home.jpg";
import Typist from "react-typist";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";

const Wrapper = styled.section`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  background-image: url(${home});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  animation: fadeIn 1s ease-in-out;

  .intro {
    font-family: "Roboto", sans-serif;
    transform: translateY(20%);
    animation: none;
    @media (max-width: 576px) {
      transform: translateY(130%);
    }
  }

  .hello:after {
    content: "Hello.";
    color: white;
    @media (max-width: 576px) {
      content: "About";
    }
  }

  .hello:hover:after {
    content: "About";
    margin-left: 50px;
    transition: ease-in-out 500ms;
    @media (max-width: 576px) {
      margin-left: unset;
    }
  }

  .iam:after {
    content: "I am";
    color: #ff0000;
    @media (max-width: 576px) {
      content: "Work";
    }
  }

  .iam:hover:after {
    content: "Work";
    margin-left: 50px;
    transition: ease-in-out 500ms;
    @media (max-width: 576px) {
      margin-left: unset;
    }
  }

  .name:after {
    content: "Kiran";
    color: #ff0000;
    @media (max-width: 576px) {
      content: "Contact";
    }
  }

  .name:hover:after {
    content: "Contact";
    margin-left: 50px;
    transition: ease-in-out 500ms;
    @media (max-width: 576px) {
      margin-left: unset;
    }
  }

  .Typist {
    font-size: 25px;
    color: white;
    font-family: "Source Sans Pro", sans-serif;
    white-space: nowrap;
  }

  a {
    text-decoration: none;
  }
`;

const Homepage = () => {
  return (
    <Wrapper>
      <MetaTags>
        <meta property="og:url" content="http://www.kirannambiar.in" />
      </MetaTags>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="intro">
              <Link to="/about">
                <h1 data-aos="slide-right" className="hello mx-auto">
                </h1>
              </Link>
              <Link to="/work">
                <h1
                  data-aos="slide-right"
                  data-aos-delay="1000"
                  className="iam whoami mx-auto"
                >
                </h1>
              </Link>
              <Link to="/contact">
                <h1
                  data-aos="slide-right"
                  data-aos-delay="2000"
                  className="name whoami mx-auto"
                >
                </h1>
              </Link>
              <Typist
                className="d-none d-md-block"
                startDelay={3500}
                avgTypingDelay={100}
                hideWhenDone={false}
                cursor={{ blink: true }}
              >
                <span> I am a developer by profession. </span>
                <Typist.Backspace count={30} delay={1000} />
                <span>like to travel. </span>
                <Typist.Backspace count={8} delay={1000} />
                <span>take photographs. </span>
                <Typist.Backspace count={30} delay={1000} />
                <span>Click above to know more. </span>
              </Typist>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Homepage;
