import React, { useState, useEffect } from "react";
import { message, Icon, Input, Button } from "antd";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import history from "../history";

const Logout = props => {
  const onLogoutClick = () => {
    props.logoutUser();
    //document.location.assign("/login");
    history.push("/login");
  };

  return (
    <div>
      <div style={{ padding: "15px", background: "#000000bf" }}>
        <span style={{ color: "#fff", fontSize: "22px" }}>My To Do App</span>
        <Button style={{ float: "right" }} onClick={onLogoutClick}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default connect(null, { logoutUser })(Logout);
