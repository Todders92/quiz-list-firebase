import React from "react";
import PropTypes from "prop-types";

function ReusableAnswerForm(props) {
  const { quiz } = props;

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
          <h1> {quiz.quizName} </h1>

          <h3> {quiz.question1} </h3>      
        <input
          type='text'
          name='userAnswer1'
          placeholder='Answer 1' />

          <h3> {quiz.question2} </h3>
          <input
          type='text'
          name='userAnswer2'
          placeholder='Answer 2' />

          <h3> {quiz.question3} </h3>
          <input
          type='text'
          name='userAnswer3'
          placeholder='Answer 3' />

        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableAnswerForm.propTypes = {
  quiz: PropTypes.object,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableAnswerForm;