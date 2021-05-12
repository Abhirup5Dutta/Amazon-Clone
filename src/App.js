import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Footer from './Footer';
import BackToTop from './BackToTop';
import HeaderTwo from './HeaderTwo';


const promise = loadStripe("pk_test_51InnnZSBzPgSMpAGG8JUHUKha9f9iO0BAwy58ASrfBraqMeuPQmofRqGET8ARk9P1lY46MyZfMSpugs1G3TOEU7m00jtLY1rqm");


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // Will onluy load once when the user component loads.

    auth.onAuthStateChanged(authUser => {
      // console.log('USER IS >>>', authUser);

      if (authUser) {
        // User logged in / the user was already logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // User is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    // BEM
    <Router>
      <div className="app" id="app">


        <Switch>
          <Route path="/orders">
          <Header />
          <HeaderTwo />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            {/* Header */}
            <Header />
            <HeaderTwo />
            <Checkout />
            <BackToTop />
            <Footer />
          </Route>
          <Route path="/payment">
            {/* Header */}
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
            {/* Header */}
            <Header />
            <HeaderTwo />
            {/* Home */}
            <Home />
            <BackToTop />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
