import React, { useEffect } from "react";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "../Login";
import Home from "./Home";
import Notfound from "../components/Notfound";
import { loginUser } from "../actions/authActions";
import history from "../history";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, user, dispatch, ...rest }) => {
  {
    /*if (user.isSignedIn === true) {
    document.location.assign("/home");
  } */
  }
  return (
    <Route
      {...rest}
      render={props =>
        user.isSignedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const App = props => {
  const dispatch = useDispatch();
  //const user = useSelector(state => state.userAuth);
  const user = props.userAuth;

  {
    /* if (user.isSignedIn === true) {
    document.location.assign("/home");
  }*/
  }
  console.log(props.userAuth.isSignedIn);
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute
          path="/home"
          exact
          component={Home}
          user={user}
          dispatch={dispatch}
        />

        {/*  <Route path="/home" component={Home} /> */}
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Login} user={user} />
        <Route path="*" component={Notfound} user={user} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = state => {
  return { userAuth: state.userAuth };
};

export default connect(mapStateToProps)(App);
