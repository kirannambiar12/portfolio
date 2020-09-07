import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const Wrapper = styled.section`
  form {
    background-color: white;
    display: flex;
    flex-direction: column;
  }

  form {
    width: 80%;
    margin: auto;
    background-color: black;
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
    -webkit-box-shadow: 0 0 0px 1000px black inset 
}

input:-internal-autofill-selected {
    color: black !important;
}
`;

const Contact = () => {
  return (
    <Wrapper>
      <div className="container">
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
            <TextareaAutosize className="textbox" aria-label="minimum height" rowsMin={3} placeholder="Subject" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
