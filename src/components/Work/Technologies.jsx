import React, { useEffect, useState } from "react";
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

  h2,
  h5, p {
    color: white;
  }

  h2 {
    border-bottom: 3px solid red;
    display: inline-block;
  }
`;

const Technologies = () => {
  const [service, setService] = useState([]);
  const [framework, setFramework] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/work/service")
      .then((res) => res.json())
      .then(setService);
    fetch("http://localhost:8000/api/work/f&t")
      .then((res) => res.json())
      .then(setFramework);
  }, []);

  return (
    <Wrapper>
      <MetaTags>
        <meta property="og:url" content="http://www.kirannambiar.in/work" />
      </MetaTags>
      {service < 1 ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row my-2">
            <h1>
              What Do I <span> Work </span> On?
            </h1>
          </div>
          <div className="progress-bars">
            {framework &&
              service &&
              service.map((item, index) => {
                const tech = item.technologies;
                console.log(tech)
                return (
                  <div key={index}>
                    <h2 className="mt-5">{item.title}</h2>
                    <p>{item.description}</p>
                    {tech.map((e) => (
                      <h5>{e}</h5>
                    ))}
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Technologies;
