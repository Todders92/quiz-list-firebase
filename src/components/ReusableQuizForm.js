import React from "react";
import PropTypes from "prop-types";

function ReusableQuizForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
          <input
          type='text'
          name='quizName'
          placeholder='Name your quiz' />
        <input
          type='text'
          name='question1'
          placeholder='Question 1' />
          <input
          type='text'
          name='answer1'
          placeholder='Answer 1' />

          <input
          type='text'
          name='question2'
          placeholder='Question 2' />
          <input
          type='text'
          name='answer2'
          placeholder='Answer 2' />

          <input
          type='text'
          name='question3'
          placeholder='Question 3' />
          <input
          type='text'
          name='answer3'
          placeholder='Answer 3' />

        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableQuizForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableQuizForm;
