import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import UserHome from "./UserHome/UserHome.js";
import UserProfile from "./UserHome/UserProfile/UserProfile.js";
import Zipcode from "./UserHome/Zipcode/Zipcode.js";

class UserRoutes extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Route
          exact
          path={this.props.match.path}
          render={() => {
            return <Redirect to="/user/home" />;
          }}
        />
        <Route
          exact
          path={`${this.props.match.path}/home`}
          component={UserHome}
        />

        <Route
          exact
          path={this.props.match.path}
          render={() => {
            return <Redirect to="/user/profile" />;
          }}
        />
        <Route
          exact
          path={`${this.props.match.path}/profile`}
          component={UserProfile}
        />
        <Route
          exact
          path={this.props.match.path}
          render={() => {
            return <Redirect to="/user/zipcode" />;
          }}
        />
        <Route
          exact
          path={`${this.props.match.path}/zipcode`}
          component={Zipcode}
        />
      </div>
    );
  }
}
export default UserRoutes;
