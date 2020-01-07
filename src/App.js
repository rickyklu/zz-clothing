import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInRegister from "./pages/signin-register/signin-register.component.jsx";
import Header from "./components/header/header.component.jsx";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;

  // auth login
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInRegister} />
        </Switch>
      </div>
    );
  }
}

export default App;
