import React from "react";
import styled from 'styled-components';
import spinner from '../assets/images/spinner.gif'

const StyledWrapper = styled.div`

.loading-spinner {
  position: absolute;
  background-color: black;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  top: 0;
  left: 0;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 150px;
  }
}

`;


const Spinner = () => {
  return (
    <StyledWrapper >
        <div className="loading-spinner">
        <img className="img-fluid" src={spinner} alt=""/>
        </div>
    </StyledWrapper>
  );
};

export default Spinner;
