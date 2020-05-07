import React from "react";
import ReusableQuizForm from "./ReusableQuizForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditQuizForm (props) {
  const firestore = useFirestore();
  
  const { quiz } = props;

  function handleEditQuizFormSubmission(event) {
    event.preventDefault();
    props.onEditQuiz();
    const propertiesToUpdate = {
      quizName: event.target.quizName.value,
      question1: event.target.question1.value,
      answer1: event.target.answer1.value,
      question2: event.target.question2.value,
      answer2: event.target.answer2.value,      
      question3: event.target.question3.value,
      answer3: event.target.answer3.value
    }
    return firestore.update({collection: 'quizzes', doc: quiz.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableQuizForm 
        formSubmissionHandler={handleEditQuizFormSubmission}
        buttonText="Update Quiz" />
        // button2Text="Return to Quiz list" />
    </React.Fragment>
  );
}

EditQuizForm.propTypes = {
  onEditQuiz: PropTypes.func
};

export default EditQuizForm;