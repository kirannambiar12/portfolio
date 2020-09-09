import React from "react";
import styled from "styled-components";
import code from "../../assets/images/code.jpg";
import frontend from "../../assets/images/frontend.svg";
import backend from "../../assets/images/backend.svg";
import deploy from "../../assets/images/deployments.svg";

const Wrapper = styled.section`
  margin-top: 100px;
  background-image: url(${code});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;

  #developer {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .do-as-developer {
    font-family: "Archivo Black", sans-serif;
    color: white;
  }

  .full-stack {
    color: white;
    text-align: center;
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
`;

const AboutDeveloper = () => {
  return (
    <Wrapper>
      <div className="container" id="developer">
        <div className="row">
          <h1 className="mt-5 do-as-developer">
            What I Do As A <span> Developer? </span>
          </h1>
        </div>
        <div className="row">
          <div className="col-8 mx-auto">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 p-5">
            <img className="img-fluid" src={frontend} alt="" />
            <h1 className="full-stack">Frontend</h1>
          </div>
          <div className="col-4 p-5">
            <img className="img-fluid" src={backend} alt="" />
            <h1 className="full-stack">Backend</h1>
          </div>
          <div className="col-4 p-5">
            <img className="img-fluid" src={deploy} alt="" />
            <h1 className="full-stack">Deployments</h1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutDeveloper;
