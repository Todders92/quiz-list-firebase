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

  function tallyScore(event) {
    event.preventDefault();
    let counter = 0;
    console.log(props.quiz.answer1)
      if (props.quiz.answer1 === event.target.userAnswer1.value){
        counter +=1;
      }
      if (props.quiz.answer2 === event.target.userAnswer2.value){
        counter +=1;
      }
      if (props.quiz.answer3 === event.target.userAnswer3.value){
        counter +=1;
      }
      console.log(counter);
    }

  return (
    <React.Fragment>
      <ReusableAnswerForm 
        quiz = {props.quiz}
        formSubmissionHandler={tallyScore}
        buttonText="Submit answers" />
    </React.Fragment>
  );
}

NewAnswerForm.propTypes = {
  onNewAnswerCreation: PropTypes.func
};

export default NewAnswerForm;