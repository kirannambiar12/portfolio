import React from "react";
import styled from "styled-components";
import frontend from "../../assets/images/frontend.svg";
import backend from "../../assets/images/backend.svg";
import deploy from "../../assets/images/deployments.svg";
// import ReactHtmlParser from "react-html-parser";

const Wrapper = styled.section`
 
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  
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
    @media (max-width: 600px) {
      padding: 5% 5% 5% 5%;
    }
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
  // const [aboutDeveloper, setAboutDeveloper] = useState([]);

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_BACKEND_URL}/api/about/developer/`)
  //     .then((res) => res.json())
  //     .then(setAboutDeveloper);
  // }, []);

  return (
    <Wrapper>
            <div id="developer">
              <div className="container">
                <div className="row">
                  <h3 className="mt-5 do-as-developer">
                    What I Do As A <span> Developer? </span>
                  </h3>
                </div>
                <div className="row content-spacing-30t">
                  <div className="col-12 col-md-8 mx-auto">
                    <p className="paragraph color-white">At the very beginning I was keen to work on Frontend but then I got the opportunity to explore more and started working on the backend and deployment stuff. I am open to learn new stuff, experiment new things and explore more.</p>
                    <p className="paragraph color-white">I have been working on Full Stack Development less than a year and I have learnt so much. But there is still lots of stuff that i need to cover. So active learning on new things and polishing my skills.</p>
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
    </Wrapper>
  );
};

export default AboutDeveloper;
