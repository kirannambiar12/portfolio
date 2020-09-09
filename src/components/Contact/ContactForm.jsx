import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import fb from "../../assets/images/fb.svg";
import ig from "../../assets/images/ig.svg";
import gmail from "../../assets/images/gmail.svg";
import linkedin from "../../assets/images/linkedin.svg";
import whatsapp from "../../assets/images/whatsapp.svg";

const Wrapper = styled.section`
  height: 100vh;

  #form {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  form {
    background-color: black;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 3px solid red !important;
  }

  .MuiFormLabel-root.Mui-focused {
    color: red;
    font-weight: 500;
  }

  .MuiFormControl-root {
    margin-top: 30px;
    background-color: black;
  }
  .MuiInputLabel-outlined {
    color: white;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: white !important;
  }

  .MuiInputBase-input {
    color: white;
  }

  .textbox {
    margin-top: 30px;
    background-color: black;
    border: 2px solid white;
    outline: none;
    border-radius: 4px;
    padding: 10px;
    color: white;
  }
  .textbox:focus {
    border: 2px solid red;
  }

  .textbox::placeholder {
    color: white;
  }
  .textbox:focus::placeholder {
    color: grey;
  }

  .MuiOutlinedInput-input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px black inset;
  }

  input:-internal-autofill-selected {
    color: black !important;
  }

  button {
    margin-top: 30px;
    width: 300px;
    height: 50px;
    margin-left: auto;
    color: white;
    background-color: #A00404;
    border-color: #ff0000;
    border-radius: 5px;
    outline: none;
  }
  button:hover {
    background-color: #d50000;
  }

  hr {
    border-top: 3px solid red;
  }

  .or-option {
    color: white;
    font-size: 26px;
    font-family: "Archivo Black", sans-serif;
  }

  .social-media {
    width: 50px;
    margin: auto;
    display: block;
  }

  p {
    text-align: center;
    color: white;
  }

  .col-2 {
    margin: auto;
  }

  a {
    text-decoration: none;
  }

  .social-media-section {
  p {
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
  }
  }
  .social-media-section:hover {
  p {
    color: red;
  }

  img {
    transform: scale(1.2);
    transition: 200ms ease-in;
  }
  }
`;

const ContactForm = () => {
  return (
    <Wrapper>
      <div className="container" id="form">
        <div className="row">
          <form noValidate autoComplete="off">
            <TextField
              autoComplete="new-password"
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              autoComplete="new-password"
            />
            <TextareaAutosize
              className="textbox"
              aria-label="minimum height"
              rowsMin={3}
              placeholder="Subject"
            />
            <button>Submit</button>
          </form>
        </div>
        <div className="row text-center d-flex">
          <hr className="flex-grow-1" />
          <span className="px-2 align-self-center or-option">OR</span>
          <hr className="flex-grow-1" />
        </div>
        <div className="row">
          <div className="col-2">
            <a href="https://www.facebook.com/kiran.nambiar3/" target="_blank" rel='noopener'>
              <div className="social-media-section">
              <img className="social-media" src={fb} alt="" />
              <p className="mt-2">Facebook</p>
              </div>
            </a>
          </div>
          <div className="col-2">
            <a href="https://www.instagram.com/abaddon_namby/" target="_blank" rel='noopener'>
            <div className="social-media-section">
              <img className="social-media" src={ig} alt="" />
              <p className="mt-2">Instagram</p>
              </div>
            </a>
          </div>
          <div className="col-2">
            <a href="mailto: kirannambiar12@gmail.com">
            <div className="social-media-section">
              <img className="social-media" src={gmail} alt="" />
              <p className="mt-2">Gmail</p>
              </div>
            </a>
          </div>
          <div className="col-2">
            <a href="https://www.linkedin.com/in/kiran-nambiar-a48195152/" target="_blank" rel='noopener'>
            <div className="social-media-section">
              <img className="social-media" src={linkedin} alt="" />
              <p className="mt-2">Linkedin</p>
              </div>
            </a>
          </div>
          <div className="col-2">
            <a href="https://wa.me/9601481724" target="_blank" rel='noopener'>
            <div className="social-media-section">
              <img className="social-media" src={whatsapp} alt="" />
              <p className="mt-2">Whatsapp</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactForm;
