import React from "react";
import PropTypes from "prop-types";
import Quiz from "./Quiz";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function QuizList(props){

  useFirestoreConnect([
    { collection: 'memories' }
  ]);

  const quizzes = useSelector(state => state.firestore.ordered.quizzes);

  if (isLoaded(quizzes)) {
    return (
      <React.Fragment>
        <hr/>
        {quizzes.map((quiz) => {
        return <Quiz
          whenQuizClicked = { props.onQSelection }
            name={quiz.name}
            location={quiz.location}
            detail={quiz.detail}
            email={quiz.email}
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

QuizList.propTypes = {
  onQuizSelection: PropTypes.func
};

export default QuizList;
