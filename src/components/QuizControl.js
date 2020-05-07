import React from 'react';
import NewQuizForm from './NewQuizForm';
import QuizList from './QuizList';
import UserQuizes from './UserQuizes';
import QuizDetail from './QuizDetail';
import EditQuizForm from './EditQuizForm';
import AnswerQuizForm from './AnswerQuizForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase'
import { Row, Col, Button } from 'react-bootstrap';

class QuizControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedQuiz: null,
      editing: false,
      userList: false,
      userMatch: false
    };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.state.selectedQuiz != null) {
      this.setState({
        selectedQuiz: null,
        editing: false
      });
    } else {
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewQuizToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleQuizList();
    dispatch(action);
  }

  handleAddingNewAnswerToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleDisplayUserQuizzes = () => {
    const { dispatch } = this.props;
    const action = a.toggleQuizList();
    dispatch(action);
  }

  handleChangingSelectedQuiz = (id) => {
    console.log(this.state.userEmail)
    this.props.firestore.get({collection: 'quizzes', doc: id}).then((quiz) => {
      const quizEmail =  quiz.get("email")
      console.log(quizEmail);
      if (this.state.userEmail === quizEmail) {
        this.setState({
          userMatch: true
        })
        console.log(this.state.userMatch);
      } else {
        console.log("false")
      }
      const firestoreQuiz = {
        quizName: quiz.get("quizName"),
        
        question1: quiz.get("question1"),
        answer1: quiz.get("answer1"),

        question2: quiz.get("question2"),
        answer2: quiz.get("answer2"),

        question3: quiz.get("question3"),
        answer3: quiz.get("answer3"),

        quizScore: quiz.get("quizScore"),
        quizTaken: quiz.get("quizTaken"),
        quizAverage: quiz.get("quizAverage"),


        email: quiz.get("email"),
        id: quiz.id,
      }
      this.setState({selectedQuiz: firestoreQuiz });
    });
  }

  handleDeletingQuiz = (id) => {
    this.props.firestore.get({collection: 'quizzes', doc: id}).then((quiz) => {
      const quizEmail =  quiz.get("email")
      console.log(quizEmail);
      if (this.state.userEmail === quizEmail) {
        this.props.firestore.delete({collection: 'quizzes', doc: id});
        this.setState({selectedQuiz: null});
      } else {
        console.log("false")
      }
    });
  }

  handleEditClick = () => {
    const quizEmail = this.state.selectedQuiz.email;
      if (this.state.userEmail === quizEmail) {
        this.setState({editing: true});
      } else {
        console.log("false")
      }
    };
  

  handleEditingQuizInList = () => {
    this.setState({
      editing: false,
      selectedQuiz: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let button2Text = null;
    const auth = this.props.firebase.auth();
    // this.setState({userEmail: auth.currentUser.email});
    if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <React.Fragment>
          <div className = "mustBeSignedIn text-center">
            <h3>You must be signed in to access the queue.</h3>
          </div>
      </React.Fragment>
    )
  } 
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      this.state.userEmail = auth.currentUser.email;
      if (this.state.editing ) {      
        currentlyVisibleState = 
          <EditQuizForm 
            quiz = {this.state.selectedQuiz} 
            onEditQuiz = {this.handleEditingQuizInList} />
          buttonText = "Return to Quiz List";
          button2Text = "Return to Quiz List";
      } else if (this.state.selectedQuiz != null) {
        if (this.state.userMatch === true) {
          currentlyVisibleState = 
          <QuizDetail 
            quiz = {this.state.selectedQuiz} 
            userEmail = {this.state.userEmail}
            onClickingDelete = {this.handleDeletingQuiz} 
            onClickingEdit = {this.handleEditClick} />
          buttonText = "Return to Quiz List";
          button2Text = "Return to Quiz List";
        } else {
          currentlyVisibleState = 
          <AnswerQuizForm
            quiz = {this.state.selectedQuiz} 
            userEmail = {this.state.userEmail}
            onClickingDelete = {this.handleDeletingQuiz} 
            onClickingEdit = {this.handleEditClick}
            onNewAnswerCreation={this.handleAddingNewAnswerToList} />;
          buttonText = "Return to Quiz List";
          button2Text = "Return to Quiz List";
        }
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = 
        <NewQuizForm 
          userEmail = {this.state.userEmail} 
          onNewQuizCreation={this.handleAddingNewQuizToList}  />;
          buttonText = "Return to Quiz List";
          button2Text = "Return to Quiz List";
      } else if (this.props.quizVisibleOnPage) {
        currentlyVisibleState = 
        <UserQuizes
          userEmail = {this.state.userEmail} 
          onQuizSelection={this.handleChangingSelectedQuiz} />;
        buttonText = "Add Quiz";
        button2Text = "All Quizzes";
        } else {
        currentlyVisibleState = 
        <QuizList
          userEmail = {this.state.userEmail} 
          onQuizSelection={this.handleChangingSelectedQuiz} />;
        buttonText = "Add Quiz";
        button2Text = "My Quizzes";
        }
      }
      return (
        <React.Fragment>
          <Row>
          <Col md={3}>
            <Button onClick={this.handleDisplayUserQuizzes}>{ button2Text }</Button>
          </Col>
          <Col md={9}>
            {currentlyVisibleState}
            <button onClick={this.handleClick}>{buttonText}</button>  
          </Col>
          </Row>
        </React.Fragment>
      );
    }
  }


QuizControl.propTypes = {
  formVisibleOnPage: PropTypes.bool,
  quizVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
    quizVisibleOnPage: state.quizVisibleOnPage
  }
}

QuizControl = connect(mapStateToProps)(QuizControl);

export default withFirestore(QuizControl);