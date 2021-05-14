import React, { useState } from 'react';
import axios from 'axios';
import { Spring, animated } from "react-spring";
import styled from "styled-components";
import Button from '@material-ui/core/Button';

const Jokes = () => {

    const [jokes, setJokes] = useState();
    const [pressed, setPressed] = useState(false);

    const fetchJokes = () => {
        setPressed(false);
        try {
            const options = {
                url: 'https://icanhazdadjoke.com',
                headers: {
                    'Accept': 'application/json',
                }
            }
            axios(options)
                .then(response => {
                    setPressed(true);
                    setJokes(response.data);
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Wrapper>
            <h1 className={`color-white bored-hear-joke ${jokes ? "jokes-heading-anim" : "jokes-heading"}`}> <span className="color-red">Bored?</span> Let's hear some jokes.</h1>
            <Spring
                from={{ transform: 'scale(0)' }}
                to={{ transform: pressed ? 'scale(1)' : 'scale(0)' }}>
                {props => (
                    <animated.h1 className="color-white text-center justify-content-center jokes" style={props}>{jokes?.joke}</animated.h1>
                )}
            </Spring>
            <Button onClick={() => fetchJokes()} className="joke-generator-btn" variant="contained" color="primary">
                New Joke
            </Button>
        </Wrapper>
    )
}

export default Jokes;

const Wrapper = styled.section`
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  .jokes {
      font-size: 32px;
      max-width: 800px;
      margin: auto;

      @media (max-width: 600px) {
          font-size: 18px;
          padding-left: 20px;
          padding-right: 20px;
      }
  }

  .bored-hear-joke {
      font-size: 62px;
      font-weight: bolder;
      text-align: center;
      position: relative;
      transition: top .5s ease-in;

      @media (max-width: 600px) {
          font-size: 32px;
      }
  }

  .jokes-heading {
      top: 40%;
  }

  .jokes-heading-anim {
    top: 100px;
    @media (max-width: 600px) {
          top: 150px;
      }
  }

  .joke-generator-btn {
      position: absolute;
      top: 70%;
      right: 20%;
      height: 40px;
      width: 180px;
      border-radius: 0px;
      outline: none;
      background-color: red;
      @media (max-width: 600px) {
        transform: translateX(-50%);
        left: 50%;
      }
  }
`;
