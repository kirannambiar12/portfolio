import React, { useState, useEffect } from "react";
import styled from "styled-components";
import code from "../../assets/images/code.jpg";
import frontend from "../../assets/images/frontend.svg";
import backend from "../../assets/images/backend.svg";
import deploy from "../../assets/images/deployments.svg";

const Wrapper = styled.section`

  #developer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
  }

  .do-as-developer {
    font-family: "Archivo Black", sans-serif;
    color: white;
    @media (max-width: 992px) {
      margin: auto;
    }
    @media (max-width: 576px) {
      padding-left: 20px;
      margin: auto;
    }
  }

  .full-stack {
    color: white;
    text-align: center;
    font-size: 2.5vw;
  }

  span {
    color: red;
  }

  p {
    color: white;
    font-family: "Ubuntu", sans-serif;
    font-size: 22px;
  }

  img {
    width: 100px;
    height: auto;
    margin: auto;
    display: flex;
    align-items: center;
  }

  .col-4 {
    display: flex;
    flex-direction: column;
  }

  .icon {
    padding: 10%;
  }

  .deploy {
    margin-left: -10px;
  }
`;

const AboutDeveloper = () => {
  const [aboutDeveloper, setAboutDeveloper] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-django-backend.herokuapp.com/api/about/developer/")
      .then((res) => res.json())
      .then(setAboutDeveloper);
  }, []);

  return (
    <Wrapper>
      {aboutDeveloper &&
        aboutDeveloper.map((item) => {
          return (
            <div id="developer" style={{ backgroundImage: `url(${item.developer_background_img})` }}>
              <div className="container">
                <div className="row">
                  <h1 className="mt-5 do-as-developer">
                    What I Do As A <span> Developer? </span>
                  </h1>
                </div>
                <div className="row mt-5">
                  <div className="col-12 col-md-8 mx-auto">
                    <p>{item.about_developer_text}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 icon">
                    <img className="img-fluid" src={frontend} alt="" />
                    <h1 className="full-stack">Frontend</h1>
                  </div>
                  <div className="col-4 icon">
                    <img className="img-fluid" src={backend} alt="" />
                    <h1 className="full-stack">Backend</h1>
                  </div>
                  <div className="col-4 icon">
                    <img className="img-fluid" src={deploy} alt="" />
                    <h1 className="full-stack deploy">Deployments</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </Wrapper>
  );
};

export default AboutDeveloper;
