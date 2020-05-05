import React from "react";
import PropTypes from "prop-types";

function ReusableAnswerForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      {/* <input
          type='hidden'
          name='email'
          value={this.state.userEmail} /> */}
        <input
          type='text'
          name='userAnswer1'
          placeholder='Answer 1' />

          <input
          type='text'
          name='userAnswer2'
          placeholder='Answer 2' />

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
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableAnswerForm;
