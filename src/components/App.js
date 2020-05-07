import React from 'react';
import Header from "./Header";
import QuizControl from "./QuizControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';

function App(){
  return ( 
    <Router>
      <Header />
      <Container>
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <QuizControl />
        </Route>
      </Switch>
    </Container>
    </Router>
  );
}

export default App;