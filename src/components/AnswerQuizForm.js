import React from "react";
import PropTypes from "prop-types";
import ReusableAnswerForm from "./ReusableAnswerForm";
import { useFirestore } from 'react-redux-firebase'

function NewAnswerForm(props){
  console.log(props)

  const firestore = useFirestore();

  function addAnswersToFirestore(event) {
    event.preventDefault();
    console.log("in add Answers to Firestore")
    firestore.collection('quizAnswers').add(
      {
        email: props.userEmail,
        userAnswer1: event.target.userAnswer1.value,
        userAnswer2: event.target.userAnswer2.value, 
        userAnswer3: event.target.userAnswer3.value, 
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
    props.onNewAnswerCreation();
    return;
  }

  return (
    <React.Fragment>
      <ReusableAnswerForm 
        quiz = {props.quiz}
        formSubmissionHandler={addAnswersToFirestore}
        buttonText="Submit answers" />
    </React.Fragment>
  );
}

NewAnswerForm.propTypes = {
  onNewAnswerCreation: PropTypes.func
};

export default NewAnswerForm;