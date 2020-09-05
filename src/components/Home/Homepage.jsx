import React from "react";
import styled from "styled-components";
import home from "../../assets/images/home.jpg";

const Wrapper = styled.section`

@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
}

  background-image: url(${home});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  animation: fadeIn 1s ease-in-out;

  .intro {
    font-family: 'Roboto', sans-serif;
    transform: translateY(30%);
    animation: none;
  }

  h1 {
    font-size: 8rem;
    white-space: nowrap;
    margin: auto;
  }

  .whoami {
      color: #FF0000;
  }

  .hello {
    position: relative;
  }

  .hello:after {
      content: 'Hello.';
      color: white;
  }

  .hello:hover:after {
      content: 'Kiran';
      margin-left: 50px;
      transition: ease-in-out 500ms;
  }
`;

const Homepage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="intro">
              <h1 data-aos="slide-right" className="hello"></h1>
              <h1 data-aos="slide-right" data-aos-delay="1000" className="iam whoami">I am</h1>
              <h1 data-aos="slide-right" data-aos-delay="2000" className="name whoami">Kiran</h1>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Homepage;
