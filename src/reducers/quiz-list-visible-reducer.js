import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  console.log("reducer")
  switch (action.type) {
    case c.TOGGLE_QUIZ_LIST:
      return !state;
    default:
      return state;
    }
};