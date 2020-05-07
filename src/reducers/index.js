import formVisibleReducer from './form-visible-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import quizListVisibleReducer from './quiz-list-visible-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  quizVisibleOnPage: quizListVisibleReducer,
  firestore: firestoreReducer
});

export default rootReducer;