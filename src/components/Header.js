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
        <div className="homeLink text-center">
          <p>
              <Link to="/"><button type="button">Quiz list</button></Link>
          </p>
          <p>
              <Link to="/signin"><button type="button">Sign In</button></Link>
          </p>
      </div>
    </React.Fragment>
  );
}

export default Header; 