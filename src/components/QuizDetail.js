import React from "react";
import PropTypes from "prop-types";

function QuizDetail(props){
  const { quiz, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Quiz Details</h1>
      <h1>{quiz.quizName}</h1>
      <h3>{quiz.question1}</h3> 
      {/* <h5>{quiz.answer1}</h5> */}
      <h3>{quiz.question2}</h3> 
      {/* <h5>{quiz.answer2}</h5> */}
      <h3>{quiz.question3}</h3> 
      {/* <h5>{quiz.answer3}</h5> */}
      <p><em>{props.formattedWaitTime}</em></p>
      <p>{props.email}</p>
      <p><em>{quiz.detail}</em></p>
      <button onClick={ props.onClickingEdit }>Update Quiz</button>
      <button onClick={()=> onClickingDelete(quiz.id) }>Delete this Quiz</button>
      <hr/>
    </React.Fragment>
  );
}

QuizDetail.propTypes = {
  quiz: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default QuizDetail;
