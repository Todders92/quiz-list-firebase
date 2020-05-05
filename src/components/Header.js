import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const QuizHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: blue;
`;

function Header(){
  return (
    <React.Fragment>
      <QuizHeader>
        Quiz List
      </QuizHeader>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/userquizes">My Quizes</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header; 