import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom'


const Wrapper = styled.section`

    position: fixed;
    top: 50px;
    right: 50px;
    font-size: 18px;
    color: white;
    font-family: 'Source Sans Pro', sans-serif;
    white-space: nowrap;
    z-index: 9;

    a {
        text-decoration: none;
        color: white;
    }

    p:hover {
        color: red;
    }

    p{
        display:inline-block;
    }

    p:after {
    display:block;
    content: '';
    border-bottom: 2px solid white;
    transform: scaleX(0);  
    transition: transform 500ms ease-in-out;
    }

    p:hover:after { transform: scaleX(1); }    

    .back-home {
      background-color: black;
    }
  
`;

const GoBack = () => {

    let location = useLocation();

  return (
    <Wrapper>
     <div className={location.pathname === '/' ? "d-none" : "dropdown"}>
            <Link to="/">
              <p className="px-2 py-2 back-home">BACK HOME</p>
            </Link>
          </div>
    </Wrapper>
  );
};

export default GoBack;
