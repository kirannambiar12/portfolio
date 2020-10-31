import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import styled from "styled-components";
import Spinner from "../Spinner";
import MetaTags from "react-meta-tags";


const Wrapper = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;

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
  const [technology, setTechnology] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-django-backend.herokuapp.com/api/work/technology/")
      .then((res) => res.json())
      .then(setTechnology);
  }, []);

  return (
    <Wrapper>
      <MetaTags>
        <meta property="og:url" content="http://www.kirannambiar.in/work" />
      </MetaTags>
      {technology < 1 ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row my-5">
            <h1>
              What Do I <span> Work </span> On?
            </h1>
          </div>
          <div className="progress-bars">
            {technology &&
              technology.map((item) => (
                <h1>Hello</h1>
              ))}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Technologies;
