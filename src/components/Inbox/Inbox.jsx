import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import trash from "../../assets/images/delete.svg";
import btnLoader from "../../assets/images/btn-loader.svg";
import { useToasts } from "react-toast-notifications";

const Wrapper = styled.section`
  color: white;

  p {
    font-family: "Ubuntu", sans-serif;
    font-size: 18px !important;
  }

  .email-row:hover {
    background-color: #474747;
    cursor: pointer;
    .trash-section {
      background-color: black;
    }
  }

  .trash-section:hover {
    background-color: red !important;
  }

  .email-row {
    border: 1px solid white;
  }

  .logout {
    font-family: "Ubuntu", sans-serif;
    font-size: 18px !important;
    color: red;
    cursor: pointer;
    text-decoration: none;
  }

  .logout:after {
    display: block;
    content: "";
    border-bottom: 2px solid white;
    transform: scaleX(0);
    transition: transform 500ms ease-in-out;
  }

  .logout:hover:after {
    transform: scaleX(1);
  }

  .email-heading {
    border: 2px solid white;
    p {
      font-size: 20px !important;
    }
  }

  .trash {
    width: 20px;
  }

  .text-ellipse {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .no-emails {
    margin-top: 100px;
  }

`;

const Inbox = () => {
  const [token, setToken, deleteToken] = useCookies(["auth-token"]);
  const [emails, setEmails] = useState();
  const [emailIndex, setEmailIndex] = useState(null);
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState(false);
  const { addToast } = useToasts();

  console.log(token, show, setToken);

  const handleClose = () => {
    setShow(false);
    setEmailIndex(null);
  };
  const handleShow = (index) => {
    setShow(true);
    setEmailIndex(index);
  };

  const logout = () => {
    deleteToken(["auth-token"]);
  };

  useEffect(() => {
    fetch("https://portfolio-django-backend.herokuapp.com/api/contact/")
      .then((res) => res.json())
      .then((res) => setEmails(res));
  }, []);

  const deleteEmail = (email) => {
    fetch(
      `https://portfolio-django-backend.herokuapp.com/api/contact/${email.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      setLoader(false);
      fetch("https://portfolio-django-backend.herokuapp.com/api/contact/")
        .then((res) => res.json())
        .then((res) => setEmails(res));
      if (res.status === 204 || res.status === 200) {
        addToast("The Email has been successfully deleted.", {
          appearance: "success",
          autoDismiss: true,
        });
      } else {
        addToast("Opps. There is some error deleting the Email.", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    });
  };
  console.log(emails);
  return (
    <Wrapper>
      <h3 className="text-center py-5">
        Hey Kiran, You have successfully logged In.
      </h3>
      <div className="container">
        <div className="row">
          <a href="javascript:void(0);" className="mr-5 ml-auto mb-5 logout" onClick={() => logout()}>
            Logout
          </a>
        </div>
        {emails && emails.length > 0 && (
          <div className="row email-heading pt-2">
            <div className="col-lg-2 col-4 d-none d-lg-block">
              <p>Name</p>
            </div>
            <div className="col-4">
              <p>Email ID</p>
            </div>
            <div className="col-4">
              <p>Subject</p>
            </div>
          </div>
        )}
        {emails &&
          emails.map((email, index) => (
            <div key={email.id}>
              <div className="row email-row">
                <div
                  onClick={() => handleShow(index)}
                  className="col-lg-2 col-4 pt-2 d-none d-lg-block text-ellipse"
                >
                  <p>{email.name}</p>
                </div>
                <div
                  onClick={() => handleShow(index)}
                  className="col-4 pt-2 text-ellipse"
                >
                  <p>{email.email_id}</p>
                </div>
                <div
                  onClick={() => handleShow(index)}
                  className="col-4 pt-2 text-ellipse"
                >
                  <p>{email.subject}</p>
                </div>
                <div className="col-lg-2 col-4 trash-section py-2 d-flex">
                  <img
                    className="trash d-block mx-auto mt-1"
                    onClick={() => {
                      setLoader(!loader);
                      deleteEmail(email);
                    }}
                    src={trash}
                    alt=""
                  />{" "}
                  {loader && !index ? (
                    <img className="float-right mt-1" src={btnLoader} alt="" />
                  ) : null}
                </div>
              </div>
              <Modal
                id={index}
                show={emailIndex === index}
                onHide={() => handleClose(index)}
              >
                <Modal.Header className="flex-column">
                  <h4 className="d-block mx-auto"> {email.name}</h4>
                  <p className="d-block mx-auto"> {email.email_id} </p>
                  <span style={{ fontSize: '12px'}} className="email-date ml-auto"> {email.date} </span>
                </Modal.Header>
                <Modal.Body className="my-5 text-center">
                  {email.subject}
                </Modal.Body>
                <Modal.Footer>
                <a style={{ marginRight: '30%' }} className="mx-auto" href={`mailto:${email.email_id}`}>Reply</a>
                  <button style={{ maxWidth: '200px' }} className="mx-auto" onClick={handleClose}>
                    Close
                  </button>
                </Modal.Footer>
              </Modal>
            </div>
          ))}
        {emails && emails.length < 1 && (
          <h5 className="text-center no-emails">
            Hey Kiran, There are no emails for you.
          </h5>
        )}
      </div>
    </Wrapper>
  );
};

export default Inbox;
