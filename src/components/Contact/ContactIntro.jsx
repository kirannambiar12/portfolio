import React from "react";
import styled from "styled-components";


const Wrapper = styled.section`

  @keyframes zoomout {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
}
  
  
  p {
    font-family: "Archivo Black",sans-serif;
    color: white;
    font-size: 80px;
    margin: auto auto auto 100px;
  }

  span {
    margin-left: 200px;
    font-size: 100px;
    -webkit-text-stroke: 2px red;
    color: black;
    animation: zoomout 5s ease-in-out;
  }
  span:hover {
    color: red;
    cursor: pointer;
  }

  .contact-me {
    height: 100vh;
  }

  a{
    text-decoration: none;
  }
`;


const ContactIntro = () => {
  return (
    <Wrapper>
      
      <div className="container">
        <div className="row contact-me">
          <p>
            Feel Free to <br />
           <a href="#form"> <span className="contact"> CONTACT </span> </a> me
         </p>
        </div>
      </div>

    </Wrapper>
  );
};

export default ContactIntro;
