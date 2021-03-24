import React, { useState, useEffect } from "react";
import styled from "styled-components";
import frontend from "../../assets/images/frontend.svg";
import backend from "../../assets/images/backend.svg";
import deploy from "../../assets/images/deployments.svg";
import ReactHtmlParser from "react-html-parser";

const Wrapper = styled.section`
 
  margin-top: 60px;
  
  #developer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
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
    font-size: 18px;
  }

  span {
    color: red;
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
    padding: 5% 10% 5% 10%;
  }

  .deploy {
    margin-left: -10px;
  }

  .full-stack-logo {
    width: 70px;
  }

  .dev-text p{
    color: white;
    font-family: "Ubuntu",sans-serif;
    font-size: 18px;
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
            <div key={item.id} id="developer" style={{ backgroundImage: `url(${item.developer_background_img})` }}>
              <div className="container">
                <div className="row">
                  <h3 className="mt-5 do-as-developer">
                    What I Do As A <span> Developer? </span>
                  </h3>
                </div>
                <div className="row content-spacing-30t">
                  <div className="col-12 col-md-8 mx-auto">
                    <p className="paragraph color-white">{ReactHtmlParser(item.about_developer_text)}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 icon">
                    <img className="img-fluid full-stack-logo" src={frontend} alt="" />
                    <p className="full-stack mt-3">Frontend</p>
                  </div>
                  <div className="col-4 icon">
                    <img className="img-fluid full-stack-logo" src={backend} alt="" />
                    <p className="full-stack mt-3">Backend</p>
                  </div>
                  <div className="col-4 icon">
                    <img className="img-fluid full-stack-logo" src={deploy} alt="" />
                    <p className="full-stack mt-3 deploy">Deployments</p>
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
