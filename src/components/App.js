import React from 'react';
import Header from "./Header";
import QuizControl from "./QuizControl";
import Signin from "./Signin";
import UserQuizes from "./UserQuizes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <QuizControl />
        </Route>
        <Route path ="/userquizes">
          <UserQuizes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;