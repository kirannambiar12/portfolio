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
            <Button onClick={() => fetchJokes()} className="joke-generator-btn" variant="contained" color="primary">
                New Joke
            </Button>
            <Spring
                from={{ transform: 'scale(0)' }}
                to={{ transform: pressed ? 'scale(1)' : 'scale(0)' }}>
                {props => (
                    <animated.h1 className="color-white text-center justify-content-center jokes" style={props}>{jokes?.joke}</animated.h1>
                )}
            </Spring>
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
      font-size: 22px;
  }

  .joke-generator-btn {
      position: absolute;
      top: 100px;
      right: 50px;
      height: 40px;
      width: 180px;
      border-radius: 0px;
      outline: none;
  }
`;
