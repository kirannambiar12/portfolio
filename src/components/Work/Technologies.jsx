import React from "react";
import styled from "styled-components";
import Spinner from "../Spinner";
import ReactHtmlParser from "react-html-parser";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { services } from "../../JSON/db"
import Head from "../../layout/Head";

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

  h3,
  h5, h4, p {
    color: white;
  }

  h4 {
    border-bottom: 3px solid red;
    display: inline-block;
  }

  .accordion-arrow {
    color: red;
    transform: rotate(90deg);
    margin-top: -5px;
  }

  .accordion-box {
    background-color: white;
    padding: 20px;
    p {
      color: black;
      font-family: "Ubuntu",sans-serif;
    }
  }

  .accordion-head:hover + .accordion-box {
      display: block !important;
    }
  
    .accordion-head:hover{
      cursor: pointer;
    }



  .accordion-box:hover {
      display: block !important;
    }

  .hr-line {
    background-color: white;
  }
  
`;

const Technologies = () => {
  // const [service, setService] = useState([]);
  // const [framework, setFramework] = useState([]);

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_BACKEND_URL}/api/work/service`)
  //     .then((res) => res.json())
  //     .then(setService);
  //   fetch(`${process.env.REACT_APP_BACKEND_URL}/api/work/f&t`)
  //     .then((res) => res.json())
  //     .then(setFramework);
  // }, []);

  return (
    <>
    <Head url="work" title="Kiran Nambiar | Work" />
    <Wrapper>
      {services < 1 ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row section-spacing-50t">
            <h3 className="ml-3">
              What Do I <span> Work </span> On?
            </h3>
          </div>
          <div className="progress-bars">
            {
              services &&
              services.map((item, index) => {
                const tech = item.technologies;
                return (
                  <div key={index}>
                    <h4 className="mb-4">{item.title}</h4>
                    <p>{ReactHtmlParser(item.description)}</p>
                    {tech.map((e) => (
                      <div>
                     <div className="d-inline-flex accordion-head py-3 pr-3"><h5 className="accordion-title">{e.title}</h5><i class="fas fa-chevron-right accordion-arrow"></i></div> 
                      <div className="accordion-box d-none"><p>{ReactHtmlParser(e.description)}</p> </div>
                      </div>
                    ))}
                <hr className="hr-line my-5"/>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </Wrapper>
    </>
  );
};

export default Technologies;
