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
        <h1>Quiz List</h1>
      </QuizHeader>
      <ul>
        <li>
          <div class="homeLink">
            <Link to="/">Quiz list</Link>
          </div>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header; 