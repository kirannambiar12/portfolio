import React, { useState, useEffect } from "react";
import styled from "styled-components";
import about from "../../assets/images/about.jpg";
import scroll from "../../assets/images/scroll.png";
import Spinner from "../Spinner";
import ReactHtmlParser from "react-html-parser";


const Wrapper = styled.section`
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

  .about-intro-title {
    -webkit-text-stroke: 2px red;
    animation: blinkingText 10s infinite;
    margin-left: 18px;
    @media (max-width: 600px) {
      margin: auto;
      text-align: center;
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
  const [aboutInfo, setAboutInfo] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-django-backend.herokuapp.com/api/about/")
      .then((res) => res.json())
      .then(res => setAboutInfo(res))
  }, []);

  return (
    <Wrapper>
      {aboutInfo < 1 ?
      <Spinner />
         : aboutInfo.map((item) => {
          return (
            <div key={item.id} className="container">
              <div className="row section-spacing-80t">
                <h2 className="about-intro-title">{item.title}</h2>
              </div>
              <div className="row content-spacing-30t">
                <div className="col-12 col-md-6 order-2 order-md-1">
                  <div className="left-content">
                    <span className="mt-5">{ReactHtmlParser(item.about_text)}</span>
                  </div>
                </div>
                <div className="col-12 col-md-6 right-col order-1 order-md-2">
                  <img
                    className="aboutus-img img-fluid"
                    src={about}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        }) }
    </Wrapper>
  );
};

export default AboutIntro;
