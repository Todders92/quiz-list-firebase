import React from "react";
import PropTypes from "prop-types";

function Quiz(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenQuizClicked(props.id)}>
        <h3>{props.quizName}</h3> 
        <h3>{props.question1}</h3> 
        <h5>{props.answer1}</h5>
        <h3>{props.question2}</h3> 
        <h5>{props.answer2}</h5>
        <h3>{props.question3}</h3> 
        <h5>{props.answer3}</h5>
        <p><em>{props.formattedWaitTime}</em></p>
        <p>{props.email}</p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Quiz.propTypes = {
  quizName: PropTypes.string,
  question1: PropTypes.string,
  question2: PropTypes.string,
  question3: PropTypes.string,
  answer1: PropTypes.string,
  answer2: PropTypes.string,
  answer3: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.string,
  whenQuizClicked: PropTypes.func,
  formattedWaitTime: PropTypes.string
};

export default Quiz;
