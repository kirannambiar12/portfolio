import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html {
    scroll-behavior: smooth;
  }

body {
    background-color: black;
}

.container {
    @media (max-width: 600px) {
        padding-left: 8%;
        padding-right: 8%;
    }
}

h1 {
    font-size: 8rem;
    font-weight: 600;
    @media (max-width: 576px) {
      font-size: 16vw;
    }
  }
  
h2 {
    font-family: "Archivo Black", sans-serif;
    font-size: 88px;
    @media (max-width: 600px) {
      font-size: 32px;
    }
}

h3 {
    font-family: "Archivo Black", sans-serif;
    font-size: 52px;
    @media (max-width: 600px) {
      font-size: 18px;
    }
}

h4 {
    font-size: 28px;
    @media (max-width: 600px) {
      font-size: 18px;
    }
}

p:not(.contact-intro), .paragraph{
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 2rem;
    letter-spacing: 0.6px;
    font-weight: 200;

    @media (max-width: 600px) {
      font-size: 15px;
      line-height: 1.8rem;
    }
}

.color-white {
  color: white;
}

.color-black {
  color: black;
}

.background-black {
  background-color: black;
}

.background-red {
  background-color: red;
}

.color-red {
  color: red;
}

.cursor-pointer {
  cursor: pointer;
}

.text-center {
  text-align: center;
}

.text-capitalize {
  text-transform: capitalize;
}

.Typist .Cursor {
    display: inline-block; }
    .Typist .Cursor--blinking {
      opacity: 1;
      animation: blink 1s linear infinite; }
  
  @keyframes blink {
    0% {
      opacity: 1; }
    50% {
      opacity: 0; }
    100% {
      opacity: 1; } }

.d-unset {
  display: unset !important;
}

.form-input-section {
  width: 100%;
  max-width: 900px;
}

.form-input {
  width: 100%;
  max-width: 900px;
  height: 50px;
  outline: none;
}

.form-textbox {
  height: 150px;
}

.styled-button {
  margin-top: 30px;
  width: 300px;
  height: 50px;
  margin-left: auto;
  color: white;
  background-color: #a00404;
  border-color: #ff0000;
  border-radius: 5px;
  outline: none;
  @media (max-width: 768px) {
    margin: 30px auto;
  }
}
.styled-button:hover {
  background-color: #d50000;
}

.MuiBottomNavigation-root.dropdown {
  button.MuiBottomNavigationAction-root {
    height: 50px;

    svg.MuiSvgIcon-root {
      font-size: 1.8rem;
    }

    .MuiBottomNavigationAction-label {
      font-size: 16px;
    }
  }
}

.MuiBottomNavigationAction-label {
    color: white;
    font-size: 14px;
    font-weight: 500;
}

.MuiBottomNavigationAction-root:hover {
    .MuiBottomNavigationAction-label, .MuiSvgIcon-root {
    color: red;
} 
}

.MuiBottomNavigationAction-root {
    outline: none !important;
}

.MuiBottomNavigationAction-root.MuiBottomNavigationAction-iconOnly {
  @media (max-width: 600px) {
    width: auto;
  }
}

.active-link {
  .MuiSvgIcon-root, .MuiBottomNavigationAction-label {
    color: red !important;
}
}

#header-wrapper {
  padding-bottom: 50px;
}

.MuiBottomNavigationAction-label {
  opacity: 1 !important;
}

.section-spacing-50t {
  margin-top: 50px;
}

.section-spacing-80t {
  margin-top: 80px;
}

.section-spacing-50b {
  margin-bottom: 50px;
}

.section-spacing-80b {
  margin-bottom: 80px;
}

.content-spacing-30t {
  margin-top: 30px;
}

.content-spacing-30b {
  margin-bottom: 30px;
}

.text-decoration-none:hover {
  text-decoration: none;
}

.MuiBackdrop-root {
  background-color: rgba(0, 0, 0, 0.7)
}

    // hover border-bottom expand

    .onhover__border__expand {
        display:inline-block;
    }

    .onhover__border__expand:after {
        display:block;
        content: '';
        border-bottom: solid .5px red;  
        transform: scaleX(0);  
        transition: transform 200ms ease-in-out;
    }

    .onhover__border__expand:hover:after {
        transform: scaleX(1);
    }

`;

export default GlobalStyle;
