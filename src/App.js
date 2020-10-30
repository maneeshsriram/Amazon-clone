import React, { useEffect } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import CheckOut from './Components/CheckOut'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './Components/LoginPage';
import { auth } from "./firebase";
import { useStateValue } from './stateProvider';
import Footer from './Components/Footer';
import CreateAccount from './Components/CreateAccount';
import Payment from './Components/Payment'

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is ", authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route exact path="/login">
            <LoginPage />
            <Footer />
          </Route>

          <Route exact path="/createacc">
            <CreateAccount />
            <Footer />
          </Route>


          <Route exact path="/checkout">
            <Header />
            <CheckOut />
          </Route>

          <Route exact path="/payment">
            <Header />
            <Payment />
          </Route>

          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>

          <Route path="*">
            <h1 style={{ textAlign: "center" }}>PAGE DOES NOT EXIST</h1>
          </Route>


        </Switch>
      </div>
    </Router>

  );
}

export default App;
