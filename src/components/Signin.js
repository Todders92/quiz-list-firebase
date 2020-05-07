import React from 'react';
import firebase from "firebase/app";
import { Container, Card, Row, Col } from 'react-bootstrap';


function Signin(){
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }  
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
        {/* <div className = "text-center"> */}
          <Card style={{ width: '18rem', textAlign: 'center'}}>
            {/* <Card.Body> */}
            <h2>Sign up</h2>
            <form onSubmit={doSignUp}>
              <p>
              <input
                type='text'
                name='email'
                placeholder='email' />
                </p>
                <p>
              <input
                type='password'
                name='password'
                placeholder='Password' />
                </p>
              <button type='submit'>Sign up</button>
            </form>
            {/* </Card.Body> */}
          </Card>
        {/* </div> */}

    <div className = "text-center">
      <h2>Sign In</h2>
      <form onSubmit={doSignIn}>
        <p>
          <h3> Email: </h3>
        <input
          type='text'
          name='signinEmail'
          placeholder='Email' />
        </p>
        <h3> Password: </h3>
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button type='submit'>Sign in</button>
      </form>
    </div>
      
        <h2>Sign Out</h2>
        <button onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  );
}

export default Signin
