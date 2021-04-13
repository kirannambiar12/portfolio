import React from 'react';
import axios from 'axios';
import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;

  .text-box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .msg-textbox {
    width: 100%;
    max-width: 450px;
    height: 50px;
    outline: none;
    padding-left: 10px;
  }

  button {
    border-radius: 0;
    outline: none;
  }
`;

const Assistant = () => {

  const [userMessage, setUserMessage] = React.useState("");

  const [conversation, setConversation] = React.useState("");

  const fetchResp = async () => {
    try {
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/http://api.brainshop.ai/get?bid=155540&key=4ZUA5qGrv5Da196K&uid=kiran&msg=${userMessage}`
      );
      await setConversation([...conversation, { message: userMessage, isUser: true, currentDate: Date().toLocaleString() }, { message: res.data.cnt, isUser: false, currentDate: Date().toLocaleString() }]);
    } catch (err) {
      console.log(err.message);
      return {
        data: { cnt: 'Cannot connect to chatterbot. Try refreshing the page.' },
      };
    }
    setUserMessage("");
  }
  
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          {conversation && conversation.map((thread) => (
            <div className="col-12">
                <p className="color-white"> {thread.message} </p>
            </div>
          ))}
        </div>
        <div className="d-flex text-box mx-auto pb-4">
          <input onChange={(e) => setUserMessage(e.target.value)} value={userMessage} className="msg-textbox m-auto" placeholder="Type your message here..." type="text" />
          <button onClick={() => fetchResp()} className="m-auto">Send</button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Assistant;
