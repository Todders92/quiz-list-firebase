import React from "react";
import PropTypes from "prop-types";
import Quiz from "./Quiz";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

function UserQuizes(props){

  useFirestoreConnect([
    { collection: 'quizzes' }
  ]);

  const quizzes = useSelector(state => state.firestore.ordered.quizzes);

  if (isLoaded(quizzes)) {
    return (
      <React.Fragment>
        <h1>My Quizzes</h1>
        <hr/>
        {quizzes.filter(quiz => props.userEmail === quiz.email).map((quiz) => {
        return <Quiz
          whenQuizClicked = { props.onQuizSelection }
          quizName={quiz.quizName}
          email={quiz.email}
          // quizScore={quiz.quizScore}
          // quizTaken={quiz.quizTaken}
          // quizAverage={quiz.quizAverage}
          id={quiz.id}
          key={quiz.id}/>
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading Quiz...</h3>
      </React.Fragment>
    )
  }
}

UserQuizes.propTypes = {
  onQuizSelection: PropTypes.func
};

export default UserQuizes;
