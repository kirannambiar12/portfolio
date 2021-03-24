import React, { useState } from "react";
import styled from "styled-components";
import fb from "../../assets/images/fb.svg";
import ig from "../../assets/images/ig.svg";
import btnLoader from "../../assets/images/btn-loader.svg";
import gmail from "../../assets/images/gmail.svg";
import linkedin from "../../assets/images/linkedin.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import { useToasts } from "react-toast-notifications";

const Wrapper = styled.section`
  height: 100vh;

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
      font-size: 14px;
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

  .drop-msg {
    color: white;
    font-size: 14px;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email_id, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [loader, setLoader] = useState(false);
  const { addToast } = useToasts();

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { name, email_id, subject };
    setLoader(true);
    fetch("https://portfolio-django-backend.herokuapp.com/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 201) {
          addToast("Your message has been sent successfully. 🤝", {
            appearance: "success",
            autoDismiss: true,
          });
          resetForm();
          setLoader(false);
        } else {
          addToast(
            "Opps. There was some error submitting the form. Please try again. 😔",
            { appearance: "error", autoDismiss: true }
          );
          setLoader(false);
        }
      })
      .catch((error) => console.log("Request failed", error));
  };

  return (
    <Wrapper>
      <div className="container" id="form">
        <div className="row flex-column form-input-section mx-auto">
          <span className="drop-msg pt-5">
            Or incase if you feel like saying a hi to me? Please drop a message.
            I will be happy to hear from you.
          </span>
          <input
            className="form-input mt-4 mx-auto px-3"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="form-input mt-4 mx-auto px-3"
            placeholder="Email Address"
            type="email"
            value={email_id}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="form-input mt-4 mx-auto px-3 pt-2 form-textbox"
            rows="4"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <button onClick={onSubmit} className="d-flex">
            <p className="mx-auto mt-2"> Submit </p>
            {loader ? (
              <img className="float-right mt-1" src={btnLoader} alt="" />
            ) : null}
          </button>
        </div>
        <div className="row text-center d-flex mt-5 pt-5">
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
                <p className="mt-2 paragraph">Facebook</p>
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
                <p className="mt-2 paragraph">Instagram</p>
              </div>
            </a>
          </div>
          <div className="col-4 col-md-2 social-icons">
            <a href="mailto: kirannambiar12@gmail.com">
              <div className="social-media-section">
                <img className="social-media" src={gmail} alt="" />
                <p className="mt-2 paragraph">Gmail</p>
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
                <p className="mt-2 paragraph">Linkedin</p>
              </div>
            </a>
          </div>
          <div className="col-4 col-md-2 social-icons">
            <a
              href="https://wa.me/+919601481724"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-media-section">
                <img className="social-media" src={whatsapp} alt="" />
                <p className="mt-2 paragraph">Whatsapp</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactForm;
