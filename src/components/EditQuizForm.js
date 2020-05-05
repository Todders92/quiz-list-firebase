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
      name: event.target.name.value,
      location: event.target.location.value,
      detail: event.target.detail.value
    }
    return firestore.update({collection: 'quizzes', doc: quiz.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableQuizForm 
        formSubmissionHandler={handleEditQuizFormSubmission}
        buttonText="Update Quiz" />
    </React.Fragment>
  );
}

EditQuizForm.propTypes = {
  onEditQuiz: PropTypes.func
};

export default EditQuizForm;