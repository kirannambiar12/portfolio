import React from "react";
import styled from "styled-components";
import about from "../../assets/images/about.jpg";
// import Spinner from "../Spinner";
// import ReactHtmlParser from "react-html-parser";


const Wrapper = styled.section`
  @media (max-width: 768px) {
    height: unset;
  }

  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  }
`;

const AboutIntro = () => {
  // const [aboutInfo, setAboutInfo] = useState([]);

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_BACKEND_URL}/api/about/`)
  //     .then((res) => res.json())
  //     .then(res => setAboutInfo(res))
  // }, []);

  return (
    <Wrapper>
            <div className="container">
              <div className="row section-spacing-80t">
                <h2 className="about-intro-title">About</h2>
              </div>
              <div className="row content-spacing-30t">
                <div className="col-12 col-md-6 order-2 order-md-1">
                  <div className="left-content">
                    <p className="paragraph color-white">Hey, I am Kiran Nambiar. I am basically from Kerala but born and raised in Vadodara, Gujarat. I have completed my Bachelor of Engineering in Electronics and Communication in 2019.</p>
                    <p className="paragraph color-white">After my B.E. I wanted to change my field. So I went to Bangalore did a 3 months course in Full Stack Development. After that I started searching for jobs and got a position as an intern in <a href="https://1stmain.co/" rel="noopener noreferrer" target="_blank">1st Main</a>, Bangalore. Did a 3 months internship in 1st Main and now working as a full time employee there itself.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 right-col order-1 order-md-2">
                  <img
                    className="aboutus-img img-fluid"
                    src={about}
                    alt="Kiran Nambiar | I am a full stack developer. I build websites. I can work on both frontend and backend. I use latest technologies and frameworks like React, Django, Wagtail and much more."
                  />
                </div>
              </div>
            </div>
    </Wrapper>
  );
};

export default AboutIntro;
