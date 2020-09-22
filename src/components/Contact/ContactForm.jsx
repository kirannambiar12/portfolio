import React, { useState } from "react";
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
    background-color: #a00404;
    border-color: #ff0000;
    border-radius: 5px;
    outline: none;
    @media (max-width: 768px) { 
       margin: 30px auto;
      }
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

  .social-icons {
    margin: auto;
  }

  .social-icon-row {
    margin-top: 50px;
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
  const [name, setName] = useState("");
  const [email_id, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
    fetch("https://portfolio-django-backend.herokuapp.com/api/contact/", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.status === 201) {
          alert("Your message has been sent successfully. 🤝");
          this.resetForm();
        } else {
          alert("Opps. There was some error submitting the form. Please try again. 😔");
        }
      })
      .catch((error) => console.log("Request failed", error));
  };

  return (
    <Wrapper>
      <div className="container" id="form">
        <div className="row">
          <form onSubmit={onSubmit}>
            <TextField
              autoComplete="new-password"
              id="outlined-basic"
              label="Full Name"
              name="name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              id="outlined-basic"
              label="Email Address"
              name="email_id"
              variant="outlined"
              autoComplete="new-password"
              value={email_id}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextareaAutosize
              className="textbox"
              aria-label="minimum height"
              name="subject"
              rowsMin={3}
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>
        <div className="row text-center d-flex">
          <hr className="flex-grow-1" />
          <span className="px-2 align-self-center or-option">OR</span>
          <hr className="flex-grow-1" />
        </div>
        <div className="row social-icon-row">
          <div className="col-4 col-md-2 social-icons">
            <a
              href="https://www.facebook.com/kiran.nambiar3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-media-section">
                <img className="social-media" src={fb} alt="" />
                <p className="mt-2">Facebook</p>
              </div>
            </a>
          </div>
          <div className="col-4 col-md-2 social-icons">
            <a
              href="https://www.instagram.com/abaddon_namby/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-media-section">
                <img className="social-media" src={ig} alt="" />
                <p className="mt-2">Instagram</p>
              </div>
            </a>
          </div>
          <div className="col-4 col-md-2 social-icons">
            <a href="mailto: kirannambiar12@gmail.com">
              <div className="social-media-section">
                <img className="social-media" src={gmail} alt="" />
                <p className="mt-2">Gmail</p>
              </div>
            </a>
          </div>
          <div className="col-4 col-md-2 social-icons">
            <a
              href="https://www.linkedin.com/in/kiran-nambiar-a48195152/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-media-section">
                <img className="social-media" src={linkedin} alt="" />
                <p className="mt-2">Linkedin</p>
              </div>
            </a>
          </div>
          <div className="col-4 col-md-2 social-icons">
            <a
              href="https://wa.me/9601481724"
              target="_blank"
              rel="noopener noreferrer"
            >
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
