import React from "react";
import PropTypes from "prop-types";
import ReusableQuizForm from "./ReusableQuizForm";
import { useFirestore } from 'react-redux-firebase'

function NewQuizForm(props){

  const firestore = useFirestore();

  function addQuizToFirestore(event) {
    event.preventDefault();
    console.log("in add Quiz to Firestore")
    let defaultScore = 0;
    firestore.collection('quizzes').add(
      {
        email: props.userEmail,

        quizName: event.target.quizName.value,
        quizScore: defaultScore,
        quizTaken: defaultScore,
        quizAverage: defaultScore,


        question1: event.target.question1.value,
        answer1: event.target.answer1.value,

        question2: event.target.question2.value,
        answer2: event.target.answer2.value, 

        question3: event.target.question3.value,
        answer3: event.target.answer3.value, 
        timeOpen: firestore.FieldValue.serverTimestamp(),
      }
    );
    props.onNewQuizCreation();
    return;
  }

  return (
    <React.Fragment>
      <ReusableQuizForm 
        formSubmissionHandler={addQuizToFirestore}
        buttonText="Submit questions" />
    </React.Fragment>
  );
}

NewQuizForm.propTypes = {
  onNewQuizCreation: PropTypes.func
};

export default NewQuizForm;