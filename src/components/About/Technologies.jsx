import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import styled from "styled-components";
import work from "../../assets/images/work.jpg";

const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  background-image: url(${work});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .progress {
    margin-bottom: 30px;
    height: 1.5rem;
  }

  h1 {
    font-family: "Archivo Black", sans-serif;
    color: white;
  }
  span {
    color: red;
  }

  .progress-bars {
    margin-top: 50px;
  }

  .tech {
    font-family: "Ubuntu", sans-serif;
    font-size: 22px;
    color: white;
  }
`;

const Technologies = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row my-5">
          <h1>
            What Do I <span> Work </span> On?
          </h1>
        </div>
        <div className="progress-bars">
        <span className="tech">Django :</span>  <ProgressBar className="django" striped animated variant="success" now={40} label="40%"/>
        <span className="tech">Django :</span>  <ProgressBar className="react" striped animated variant="info" now={20} />
          <ProgressBar
            className="html-css"
            striped
            animated
            variant="warning"
            now={60}
          />
          <ProgressBar
            className="bootstrap"
            striped
            animated
            variant="danger"
            now={80}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Technologies;
